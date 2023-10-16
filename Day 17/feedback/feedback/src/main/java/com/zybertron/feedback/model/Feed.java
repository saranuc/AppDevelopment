package com.zybertron.feedback.model;

import java.util.Date;

import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="_feedback")
public class Feed {

//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long fid;
	    private String firstname;
	    private String phoneno;
	    private String email;
	    private String feedback;	
}
