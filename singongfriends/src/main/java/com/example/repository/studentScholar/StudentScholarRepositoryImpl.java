package com.example.repository.studentScholar;

import com.example.model.QStudentScholar;
import com.example.model.StudentScholar;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

public class StudentScholarRepositoryImpl extends QuerydslRepositorySupport implements CustomStudentScholarRepository {

    @PersistenceContext
    EntityManager em;

    public StudentScholarRepositoryImpl() {
        super(StudentScholarRepositoryImpl.class);
    }

    @Transactional
    public List<StudentScholar> findByStudentId(int studentId) {
        JPAQueryFactory queryFactory = new JPAQueryFactory(em);
        QStudentScholar qStudentScholar = new QStudentScholar("qStudentScholar");
        List<StudentScholar> studentScholars =
                queryFactory.selectFrom(qStudentScholar)
                            .where(qStudentScholar.student.studentId.eq(studentId)).fetch();
        return studentScholars;
    }

    @Override
    public List<StudentScholar> findByStudentIdAndSemester(int studentId, int semester) {
        JPAQueryFactory queryFactory = new JPAQueryFactory(em);
        QStudentScholar qStudentScholar = new QStudentScholar("qStudentScholar");
        List<StudentScholar> studentScholars =
                queryFactory.selectFrom(qStudentScholar)
                        .where(qStudentScholar.student.studentId.eq(studentId)
                        .and(qStudentScholar.semester.semesterId.eq(semester))).fetch();
        return studentScholars;
    }
}
