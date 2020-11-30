package com.coronaonul.coronaonul.service;

import com.coronaonul.coronaonul.vo.Coronic;
import com.coronaonul.coronaonul.vo.SidoInfStateItemDTO;
import com.coronaonul.coronaonul.vo.SidoInfStateResponseVO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
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

            for (SidoInfStateItemDTO item : items) {
                System.out.println(item.toString());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return items;

    }

    public List<Coronic> getWeekData(String sido) {

        List<Coronic> weekData = new ArrayList<>();
        String createDt = getCreateDt();

        try {
            Calendar cal = Calendar.getInstance();
            DateFormat df = new SimpleDateFormat("yyyyMMdd");
            Date date = df.parse(createDt);
            cal.setTime(date);

            // 현재 날짜로부터 일주일 전까지의 날짜 리스트 생성
            for (int i = 6; i > 0; i--) {
                cal.add(Calendar.DATE, -i);
                weekData.add(new Coronic(df.format(cal.getTime())));
                cal.setTime(date);
            }
            weekData.add(new Coronic(createDt));

            // 날짜 별로 Open Api 를 호출
            for (Coronic coronic : weekData) {
                URI uri = new URI(sidoInfStateURL + "?serviceKey=" + serviceKey
                        + "&pageNo=1" + "&numOfRows=10"
                        + "&startCreateDt=" + coronic.getDate() + "&endCreateDt=" + coronic.getDate());

                SidoInfStateResponseVO response = restTemplate.getForObject(uri, SidoInfStateResponseVO.class);
                List<SidoInfStateItemDTO> items = response.getBody().getItems();

                // items 를 순회하면서 해당 시·도 이면 incDecByDate 에 오늘 확진자 수(IncDec) 데이터 set
                for (SidoInfStateItemDTO item : items) {
                    if (item.getGubunEn().equals(sido)) {
                        coronic.setNumber(item.getIncDec());
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

        String date = "";

        try {
            DateFormat df = new SimpleDateFormat("yyyyMMdd");

            Calendar cal = Calendar.getInstance();
            cal.add(Calendar.DATE, -1);

            date = df.format(cal.getTime());
        } catch (Exception e) {
            e.printStackTrace();
        }

        return date;
    }

}
