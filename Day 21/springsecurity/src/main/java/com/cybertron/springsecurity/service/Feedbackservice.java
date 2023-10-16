package com.cybertron.springsecurity.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cybertron.springsecurity.client.FeedbackClient;

import com.cybertron.springsecurity.model.enumerate.Role;
import com.cybertron.springsecurity.repository.Feedbackrepository;
import com.cybertron.springsecurity.repository.ProductRepository;
import com.cybertron.springsecurity.vo.Feed;
import com.springsecurity.dto.request.FeedbackRequest;
import com.springsecurity.dto.response.Feedresponse;

import lombok.RequiredArgsConstructor;
import jakarta.transaction.Transactional;


@Service
@Transactional
@RequiredArgsConstructor
public class Feedbackservice {
	
        private final FeedbackClient feedbackClient;
//        public List<Feedresponse> getFeedbacks() {
//            List<Feed> feedbacks = feedbackClient.getFeedbacks();
//            return feedbacks.stream()
//                    .map(feedback -> {
//                        Feedresponse response = new Feedresponse();
//                        response.setFid(feedback.getFid());
//                        response.setFirstname(feedback.getFirstname());
//                        response.setEmail(feedback.getEmail());
//                        response.setPhoneno(feedback.getPhoneno());
//                        response.setFeedback(feedback.getFeedback());
//                        return response;
//                    })
//                    .collect(Collectors.toList());
//        }
       public List<Feedresponse> getFeedbacks(){
    	   List<Feed> feedbacks = feedbackClient.getFeedbacks();
    	   return feedbacks.stream()
    			   .map(feedback ->{
    				   Feedresponse response= new Feedresponse()    ;
    				   response.setFid(feedback.getFid());
    				   response.setFirstname(feedback.getFirstname());
    				   response.setEmail(feedback.getEmail());
    				   response.setPhoneno(feedback.getPhoneno());
    				   response.setFeedback(feedback.getFeedback());
    				   return response;
    		})
    			   .collect(Collectors.toList());
       }


}