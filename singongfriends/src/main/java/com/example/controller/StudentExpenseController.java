package com.example.controller;

import com.example.dto.StudentExpenseDTO;
import com.example.model.Expense;
import com.example.model.Semester;
import com.example.model.Student;
import com.example.model.StudentExpense;
import com.example.repository.expense.ExpenseRepository;
import com.example.repository.studentExpense.StudentExpenseRepository;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class StudentExpenseController {

    @PersistenceContext
    private final EntityManager em;

    private final StudentExpenseRepository studentExpenseRepository;

    @PostMapping("/student-expenses")
    public ResponseEntity<Object> addStudentExpenses(@RequestBody List<StudentExpenseDTO.Create> newStudentExpenses) {
        final List<StudentExpense> studentExpenses = new ArrayList<>();
        for (StudentExpenseDTO.Create studentExpenseDTO : newStudentExpenses) {
            Student student = em.getReference(Student.class, studentExpenseDTO.getStudentId());
            Semester semester = em.getReference(Semester.class, studentExpenseDTO.getSemester());
            Expense expense = em.getReference(Expense.class, studentExpenseDTO.getExpenseId());
            studentExpenses.add(new StudentExpense(student, expense, semester));
        }
        studentExpenseRepository.saveAll(studentExpenses);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
