package com.coronaonul.coronaonul.vo;

import lombok.Data;

@Data
public class NumberByDate {

    private String date;            // 날짜
    private String number;          // 확진자 수

    public NumberByDate(String date) {
        this.date = date;
    }

}
