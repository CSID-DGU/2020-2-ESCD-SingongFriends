package com.example.repository.studentCourse;

import com.example.model.StudentCourse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentCourseRepository extends JpaRepository<StudentCourse, Integer>, CustomStudentCourseRepository {
}
