package com.singong.dto;

import com.singong.model.Student;
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
    public static class StudentCreate {
        private String studentCode;
        private String password;
        private String major;
        private String name;
    }


    @Getter @Setter
    @NoArgsConstructor @AllArgsConstructor
    public static class StudentGet {
        private int studentId;
        private String studentCode;
        private String major;
        private String name;
        private String wechatToken;

        public static StudentDTO.StudentGet fromStudent(Student student) {
            return new StudentDTO.StudentGet(
                    student.getStudentId(), student.getStudentCode(),
                    student.getMajor(), student.getName(), student.getWechatToken());
        }
    }
}
