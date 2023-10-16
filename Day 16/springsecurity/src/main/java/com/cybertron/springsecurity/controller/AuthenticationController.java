package com.cybertron.springsecurity.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybertron.springsecurity.constant.Api;
import com.cybertron.springsecurity.service.AuthenticationService;
import com.springsecurity.dto.request.AuthenticationRequest;
import com.springsecurity.dto.request.RegisterRequest;
import com.springsecurity.dto.response.AuthenticationResponse;
import com.springsecurity.dto.response.ProductResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")	
//@CrossOrigin("http://localhost:3000")
@RequiredArgsConstructor
public class AuthenticationController {
	
	private final AuthenticationService service;
	
	  @PostMapping("/register")
	  public ResponseEntity<AuthenticationResponse> register(
	      @RequestBody RegisterRequest request
	  ) {
	    return ResponseEntity.ok(service.register(request));
	  }
	  @PostMapping("/authenticate")
	  public ResponseEntity<AuthenticationResponse> authenticate(
	      @RequestBody AuthenticationRequest request
	  ) {
	    return ResponseEntity.ok(service.authenticate(request));
	  }
//	  @GetMapping("/getbyid/{id}")
//		public ResponseEntity<AuthenticationResponse> getUser(@PathVariable Long id){
//			AuthenticationResponse productResponse = service.getUser(id);
//			return productResponse != null ?ResponseEntity.ok().body(productResponse)
//					:ResponseEntity.notFound().build()
//	;	}

}

