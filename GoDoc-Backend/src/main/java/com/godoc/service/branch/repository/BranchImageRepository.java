package com.godoc.service.branch.repository;

import com.godoc.service.branch.entity.BranchImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BranchImageRepository extends JpaRepository<BranchImage, Long> {
}
