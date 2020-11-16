package com.example.repository.studentScholar;

import com.example.model.StudentScholar;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentScholarRepository extends JpaRepository<StudentScholar, Integer>, CustomStudentScholarRepository {


}
