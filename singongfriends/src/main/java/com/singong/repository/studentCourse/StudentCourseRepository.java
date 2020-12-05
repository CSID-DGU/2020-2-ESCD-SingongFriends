package com.singong.repository.studentCourse;

import com.singong.model.StudentCourse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentCourseRepository extends JpaRepository<StudentCourse, Integer>, CustomStudentCourseRepository {
}
