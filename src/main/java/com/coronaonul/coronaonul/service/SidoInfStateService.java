package com.coronaonul.coronaonul.service;

import com.coronaonul.coronaonul.vo.NumberByDate;
import com.coronaonul.coronaonul.vo.SidoDetails;
import com.coronaonul.coronaonul.vo.SidoInfStateItemDTO;
import com.coronaonul.coronaonul.vo.SidoInfStateResponseVO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class SidoInfStateService {

    @Value("${serviceKey}")
    private String serviceKey;

    @Value("${sidoInfStateURL}")
    private String sidoInfStateURL;

    private RestTemplate restTemplate = new RestTemplate();

    public List<SidoInfStateItemDTO> getItemsFromOpenApi() {

        List<SidoInfStateItemDTO> items = new ArrayList<>();
        String createDt = getCreateDt();

        try {
            URI uri = new URI(sidoInfStateURL + "?serviceKey=" + serviceKey
                    + "&pageNo=1" + "&numOfRows=10"
                    + "&startCreateDt=" + createDt + "&endCreateDt=" + createDt);

            SidoInfStateResponseVO response = restTemplate.getForObject(uri, SidoInfStateResponseVO.class);
            items = response.getBody().getItems();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return items;

    }

    public SidoDetails getSidoDetails(String sido) {

        SidoDetails sidoDetails = new SidoDetails();

        List<SidoInfStateItemDTO> items = getItemsFromOpenApi();

        for (SidoInfStateItemDTO item : items) {
            if (item.getGubunEn().equals(sido)) {
                sidoDetails.setSidoInfState(item);
            }
        }

        sidoDetails.setWeekData(getWeekData(sido));

        return sidoDetails;
    }

    public List<NumberByDate> getWeekData(String sido) {

        List<NumberByDate> weekData = new ArrayList<>();

        LocalDateTime now = LocalDateTime.now();

        // 현재 날짜로부터 일주일 전까지의 날짜 리스트 생성
        for (int i = 6; i > 0; i--) {
            String date = now.minusDays(i).format(DateTimeFormatter.BASIC_ISO_DATE);
            weekData.add(new NumberByDate(date));
        }
        weekData.add(new NumberByDate(getCreateDt()));

        try {
            // 날짜 별로 Open Api 를 호출
            for (NumberByDate numberByDate : weekData) {
                URI uri = new URI(sidoInfStateURL + "?serviceKey=" + serviceKey
                        + "&pageNo=1" + "&numOfRows=10"
                        + "&startCreateDt=" + numberByDate.getDate() + "&endCreateDt=" + numberByDate.getDate());

                SidoInfStateResponseVO response = restTemplate.getForObject(uri, SidoInfStateResponseVO.class);
                List<SidoInfStateItemDTO> items = response.getBody().getItems();

                // items 를 순회하면서 해당 시·도 이면 incDecByDate 에 오늘 확진자 수(IncDec) 데이터 set
                for (SidoInfStateItemDTO item : items) {
                    if (item.getGubunEn().equals(sido)) {
                        numberByDate.setNumber(item.getIncDec());
                        break;
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return weekData;

    }

    public String getCreateDt() {

        LocalTime currentTime = LocalTime.now();
        LocalTime referenceTime = LocalTime.of(10, 0, 0);

        // 현재 시간이 기준 시간 (10:00 A.M.) 보다 이전 시간이라면 하루 전 날의 확진자 정보 제공
        // 공공데이터 업데이트 시간 전에 api 호출 시 null 값을 반환하지 못하게 하기 위함
        if (currentTime.isBefore(referenceTime)) {
            return LocalDateTime.now().minusDays(1).format(DateTimeFormatter.BASIC_ISO_DATE);
        } else {
            return LocalDateTime.now().format(DateTimeFormatter.BASIC_ISO_DATE);
        }

    }

}
