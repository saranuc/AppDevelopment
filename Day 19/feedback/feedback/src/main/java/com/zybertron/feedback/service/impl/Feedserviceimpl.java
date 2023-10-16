package com.zybertron.feedback.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.zybertron.feedback.dto.request.Feedrequest;
import com.zybertron.feedback.dto.response.feedbackresponse;
import com.zybertron.feedback.model.Feed;
import com.zybertron.feedback.repository.Feedrepository;
import com.zybertron.feedback.service.Feedservice;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;


@Service
@Transactional
@RequiredArgsConstructor
public class Feedserviceimpl implements Feedservice{
	
private  final Feedrepository feedbackRepository;
    
	@Override
    public boolean saveFeedback(Feedrequest request) {
         if (feedbackRepository.findByFirstnameAndEmail(request.getFirstname(),
                 request.getEmail()).isPresent()) {
             return false;
         }

        var feedback = Feed.builder()
                .firstname(request.getFirstname())
                .email(request.getEmail())
                .phoneno(request.getPhoneno())
                .feedback(request.getFeedback())
                .build();
        feedbackRepository.save(feedback);
        return true;
    }

//	@Override
//    public List<feedbackresponse> getFeedbacks() {
//        List<Feed> feedbacks = feedbackRepository.findAll();
//        return feedbacks.stream()
//                .map(feedback -> {
//                    feedbackresponse response = new feedbackresponse();
//                    response.setFid(feedback.getFid());
//                    response.setUsername(feedback.getUsername());
//                    response.setUseremail(feedback.getUseremail());
//                    response.setQuestion(feedback.getQuestion());
//                    response.setAnswer(feedback.getAnswer());
//                    return response;
//                })
//                .collect(Collectors.toList());
//    }
	@Override
	public List<feedbackresponse> getFeedbacks() {
		List <Feed> feedbacks = feedbackRepository.findAll();
		return feedbacks.stream()
				.map(feedback-> {
					feedbackresponse response = new feedbackresponse();
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
