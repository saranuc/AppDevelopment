package com.cybertron.springsecurity.service;

import com.springsecurity.dto.request.AuthenticationRequest;
import com.springsecurity.dto.request.RegisterRequest;
import com.springsecurity.dto.response.AuthenticationResponse;
import com.springsecurity.dto.response.ProductResponse;
import com.cybertron.springsecurity.model.Product;
import com.cybertron.springsecurity.model.User;
import com.cybertron.springsecurity.model.enumerate.Role;
import com.cybertron.springsecurity.repository.UserRepositorys;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;



import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	
	private final UserRepositorys repository ; 
	 private final PasswordEncoder passwordEncoder;
	 private final JwtService jwtservice;
	 private final AuthenticationManager authenticationManager;
	public AuthenticationResponse register(RegisterRequest request) {
		// TODO Auto-generated method stub
	
			
	    var user = User.builder()
	            .username(request.getUsername())
	            .email(request.getEmail())
	            .password(passwordEncoder.encode(request.getPassword()))
	            .phoneno(request.getPhoneno())
	            .address(request.getAddress())
	            .role(Role.USER)
	            .isEnable(true)
	            .build();
	    repository.save(user);
	    var jwtToken = jwtservice.generateToken(user);
	    
		return AuthenticationResponse.builder()
				.token(jwtToken)
				.build();
	}

	public AuthenticationResponse authenticate(AuthenticationRequest request) {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
				request.getEmail(),
				request.getPassword()
				)
				);
				var user = repository.findByEmail(request.getEmail())
						.orElseThrow();
				 var jwtToken = jwtservice.generateToken(user);
				    
					return AuthenticationResponse.builder()
							.token(jwtToken)
							.build();
	}
	
//	public AuthenticationResponse getUser(Long id){
//		
//		User pro = repository.findByUserId(id);
//		return mapToProductResponse(pro);
//	}
	
	
	
	

}