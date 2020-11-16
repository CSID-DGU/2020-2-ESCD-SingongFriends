package com.singong.repository.course;

import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

@Repository
public class CourseRepositoryImpl extends QuerydslRepositorySupport implements CustomCourseRepository {

    public CourseRepositoryImpl() {
        super(CourseRepositoryImpl.class);
    }
}