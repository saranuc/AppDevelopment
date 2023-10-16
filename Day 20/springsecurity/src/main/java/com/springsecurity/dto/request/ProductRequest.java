package com.springsecurity.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductRequest {

	
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
	
}
