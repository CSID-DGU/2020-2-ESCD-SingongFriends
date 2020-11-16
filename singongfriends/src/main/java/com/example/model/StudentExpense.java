package com.example.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class StudentExpense {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "studentExpenseId")
    private int studentExpenseId;

    @ManyToOne
    @JoinColumn(name = "studentId", nullable = false)
    private Student student;

    @ManyToOne
    @JoinColumn(name = "expenseId", nullable = false)
    private Expense expense;

    @ManyToOne
    @JoinColumn(name = "semesterId", nullable = false)
    private Semester semester;

    public StudentExpense(Student student, Expense expense, Semester semester) {
        this.student = student;
        this.expense = expense;
        this.semester = semester;
    }
}
