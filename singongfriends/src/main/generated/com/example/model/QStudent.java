package com.example.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QStudent is a Querydsl query type for Student
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QStudent extends EntityPathBase<Student> {

    private static final long serialVersionUID = 1750333989L;

    public static final QStudent student = new QStudent("student");

    public final StringPath major = createString("major");

    public final StringPath name = createString("name");

    public final StringPath password = createString("password");

    public final StringPath studentCode = createString("studentCode");

    public final ListPath<StudentCourse, QStudentCourse> studentCourses = this.<StudentCourse, QStudentCourse>createList("studentCourses", StudentCourse.class, QStudentCourse.class, PathInits.DIRECT2);

    public final ListPath<StudentExpense, QStudentExpense> studentExpenses = this.<StudentExpense, QStudentExpense>createList("studentExpenses", StudentExpense.class, QStudentExpense.class, PathInits.DIRECT2);

    public final NumberPath<Integer> studentId = createNumber("studentId", Integer.class);

    public final ListPath<StudentScholar, QStudentScholar> studentScholars = this.<StudentScholar, QStudentScholar>createList("studentScholars", StudentScholar.class, QStudentScholar.class, PathInits.DIRECT2);

    public final StringPath wechatToken = createString("wechatToken");

    public QStudent(String variable) {
        super(Student.class, forVariable(variable));
    }

    public QStudent(Path<? extends Student> path) {
        super(path.getType(), path.getMetadata());
    }

    public QStudent(PathMetadata metadata) {
        super(Student.class, metadata);
    }

}

