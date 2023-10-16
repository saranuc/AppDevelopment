package com.springsecurity.dto.response;

import com.springsecurity.dto.request.ProductRequest;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductResponse {
	
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
	

}
