package com.singong.repository.studentExpense;

import com.singong.model.StudentExpense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentExpenseRepository extends JpaRepository<StudentExpense, Integer>, CustomStudentExpenseRepository {
}
