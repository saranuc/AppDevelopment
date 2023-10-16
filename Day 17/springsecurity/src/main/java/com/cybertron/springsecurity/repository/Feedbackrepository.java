package com.cybertron.springsecurity.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cybertron.springsecurity.model.Feedback;

public interface Feedbackrepository extends JpaRepository<Feedback, Long>{
	

}
