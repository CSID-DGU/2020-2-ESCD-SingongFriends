package com.singong.repository.studentExpense;

import com.singong.model.StudentExpense;

public interface CustomStudentExpenseRepository {

    public StudentExpense findByStudentIdAndSemester(int studentId, int semester);
}
