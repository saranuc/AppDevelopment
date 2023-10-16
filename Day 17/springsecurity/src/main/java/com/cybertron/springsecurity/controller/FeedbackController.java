package com.cybertron.springsecurity.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybertron.springsecurity.model.Feedback;
import com.cybertron.springsecurity.model.Product;
import com.cybertron.springsecurity.service.Feedbackservice;
import com.cybertron.springsecurity.service.ProductService;
import com.springsecurity.dto.request.FeedbackRequest;
import com.springsecurity.dto.request.ProductRequest;
import com.springsecurity.dto.response.Feedresponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/feed")
@RequiredArgsConstructor

public class FeedbackController {

	private final Feedbackservice templateService;

//	
//	
//	@PostMapping("/register")
//	  public ResponseEntity<String> register(
//	      @RequestBody FeedbackRequest request
//	  ) {
//	     
//		boolean isSaved = templateService.registertemp(request);
//        return isSaved ? ResponseEntity.status(201).body("Feedback added successfully!")
//                : ResponseEntity.badRequest().build();
//    return ResponseEntity.ok(templateService.register(request));
//	  }
	
// 	@GetMapping("/get")
// 	 public ResponseEntity<List<Feedback>> getAllProducts() {
//      List<Feedback> productList = templateService.getAllProducts();
//      return !productList.isEmpty() ? ResponseEntity.status(200).body(productList)
//              : ResponseEntity.noContent().build();
//  }
 @GetMapping("/get")
    public ResponseEntity<List<Feedresponse>> getFeedbacks() {
        List<Feedresponse> feedbackList = templateService.getFeedbacks();
        return !feedbackList.isEmpty() ? ResponseEntity.ok().body(feedbackList) : ResponseEntity.noContent().build();
}
	
}
