package com.example.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "studentId")
    private int studentId;

    private String studentCode;

    private String password;

    private String major;

    private String name;

    private String wechatToken;

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<StudentCourse> studentCourses = new ArrayList<>();

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<StudentExpense> studentExpenses = new ArrayList<>();

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<StudentScholar> studentScholars = new ArrayList<>();

    public Student(String name, String password, String major, String studentCode, String wechatToken) {
        this.name = name;
        this.password = password;
        this.major = major;
        this.studentCode = studentCode;
        this.wechatToken = wechatToken;
    }

    public Student(String name, String password, String major, String studentCode) {
        this(name, password, major, studentCode, "");
    }
}
