package com.coronaonul.coronaonul.service;

import com.coronaonul.coronaonul.vo.SidoInfStateItemDTO;
import com.coronaonul.coronaonul.vo.SidoInfStateResponseVO;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@Service
public class SidoInfStateService {

    private final String serviceKey = "vmdBKFza1pRM8jv8FO2uFsPNEXOCLbCf%2FefaY0zpCELMKWlCM5SaitmmsIoTENR6ik0xqaY%2BsAOUs1Du%2FMLrvQ%3D%3D";
    private final String SidoInfStateURL = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson";
    private final String createDt = "20201101";
    private RestTemplate restTemplate = new RestTemplate();

    public List<SidoInfStateItemDTO> getItemsFromOpenApi() throws URISyntaxException {

        URI uri = new URI(SidoInfStateURL + "?serviceKey=" + serviceKey
                    + "&pageNo=1" + "&numOfRows=10"
                    + "&startCreateDt=" + createDt + "&endCreateDt=" + createDt);


        SidoInfStateResponseVO response = restTemplate.getForObject(uri, SidoInfStateResponseVO.class);
        List<SidoInfStateItemDTO> items = response.getBody().getItems();

        return items;

    }
}
