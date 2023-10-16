package com.springsecurity.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class RegisterRequest {
	
	 private String username;
	  private String email;
	  private String password;
	  private Long phoneno;
	  private String address;

}
