package com.coronaonul.coronaonul.vo;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class Coronic {  // coronic : 코로나19 감염 확진자

    private String date;            // 날짜
    private String number;          // 확진자 수

    public Coronic(String date) {
        this.date = date;
    }

}
