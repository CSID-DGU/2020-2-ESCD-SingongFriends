package com.example.repository.semester;

import com.example.model.Semester;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SemesterRepository extends JpaRepository<Semester, Integer>, CustomSemesterRepository {
}
