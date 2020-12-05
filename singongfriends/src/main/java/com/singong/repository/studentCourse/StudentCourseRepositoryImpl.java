package com.singong.repository.studentCourse;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.singong.model.QStudentCourse;
import com.singong.model.StudentCourse;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class StudentCourseRepositoryImpl extends QuerydslRepositorySupport implements CustomStudentCourseRepository {

    @PersistenceContext
    EntityManager em;

    public StudentCourseRepositoryImpl() {
        super(StudentCourseRepositoryImpl.class);
    }

    public List<StudentCourse> findByStudentIdAndStudentCourseId(int studentId, int courseId) {
        JPAQueryFactory queryFactory = new JPAQueryFactory(em);
        QStudentCourse qStudentCourse = new QStudentCourse("qStudentCourse");
        return queryFactory.selectFrom(qStudentCourse)
                .where(qStudentCourse.student.studentId.eq(studentId))
                .where(qStudentCourse.course.courseId.eq(courseId))
                .fetch();
    }
}
