package com.singong.controller;

import com.singong.dto.StudentExpenseDTO;
import com.singong.model.Expense;
import com.singong.model.Semester;
import com.singong.model.Student;
import com.singong.model.StudentExpense;
import com.singong.repository.studentExpense.StudentExpenseRepository;
import com.singong.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
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
    private final StudentService studentService;

    @GetMapping("/student-expenses")
    public ResponseEntity<List<StudentExpenseDTO.StudentExpenseCalculatedGet>> getAllStudentExpenses() {
         List<StudentExpense> result = studentExpenseRepository.findAll();
         List<StudentExpenseDTO.StudentExpenseCalculatedGet> response = new ArrayList<>();

         result.parallelStream()
                 .map(x ->
                         studentService.getStudentExpenseByStudentIdAndSemester(
                                 x.getStudentExpenseId(), x.getSemester().getSemesterId()))
                .forEach(response::add);
         return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/student-expenses")
    public ResponseEntity<Object> addStudentExpenses(@RequestBody List<StudentExpenseDTO.StudentExpenseCreate> newStudentExpenses) {
        final List<StudentExpense> studentExpenses = new ArrayList<>();
        for (StudentExpenseDTO.StudentExpenseCreate studentExpenseDTO : newStudentExpenses) {
            Student student = em.getReference(Student.class, studentExpenseDTO.getStudentId());
            Semester semester = em.getReference(Semester.class, studentExpenseDTO.getSemester());
            Expense expense = em.getReference(Expense.class, studentExpenseDTO.getExpenseId());
            int studentId = studentExpenseDTO.getStudentId();
            int semesterId = studentExpenseDTO.getSemester();
            StudentExpense exists =
                    studentExpenseRepository.findByStudentIdAndSemester(
                            studentId, semesterId);
            if (exists != null) {
                return new ResponseEntity<Object>(
                        "studentId = " + studentId + "와 semester = " + semester + "에 해당하는 데이터가 이미 존재합니다,",
                        HttpStatus.BAD_REQUEST);
            }
            studentExpenses.add(new StudentExpense(student, expense, semester));
        }
        studentExpenseRepository.saveAll(studentExpenses);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/student-expenses")
    public ResponseEntity<Object> deleteStudentExpenses(@RequestBody List<StudentExpenseDTO.StudentExpenseRemove> studentExpenses) {
        studentExpenses.parallelStream()
            .forEach(x -> studentExpenseRepository.deleteById(x.getStudentExpenseId()));
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
