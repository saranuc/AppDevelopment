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
@Table(name="_product")
public class Product {

	@Id
//	@GeneratedValue(strategy = GenerationType.UUID)
	 @GeneratedValue(strategy=GenerationType.SEQUENCE)
	private Long productid;
	private String productname;
	private Long price;
	private Long auctionid;
	private String description;
	private String proimage;
	private String proimage1;
	private String proimage2;
	private String ownername;
	private Integer nooy;
	private String colour;
	
	
	  @Enumerated(EnumType.STRING)
	private Role role;

}
