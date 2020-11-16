package com.singong.repository.major;

import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

@Repository
public class MajorRepositoryImpl extends QuerydslRepositorySupport implements CustomMajorRepository {

    public MajorRepositoryImpl() {
        super(MajorRepositoryImpl.class);
    }
}
