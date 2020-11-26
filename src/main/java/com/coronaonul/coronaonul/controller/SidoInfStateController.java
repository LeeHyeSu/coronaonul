package com.coronaonul.coronaonul.controller;

import com.coronaonul.coronaonul.service.SidoInfStateService;
import com.coronaonul.coronaonul.vo.Coronic;
import com.coronaonul.coronaonul.vo.SidoInfState;
import com.coronaonul.coronaonul.vo.SidoInfStateItemDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URISyntaxException;
import java.text.ParseException;
import java.util.List;

@RestController
public class SidoInfStateController {

    @Autowired
    SidoInfStateService sidoInfStateService;

    @GetMapping("/coronaonul")
    public List<SidoInfState> requestSidoInfState() throws URISyntaxException, ParseException {
        return sidoInfStateService.getItemsFromOpenApi();
    }

}
