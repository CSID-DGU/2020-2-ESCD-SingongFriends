package com.example.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QStudentCourse is a Querydsl query type for StudentCourse
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QStudentCourse extends EntityPathBase<StudentCourse> {

    private static final long serialVersionUID = -1847667040L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QStudentCourse studentCourse = new QStudentCourse("studentCourse");

    public final QCourse course;

    public final QStudent student;

    public final NumberPath<Integer> studentCourseId = createNumber("studentCourseId", Integer.class);

    public QStudentCourse(String variable) {
        this(StudentCourse.class, forVariable(variable), INITS);
    }

    public QStudentCourse(Path<? extends StudentCourse> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QStudentCourse(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QStudentCourse(PathMetadata metadata, PathInits inits) {
        this(StudentCourse.class, metadata, inits);
    }

    public QStudentCourse(Class<? extends StudentCourse> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.course = inits.isInitialized("course") ? new QCourse(forProperty("course")) : null;
        this.student = inits.isInitialized("student") ? new QStudent(forProperty("student")) : null;
    }

}

