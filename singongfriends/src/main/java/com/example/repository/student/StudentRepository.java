package com.example.repository.student;

import com.example.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Integer>, CustomStudentRepository {

    public List<Student> findByStudentCode(String studentCode);

    public List<Student> findByWechatToken(String wechatToken);
}
