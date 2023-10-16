package com.springsecurity.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class AuthenticationResponse {

	private String token;
//	private Long id;
//	private String username;
//	private String email;
//	private String password;
//	private Long phoneno;
//	private String address;
	
}
