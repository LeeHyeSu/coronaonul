package com.coronaonul.coronaonul.vo;

import lombok.Data;

import java.util.List;

@Data
public class SidoInfState {

    private SidoInfStateItemDTO sidoInfStateItem;         // 시도별 코로나 확진자 정보
    private List<Coronic> weekData;                       // 일주일 확진자 수

}
