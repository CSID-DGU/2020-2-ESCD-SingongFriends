package com.example.controller;

import com.example.model.Semester;
import com.example.repository.semester.SemesterRepository;
import com.example.repository.student.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class RootController {

    private static String currSemester = "20202";
    private final SemesterRepository semesterRepository;
    private final StudentRepository studentRepository;

    @GetMapping("/curr-semester")
    public String getSemester() {
        return "20202";
    }

    @PostMapping("/semesters")
    public ResponseEntity<Boolean> addSemesters(@RequestBody List<Semester> semesters) {
        semesterRepository.saveAll(semesters);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @GetMapping("/semesters")
    public ResponseEntity<List<Semester>> getAllSemester() {
        List<Semester> result = semesterRepository.findAll();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PutMapping("/semester/{newSemester}")
    public String setSemester(@PathVariable("newSemester") String newSemester) {
        currSemester = newSemester;
        return currSemester;
    }
}
