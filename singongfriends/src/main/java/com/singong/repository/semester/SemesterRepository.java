package com.singong.repository.semester;

import com.singong.model.Semester;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SemesterRepository extends JpaRepository<Semester, Integer>, CustomSemesterRepository {
}
