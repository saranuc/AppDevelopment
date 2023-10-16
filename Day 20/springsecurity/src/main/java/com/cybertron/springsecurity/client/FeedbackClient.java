package com.cybertron.springsecurity.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.cybertron.springsecurity.vo.Feed;
import com.springsecurity.dto.request.feedrequest;


@FeignClient(name="FEEDBACK",url ="${application.config.feedback-service.url}")
public interface FeedbackClient {
	
	@PostMapping("/add")
	 boolean saveFeedback(@RequestBody feedrequest request);
	
	@GetMapping("/get")
	List<Feed> getFeedbacks();

}
