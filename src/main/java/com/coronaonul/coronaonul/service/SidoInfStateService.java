package com.coronaonul.coronaonul.service;

import com.coronaonul.coronaonul.vo.Coronic;
import com.coronaonul.coronaonul.vo.SidoInfState;
import com.coronaonul.coronaonul.vo.SidoInfStateItemDTO;
import com.coronaonul.coronaonul.vo.SidoInfStateResponseVO;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class SidoInfStateService {

    private final String serviceKey = "vmdBKFza1pRM8jv8FO2uFsPNEXOCLbCf%2FefaY0zpCELMKWlCM5SaitmmsIoTENR6ik0xqaY%2BsAOUs1Du%2FMLrvQ%3D%3D";
    private final String SidoInfStateURL = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson";
    private final String createDt = "20201124";
    private RestTemplate restTemplate = new RestTemplate();

    public List<SidoInfState> getItemsFromOpenApi() throws URISyntaxException, ParseException {

        URI uri = new URI(SidoInfStateURL + "?serviceKey=" + serviceKey
                    + "&pageNo=1" + "&numOfRows=10"
                    + "&startCreateDt=" + createDt + "&endCreateDt=" + createDt);

        SidoInfStateResponseVO response = restTemplate.getForObject(uri, SidoInfStateResponseVO.class);
        List<SidoInfStateItemDTO> items = response.getBody().getItems();

        List<SidoInfState> sidoInfStateList = new ArrayList<>();

        for (SidoInfStateItemDTO item : items) {
            SidoInfState sidoInfState = new SidoInfState();
            sidoInfState.setSidoInfStateItem(item);
            sidoInfState.setWeekData(getWeekData(item.getGubunEn()));

            sidoInfStateList.add(sidoInfState);
        }

        return sidoInfStateList;

    }

    public List<Coronic> getWeekData(String sido) throws URISyntaxException, ParseException {

        List<Coronic> weekData = new ArrayList<Coronic>();

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
            URI uri = new URI(SidoInfStateURL + "?serviceKey=" + serviceKey
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

        return weekData;

    }
}
