package com.example.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QSemester is a Querydsl query type for Semester
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QSemester extends EntityPathBase<Semester> {

    private static final long serialVersionUID = 2065405582L;

    public static final QSemester semester = new QSemester("semester");

    public final NumberPath<Integer> semesterId = createNumber("semesterId", Integer.class);

    public final ListPath<StudentExpense, QStudentExpense> studentExpenses = this.<StudentExpense, QStudentExpense>createList("studentExpenses", StudentExpense.class, QStudentExpense.class, PathInits.DIRECT2);

    public final ListPath<StudentScholar, QStudentScholar> studentScholars = this.<StudentScholar, QStudentScholar>createList("studentScholars", StudentScholar.class, QStudentScholar.class, PathInits.DIRECT2);

    public QSemester(String variable) {
        super(Semester.class, forVariable(variable));
    }

    public QSemester(Path<? extends Semester> path) {
        super(path.getType(), path.getMetadata());
    }

    public QSemester(PathMetadata metadata) {
        super(Semester.class, metadata);
    }

}

