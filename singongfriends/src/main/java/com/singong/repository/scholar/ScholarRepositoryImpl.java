package com.singong.repository.scholar;

import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

@Repository
public class ScholarRepositoryImpl extends QuerydslRepositorySupport implements CustomScholarRepository {

    public ScholarRepositoryImpl() {
        super(ScholarRepositoryImpl.class);
    }
}
