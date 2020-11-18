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
    public static class Create {
        private String studentCode;
        private String password;
        private String major;
        private String name;
    }


    @Getter @Setter
    @NoArgsConstructor @AllArgsConstructor
    public static class Get {
        private int studentId;
        private String studentCode;
        private String major;
        private String name;
        private String wechatToken;

        public static StudentDTO.Get fromStudent(Student student) {
            return new StudentDTO.Get(
                    student.getStudentId(), student.getStudentCode(),
                    student.getMajor(), student.getName(), student.getWechatToken());
        }
    }
}
