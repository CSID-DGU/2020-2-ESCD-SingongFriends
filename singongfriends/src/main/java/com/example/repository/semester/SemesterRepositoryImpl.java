package com.example.repository.semester;

import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

@Repository
public class SemesterRepositoryImpl extends QuerydslRepositorySupport implements CustomSemesterRepository {

    public SemesterRepositoryImpl() {
        super(SemesterRepositoryImpl.class);
    }
}
