package com.singong.controller;

import com.singong.dto.StudentDTO;
import com.singong.dto.StudentExpenseDTO;
import com.singong.model.Student;
import com.singong.repository.expense.ExpenseRepository;
import com.singong.repository.student.StudentRepository;
import com.singong.repository.studentExpense.StudentExpenseRepository;
import com.singong.repository.studentScholar.StudentScholarRepository;
import com.singong.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class StudentController {

    private final StudentRepository studentRepository;
    private final ExpenseRepository expenseRepository;
    private final StudentExpenseRepository studentExpenseRepository;
    private final StudentScholarRepository studentScholarRepository;
    private final StudentService studentService;

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
    public ResponseEntity<Boolean> addStudents(@RequestBody List<StudentDTO.StudentCreate> newStudents) {
        for (StudentDTO.StudentCreate student : newStudents) {
            studentRepository.save(
                    new Student(student.getName(), student.getPassword(), student.getMajor(),student.getStudentCode()));
        }
        return new ResponseEntity<Boolean>(true, HttpStatus.OK);
    }

    @GetMapping("/students/student/{studentId}/student-expenses/semester/{semester}")
    public ResponseEntity<StudentExpenseDTO.StudentExpenseGet> getAllStudentExpenseByStudentId(
            @PathVariable("studentId") int studentId, @PathVariable("semester") int semester) {
        return new ResponseEntity<>(
                studentService.getStudentExpenseByStudentIdAndSemester(studentId, semester),
                HttpStatus.OK);
    }

    @GetMapping("/students")
    public ResponseEntity<List<StudentDTO.StudentGet>> getAllStudents() {
        List<Student> result = studentRepository.findAll();
        List<StudentDTO.StudentGet> students = new ArrayList<>();
        result.parallelStream()
                .map(StudentDTO.StudentGet::fromStudent)
                .forEach(students::add);
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    @GetMapping("/students/student/token/{wechatToken}")
    public ResponseEntity<StudentDTO.StudentGet> getAllStudents(@PathVariable("wechatToken") String wechatToken) {
        List<Student> students = studentRepository.findByWechatToken(wechatToken);
        if (students == null || students.size() == 0) {
            return new ResponseEntity("해당 토큰을 가진 유저가 없습니다", HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(StudentDTO.StudentGet.fromStudent(students.get(0)), HttpStatus.OK);
        }
    }

}
