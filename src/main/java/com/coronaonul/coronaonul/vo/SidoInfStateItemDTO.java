package com.coronaonul.coronaonul.vo;

import lombok.Data;
import lombok.ToString;

import javax.xml.bind.annotation.XmlRootElement;

@Data
@XmlRootElement(name="item")
public class SidoInfStateItemDTO {

    private String deathCnt;        // 사망자 수
    private String defCnt;          // 누적 확진자 수
    private String gubun;           // 시도명(한글)
    private String gubunEn;         // 시도명(영어)
    private String incDec;          // 전일대비 증감 수(오늘 확진자수)
    private String isolClearCnt;    // 격리 해제 수
    private String isolIngCnt;      // 격리중 환자수
    private String localOccCnt;     // 지역발생 수
    private String overFlowCnt;     // 해외유입 수

}
