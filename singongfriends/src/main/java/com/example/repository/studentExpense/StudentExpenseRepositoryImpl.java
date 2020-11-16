package com.example.repository.studentExpense;

import com.example.model.QStudentExpense;
import com.example.model.StudentExpense;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
public class StudentExpenseRepositoryImpl extends QuerydslRepositorySupport implements CustomStudentExpenseRepository {

    @PersistenceContext
    EntityManager em;

    public StudentExpenseRepositoryImpl() {
        super(StudentExpenseRepositoryImpl.class);
    }

    @Override
    public StudentExpense findByStudentIdAndSemester(int studentId, int semester) {
        JPAQueryFactory queryFactory = new JPAQueryFactory(em);
        QStudentExpense qStudentExpense = new QStudentExpense("qStudentExpense");
        return queryFactory.selectFrom(qStudentExpense)
                        .where(qStudentExpense.student.studentId.eq(studentId)
                                .and(qStudentExpense.semester.semesterId.eq(semester))).fetchOne();
    }
}
