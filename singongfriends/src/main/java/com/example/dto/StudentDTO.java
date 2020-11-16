package com.example.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class StudentDTO {

    @Getter @Setter
    @NoArgsConstructor @AllArgsConstructor
    public static class Login {
        private String studentCode;
        private String password;
        private String wechatToken;
    }

    @Getter @Setter
    @NoArgsConstructor @AllArgsConstructor
    public static class Create {
        private String studentCode;
        private String password;
        private String major;
        private String name;
    }
}
