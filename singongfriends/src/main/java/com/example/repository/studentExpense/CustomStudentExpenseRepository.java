package com.example.repository.studentExpense;

import com.example.model.StudentExpense;

public interface CustomStudentExpenseRepository {

    public StudentExpense findByStudentIdAndSemester(int studentId, int semester);
}
