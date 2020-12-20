package com.singong.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class PaymentDTO {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class GetOpenID {
        private String appid;
        private String secret;
        private String js_code;
        private String grant_type;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PayDTO {
        private String openId;
        private int amount;
    }

    /*
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PayResult {
        private String timeStamp;
        private String nonceStr;
        private String package;
        private String signType;
        private String tId;
        private
    }
     */
}

