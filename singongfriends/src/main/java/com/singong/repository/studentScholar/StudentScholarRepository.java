package com.singong.repository.studentScholar;

import com.singong.model.StudentScholar;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentScholarRepository extends JpaRepository<StudentScholar, Integer>, CustomStudentScholarRepository {


}
