package com.cybertron.springsecurity.model;

import com.cybertron.springsecurity.model.enumerate.Role;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="_feedback")

public class Feedback {
	
	@Id
	 @GeneratedValue(strategy=GenerationType.SEQUENCE)
	private Long feedid;
	private String firstname;
	private Long phoneno;
	private String email;
	private String feedback;
	
	 @Enumerated(EnumType.STRING)
		private Role role;


}
