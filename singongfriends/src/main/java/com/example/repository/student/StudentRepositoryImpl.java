package com.example.repository.student;

import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

@Repository
public class StudentRepositoryImpl extends QuerydslRepositorySupport implements CustomStudentRepository {

    public StudentRepositoryImpl() {
        super(StudentRepositoryImpl.class);
    }
}
