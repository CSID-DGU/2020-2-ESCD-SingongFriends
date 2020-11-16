package com.example.repository.scholar;

import com.example.model.Scholar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScholarRepository extends JpaRepository<Scholar, Integer>, CustomScholarRepository {
}
