package com.zybertron.feedback.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zybertron.feedback.dto.request.Feedrequest;
import com.zybertron.feedback.dto.response.feedbackresponse;
import com.zybertron.feedback.model.Feed;
import com.zybertron.feedback.service.Feedservice;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/feedback")
@RequiredArgsConstructor
public class Feedcontroller {

	private  final Feedservice feedbackservice;
	
	@PostMapping("/add")
	public ResponseEntity<String> saveFeedback(@RequestBody Feedrequest request){
		boolean isSaved =feedbackservice.saveFeedback(request);
		return isSaved ? ResponseEntity.ok().body("FEEDBACK SAVED"): ResponseEntity.badRequest().build();
	}
	
	@GetMapping("/get")
	public ResponseEntity<List<feedbackresponse>> getFeedback ()
	{
		List<feedbackresponse> feedbackList =feedbackservice.getFeedbacks();
		return !feedbackList.isEmpty()? ResponseEntity.ok(feedbackList) : ResponseEntity.noContent().build();
	}
}
