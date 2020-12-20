package com.singong.repository.major;

import com.singong.model.Major;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MajorRepository extends JpaRepository<Major, Integer>, CustomMajorRepository {
}
