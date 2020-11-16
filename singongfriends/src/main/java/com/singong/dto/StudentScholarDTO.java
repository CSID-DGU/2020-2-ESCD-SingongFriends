package com.singong.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class StudentScholarDTO {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Get {
        private int studentScholarId;
        private String fund;
        private int semester;
        private int studentId;
        private int scholarId;
        private int money;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Create {
        private int semester;
        private int studentId;
        private int scholarId;
    }
}
