package com.example.controller;

import com.example.dto.StudentScholarDTO;
import com.example.model.Scholar;
import com.example.model.Semester;
import com.example.model.Student;
import com.example.model.StudentScholar;
import com.example.repository.studentScholar.StudentScholarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class StudentScholarController {

    @PersistenceContext
    private final EntityManager em;

    private final StudentScholarRepository studentScholarRepository;

    @PostMapping("/student-scholars")
    public ResponseEntity<Boolean> addStudentScholars(@RequestBody List<StudentScholarDTO.Create> newStudentScholars) {
        for (StudentScholarDTO.Create studentScholar : newStudentScholars) {
            Student student = em.getReference(Student.class, studentScholar.getStudentId());
            Scholar scholar = em.getReference(Scholar.class, studentScholar.getScholarId());
            Semester semester = em.getReference(Semester.class, studentScholar.getSemester());
            studentScholarRepository.save(new StudentScholar(student, scholar, semester));
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/student-scholars/{studentId}")
    public ResponseEntity<List<StudentScholarDTO.Get>> getAllStudentScholarOfStudent(@PathVariable("studentId") int studentId) {
        List<StudentScholar> studentScholars = studentScholarRepository.findByStudentId(studentId);
        List<StudentScholarDTO.Get> result = new ArrayList<>();
        for (StudentScholar studentScholar : studentScholars) {
            result.add(
                    new StudentScholarDTO.Get(
                            studentScholar.getStudentScholarId(),
                            studentScholar.getScholar().getFund(),
                            studentScholar.getSemester().getSemesterId(),
                            studentScholar.getStudent().getStudentId(),
                            studentScholar.getScholar().getScholarId(),
                            studentScholar.getScholar().getMoney()));
        }
        return new ResponseEntity<List<StudentScholarDTO.Get>>(result, HttpStatus.OK);
    }
}
