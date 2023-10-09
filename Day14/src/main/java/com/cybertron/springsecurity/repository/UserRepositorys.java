package com.cybertron.springsecurity.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cybertron.springsecurity.model.User;

public interface UserRepositorys  extends JpaRepository<User,Long>{
	
	Optional<User>findByEmail(String email);
}
