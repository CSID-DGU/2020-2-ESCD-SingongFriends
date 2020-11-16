package com.example.repository.studentCourse;

import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

@Repository
public class StudentCourseRepositoryImpl extends QuerydslRepositorySupport implements CustomStudentCourseRepository {

    public StudentCourseRepositoryImpl() {
        super(StudentCourseRepositoryImpl.class);
    }

}
