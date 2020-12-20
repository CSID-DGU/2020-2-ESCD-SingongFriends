package com.singong.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class StudentScholar {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "studentScholarId")
    private int studentScholarId;

    @ManyToOne
    @JoinColumn(name = "studentId", nullable = false)
    private Student student;

    @ManyToOne
    @JoinColumn(name = "scholarId", nullable = false)
    private Scholar scholar;

    @ManyToOne
    @JoinColumn(name = "semesterId", nullable = false)
    private Semester semester;


    public StudentScholar(Student student, Scholar scholar, Semester semester) {
        this.student = student;
        this.scholar = scholar;
        this.semester = semester;
    }
}
