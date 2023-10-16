package com.zybertron.feedback.service;

import java.util.List;


import com.zybertron.feedback.dto.request.Feedrequest;
import com.zybertron.feedback.dto.response.feedbackresponse;


public interface Feedservice {
	
	boolean saveFeedback(Feedrequest request);
	
	List<feedbackresponse> getFeedbacks();
	 
}
