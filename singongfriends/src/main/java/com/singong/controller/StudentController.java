package com.singong.controller;

import com.singong.dto.StudentCourseDTO;
import com.singong.dto.StudentDTO;
import com.singong.dto.StudentExpenseDTO;
import com.singong.model.Course;
import com.singong.model.Student;
import com.singong.model.StudentCourse;
import com.singong.repository.course.CourseRepository;
import com.singong.repository.expense.ExpenseRepository;
import com.singong.repository.student.StudentRepository;
import com.singong.repository.studentCourse.StudentCourseRepository;
import com.singong.repository.studentExpense.StudentExpenseRepository;
import com.singong.repository.studentScholar.StudentScholarRepository;
import com.singong.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class StudentController {

    private final StudentRepository studentRepository;
    private final ExpenseRepository expenseRepository;
    private final StudentExpenseRepository studentExpenseRepository;
    private final StudentScholarRepository studentScholarRepository;
    private final StudentCourseRepository studentCourseRepository;
    private final CourseRepository courseRepository;
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

    @PostMapping("/logout")
    public ResponseEntity<Boolean> logOut(@RequestBody StudentDTO.Logout logoutForm) {
        List<Student> students = studentRepository.findByStudentCode(logoutForm.getStudentCode());
        if (students == null || (students.size() == 0)) {
            return new ResponseEntity<Boolean>(false, HttpStatus.OK);
        }
        Student student = students.get(0);
        student.setWechatToken("");
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
    public ResponseEntity<StudentExpenseDTO.StudentExpenseCalculatedGet> getAllStudentExpenseByStudentId(
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

    @PostMapping("/students/courses")
    public ResponseEntity<List<StudentCourse>> doneCourses(@RequestBody List<StudentCourseDTO.createStudentCourse> courses) {
        List<StudentCourse> studentCourses = new ArrayList<>();
        courses.stream().forEach((x) -> {
            Student student = studentRepository.getOne(x.getStudentId());
            Course course = courseRepository.getOne(x.getCourseId());
            List<StudentCourse> result =
                    studentCourseRepository.findByStudentIdAndStudentCourseId(x.getStudentId(), x.getCourseId());
            if (result == null || result.size() == 0) {
                StudentCourse newStudentCourse = new StudentCourse(student, course);
                studentCourses.add(studentCourseRepository.save(newStudentCourse));
            }
        });
        return new ResponseEntity<>(studentCourses, HttpStatus.OK);
    }

    @DeleteMapping("/students")
    public ResponseEntity<Boolean> deleteAllStudent() {
        studentRepository.deleteAll();
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @DeleteMapping("/students/{studentId}")
    public ResponseEntity<Boolean> deleteStudentByStudentId(@PathVariable("studentId") int studentId) {
        studentRepository.deleteById(studentId);
        return new ResponseEntity<>(true, HttpStatus.OK);
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
