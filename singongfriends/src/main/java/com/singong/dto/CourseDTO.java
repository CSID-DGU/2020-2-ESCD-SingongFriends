package com.singong.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

public class CourseDTO {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class CourseGet {
        private int courseId;
        private String courseTitle;
        private int point;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class CoursePost {
        private String title;
        private String score;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class CourseHistoryGet {
        private List<CourseGet> done;
        private List<CourseGet> undone;
    }
}
