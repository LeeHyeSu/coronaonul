package com.coronaonul.coronaonul.controller;

import com.coronaonul.coronaonul.service.SidoInfStateService;
import com.coronaonul.coronaonul.vo.SidoInfStateItemDTO;
import com.coronaonul.coronaonul.vo.SidoInfStateResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.List;

@RestController
public class SidoInfStateController {

    @Autowired
    SidoInfStateService sidoInfStateService;

    @GetMapping("/sido-inf-state")
    public List<SidoInfStateItemDTO> requestSidoInfState() throws URISyntaxException {
        return sidoInfStateService.getItemsFromOpenApi();
    }
}
