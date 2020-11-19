package com.coronaonul.coronaonul.vo;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class IncDecByDate {

    private String date;            // 날짜
    private String incDec;          // 전일대비 증감 수(오늘 확진자수)

    public IncDecByDate(String date) {
        this.date = date;
    }
}
