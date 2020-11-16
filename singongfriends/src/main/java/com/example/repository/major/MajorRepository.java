package com.example.repository.major;

import com.example.model.Major;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MajorRepository extends JpaRepository<Major, Integer>, CustomMajorRepository {
}
