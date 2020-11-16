package com.example.controller;

import com.example.dto.StudentDTO;
import com.example.dto.StudentExpenseDTO;
import com.example.model.Student;
import com.example.model.StudentExpense;
import com.example.model.StudentScholar;
import com.example.repository.expense.ExpenseRepository;
import com.example.repository.student.StudentRepository;
import com.example.repository.studentExpense.StudentExpenseRepository;
import com.example.repository.studentScholar.StudentScholarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class StudentController {

    private final StudentRepository studentRepository;
    private final ExpenseRepository expenseRepository;
    private final StudentExpenseRepository studentExpenseRepository;
    private final StudentScholarRepository studentScholarRepository;

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody StudentDTO.Login loginForm) {
        List<Student> students = studentRepository.findByStudentCode(loginForm.getStudentCode());
        if (students == null || (students.size() == 0)) {
            return new ResponseEntity<Boolean>(false, HttpStatus.OK);
        }
        Student student = students.get(0);
        if (!student.getPassword().equals(loginForm.getPassword())) {
            return new ResponseEntity<Boolean>(false, HttpStatus.OK);
        }
        student.setWechatToken(loginForm.getWechatToken());
        studentRepository.save(student);
        return new ResponseEntity<Boolean>(true, HttpStatus.OK);
    }

    @PostMapping("/students")
    public ResponseEntity<Boolean> addStudents(@RequestBody List<StudentDTO.Create> newStudents) {
        for (StudentDTO.Create student : newStudents) {
            studentRepository.save(
                    new Student(student.getName(), student.getPassword(), student.getMajor(),student.getStudentCode()));
        }
        return new ResponseEntity<Boolean>(true, HttpStatus.OK);
    }

    @GetMapping("/students/student/{studentId}/student-expenses/semester/{semester}")
    public ResponseEntity<StudentExpenseDTO.Get> getAllStudentExpenseByStudentId(
            @PathVariable("studentId") int studentId, @PathVariable("semester") int semester) {
        StudentExpense studentExpense = studentExpenseRepository.findByStudentIdAndSemester(studentId, semester);
        if (studentExpense == null) {
            return new ResponseEntity<>(null, HttpStatus.OK);
        }
        List<StudentScholar> studentScholars = studentScholarRepository.findByStudentIdAndSemester(studentId, semester);
        int amountBeforeReduction = studentExpense.getExpense().getAmountMoney();
        int amountAfterReduction = amountBeforeReduction;
        int amountReduction = 0;
        for (StudentScholar studentScholar: studentScholars) {
            int reduction = studentScholar.getScholar().getMoney();
            amountAfterReduction -= reduction;
            amountReduction += reduction;
        }
        return new ResponseEntity<>(new StudentExpenseDTO.Get(
                studentExpense.getStudentExpenseId(), amountBeforeReduction,
                amountReduction, amountAfterReduction), HttpStatus.OK);
    }

    @GetMapping("/students")
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> result = studentRepository.findAll();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/students/student/token/{wechatToken}")
    public ResponseEntity<List<Student>> getAllStudents(@PathVariable("wechatToken") String wechatToken) {
        List<Student> students = studentRepository.findByWechatToken(wechatToken);
        if (students == null || students.size() == 0) {
            return new ResponseEntity("해당 토큰을 가진 유저가 없습니다", HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(students, HttpStatus.OK);
        }
    }

}
