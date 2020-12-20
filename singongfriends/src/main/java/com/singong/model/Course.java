package com.singong.model;

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
public class Course {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "courseId")
    private int courseId;

    private String courseTitle;

    private int point;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<StudentCourse> studentCourses = new ArrayList<>();

    public Course(String courseTitle, int point) {
        this.courseTitle = courseTitle;
        this.point = point;
    }
}
