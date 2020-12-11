package com.coronaonul.coronaonul.service;

import com.coronaonul.coronaonul.domain.sidoinfstate.SidoInfState;
import com.coronaonul.coronaonul.domain.sidoinfstate.SidoInfStateRepository;
import com.coronaonul.coronaonul.vo.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class SidoInfStateService {

    private final SidoInfStateRepository sidoInfStateRepository;

    @Value("${serviceKey}")
    private String serviceKey;

    @Value("${sidoInfStateURL}")
    private String sidoInfStateURL;

    private String createDt = new CreateDate().getCreateDt();

    private RestTemplate restTemplate = new RestTemplate();

    @Transactional
    public void save(SidoInfStateItemDTO item) {
        sidoInfStateRepository.save(item.toEntity());
    }

    @Transactional
    public List<SidoInfStateItemDTO> findByDate() {

        List<SidoInfState> sidoInfStateList = sidoInfStateRepository.findByDate(createDt);

        if (!sidoInfStateList.isEmpty()) {
            System.out.println("From Database");
            return sidoInfStateList.stream()
                    .map(SidoInfStateItemDTO::new)
                    .collect(Collectors.toList());
        } else {
            System.out.println("call OpenApi");
            return getItemsFromOpenApi();
        }

    }

    @Transactional
    public List<SidoInfStateItemDTO> getItemsFromOpenApi() {

        List<SidoInfStateItemDTO> items = new ArrayList<>();

        try {
            URI uri = new URI(sidoInfStateURL + "?serviceKey=" + serviceKey
                    + "&pageNo=1" + "&numOfRows=10"
                    + "&startCreateDt=" + createDt + "&endCreateDt=" + createDt);

            SidoInfStateResponseVO response = restTemplate.getForObject(uri, SidoInfStateResponseVO.class);
            items = response.getBody().getItems();

            for (SidoInfStateItemDTO item : items) {
                item.setStdDay(createDt);
                save(item);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return items;

    }

    @Transactional
    public SidoDetails findBySido(String sido) {

        SidoDetails sidoDetails = new SidoDetails();
        SidoInfState sidoInfState = sidoInfStateRepository.findByDateAndSido(createDt, sido);

        if (sidoInfState != null) {
            sidoDetails.setSidoInfState(new SidoInfStateItemDTO(sidoInfState));
        } else {
            List<SidoInfStateItemDTO> items = getItemsFromOpenApi();

            for (SidoInfStateItemDTO item : items) {
                if (item.getGubunEn().equals(sido)) {
                    sidoDetails.setSidoInfState(item);
                }
            }
        }

        sidoDetails.setWeekData(getWeekData(sido));

        return sidoDetails;
    }

    @Transactional
    public List<NumberByDate> getWeekData(String sido) {

        List<NumberByDate> weekData = new ArrayList<>();

        LocalDateTime now = LocalDateTime.now();

        // 현재 날짜로부터 일주일 전까지의 날짜 리스트 생성
        for (int i = 6; i > 0; i--) {
            String date = now.minusDays(i).format(DateTimeFormatter.BASIC_ISO_DATE);

            SidoInfState sidoInfState = sidoInfStateRepository.findByDateAndSido(date, sido);
            if (sidoInfState != null) {
                weekData.add(new NumberByDate(date, sidoInfState.getIncDec()));
            } else {
                weekData.add(new NumberByDate(date));
            }
        }

        SidoInfState sidoInfState = sidoInfStateRepository.findByDateAndSido(createDt, sido);
        if (sidoInfState != null) {
            weekData.add(new NumberByDate(createDt, sidoInfState.getIncDec()));
        } else {
            weekData.add(new NumberByDate(createDt));
        }

        if (weekData.get(0).getNumber() == null) {
            System.out.println("call Open Api For WeekData");
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
                        item.setStdDay(numberByDate.getDate());

                        if (item.getGubunEn().equals(sido) && !item.getStdDay().equals(createDt)) {
                            save(item);
                            numberByDate.setNumber(item.getIncDec());
                            break;
                        }
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
            }

        }

        return weekData;

    }

}
