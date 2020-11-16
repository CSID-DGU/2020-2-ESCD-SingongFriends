package com.example.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCourse is a Querydsl query type for Course
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QCourse extends EntityPathBase<Course> {

    private static final long serialVersionUID = -406207759L;

    public static final QCourse course = new QCourse("course");

    public final NumberPath<Integer> courseId = createNumber("courseId", Integer.class);

    public final StringPath courseTitle = createString("courseTitle");

    public final NumberPath<Integer> point = createNumber("point", Integer.class);

    public final ListPath<StudentCourse, QStudentCourse> studentCourses = this.<StudentCourse, QStudentCourse>createList("studentCourses", StudentCourse.class, QStudentCourse.class, PathInits.DIRECT2);

    public QCourse(String variable) {
        super(Course.class, forVariable(variable));
    }

    public QCourse(Path<? extends Course> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCourse(PathMetadata metadata) {
        super(Course.class, metadata);
    }

}

