package com.aberimen.hrms.employer;

import org.springframework.stereotype.Repository;

import com.aberimen.hrms.user.UserBaseRepository;

@Repository
public interface EmployerRepository extends UserBaseRepository<Employer> {

}
