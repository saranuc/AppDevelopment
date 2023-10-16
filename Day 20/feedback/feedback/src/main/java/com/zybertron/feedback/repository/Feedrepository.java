package com.zybertron.feedback.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zybertron.feedback.model.Feed;


public interface Feedrepository extends JpaRepository<Feed, Long>{
	
	 Optional<Feed> findByFirstnameAndEmail(String firstname,String email);
	
}
