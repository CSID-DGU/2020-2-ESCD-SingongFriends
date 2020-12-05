package com.singong.repository.studentCourse;

import com.singong.model.StudentCourse;

import java.util.List;

public interface CustomStudentCourseRepository {
    List<StudentCourse> findByStudentIdAndStudentCourseId(int studentId, int courseId);
}
