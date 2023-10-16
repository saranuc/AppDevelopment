package com.cybertron.springsecurity.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cybertron.springsecurity.model.User;

public interface UserRepository extends JpaRepository<User, String>{
	


}
