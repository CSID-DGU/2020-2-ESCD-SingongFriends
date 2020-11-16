package com.singong.repository.studentScholar;

import com.singong.model.StudentScholar;

import java.util.List;

public interface CustomStudentScholarRepository {

    public List<StudentScholar> findByStudentId(int studentId);
    public List<StudentScholar> findByStudentIdAndSemester(int studentId, int semester);
}
