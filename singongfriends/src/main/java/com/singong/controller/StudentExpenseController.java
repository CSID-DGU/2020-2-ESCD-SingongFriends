package com.singong.controller;

import com.singong.dto.StudentExpenseDTO;
import com.singong.model.Expense;
import com.singong.model.Semester;
import com.singong.model.Student;
import com.singong.model.StudentExpense;
import com.singong.repository.studentExpense.StudentExpenseRepository;
import lombok.RequiredArgsConstructor;
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

    @GetMapping("/student-expenses")
    public ResponseEntity<List<StudentExpenseDTO.Get>> getAllStudentExpenses() {
         List<StudentExpense> result = studentExpenseRepository.findAll();
         List<StudentExpenseDTO.Get> response = new ArrayList<>();
         for (StudentExpense se : result) {

         }
         return null;
    }

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
