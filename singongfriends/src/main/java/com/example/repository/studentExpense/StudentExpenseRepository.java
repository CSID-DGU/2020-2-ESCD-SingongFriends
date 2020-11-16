package com.example.repository.studentExpense;

import com.example.model.StudentExpense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentExpenseRepository extends JpaRepository<StudentExpense, Integer>, CustomStudentExpenseRepository {
}
