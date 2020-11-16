package com.singong.repository.scholar;

import com.singong.model.Scholar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScholarRepository extends JpaRepository<Scholar, Integer>, CustomScholarRepository {
}
