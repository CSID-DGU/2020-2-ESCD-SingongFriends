package com.singong.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class StudentCourse {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "studentCourseId")
    private int studentCourseId;

    @ManyToOne
    @JoinColumn(name = "studentId", nullable = false)
    private Student student;

    @ManyToOne
    @JoinColumn(name = "courseId", nullable = false)
    private Course course;

    public StudentCourse(Student student, Course course) {
        this.student = student;
        this.course = course;
    }
}
