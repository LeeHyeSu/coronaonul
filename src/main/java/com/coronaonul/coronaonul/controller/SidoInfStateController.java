package com.coronaonul.coronaonul.controller;

import com.coronaonul.coronaonul.service.SidoInfStateService;
import com.coronaonul.coronaonul.vo.SidoDetails;
import com.coronaonul.coronaonul.vo.SidoInfStateItemDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
public class SidoInfStateController {

    @Autowired
    SidoInfStateService sidoInfStateService;

    @GetMapping("/coronaonul")
    public List<SidoInfStateItemDTO> requestSidoInfState() {
        return sidoInfStateService.getItemsFromOpenApi();
    }

    @GetMapping("/coronaonul/{sido}")
    public SidoDetails requestSidoDetails(@PathVariable String sido) {
        return sidoInfStateService.getSidoDetails(sido);
    }

}
