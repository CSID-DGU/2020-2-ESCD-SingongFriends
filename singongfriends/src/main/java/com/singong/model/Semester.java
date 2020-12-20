package com.singong.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Semester {

    @Id @Column(name = "semesterId")
    private int semesterId;

    @OneToMany
    private List<StudentExpense> studentExpenses = new ArrayList<>();

    @OneToMany
    private List<StudentScholar> studentScholars = new ArrayList<>();

    public Semester(int semesterId) {
        this.semesterId = semesterId;
    }

    public Semester(List<StudentExpense> studentExpenses, List<StudentScholar> studentScholars) {
        this.studentExpenses = studentExpenses;
        this.studentScholars = studentScholars;
    }
}
