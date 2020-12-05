package com.singong.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class StudentCourseDTO {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class createStudentCourse {
        private int studentId;
        private int courseId;
    }
/*
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class GetStudentCoruse {
        private
    }
    */
}
