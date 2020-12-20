package com.singong.repository.studentCourse;

import com.singong.model.StudentCourse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentCourseRepository extends JpaRepository<StudentCourse, Integer>, CustomStudentCourseRepository {
}
