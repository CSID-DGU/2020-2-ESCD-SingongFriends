package com.singong.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QStudentScholar is a Querydsl query type for StudentScholar
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QStudentScholar extends EntityPathBase<StudentScholar> {

    private static final long serialVersionUID = 1462751314L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QStudentScholar studentScholar = new QStudentScholar("studentScholar");

    public final QScholar scholar;

    public final QSemester semester;

    public final QStudent student;

    public final NumberPath<Integer> studentScholarId = createNumber("studentScholarId", Integer.class);

    public QStudentScholar(String variable) {
        this(StudentScholar.class, forVariable(variable), INITS);
    }

    public QStudentScholar(Path<? extends StudentScholar> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QStudentScholar(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QStudentScholar(PathMetadata metadata, PathInits inits) {
        this(StudentScholar.class, metadata, inits);
    }

    public QStudentScholar(Class<? extends StudentScholar> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.scholar = inits.isInitialized("scholar") ? new QScholar(forProperty("scholar")) : null;
        this.semester = inits.isInitialized("semester") ? new QSemester(forProperty("semester")) : null;
        this.student = inits.isInitialized("student") ? new QStudent(forProperty("student")) : null;
    }

}

