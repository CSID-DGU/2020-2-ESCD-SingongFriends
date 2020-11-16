package com.singong.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QStudentExpense is a Querydsl query type for StudentExpense
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QStudentExpense extends EntityPathBase<StudentExpense> {

    private static final long serialVersionUID = 584557171L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QStudentExpense studentExpense = new QStudentExpense("studentExpense");

    public final QExpense expense;

    public final QSemester semester;

    public final QStudent student;

    public final NumberPath<Integer> studentExpenseId = createNumber("studentExpenseId", Integer.class);

    public QStudentExpense(String variable) {
        this(StudentExpense.class, forVariable(variable), INITS);
    }

    public QStudentExpense(Path<? extends StudentExpense> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QStudentExpense(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QStudentExpense(PathMetadata metadata, PathInits inits) {
        this(StudentExpense.class, metadata, inits);
    }

    public QStudentExpense(Class<? extends StudentExpense> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.expense = inits.isInitialized("expense") ? new QExpense(forProperty("expense")) : null;
        this.semester = inits.isInitialized("semester") ? new QSemester(forProperty("semester")) : null;
        this.student = inits.isInitialized("student") ? new QStudent(forProperty("student")) : null;
    }

}

