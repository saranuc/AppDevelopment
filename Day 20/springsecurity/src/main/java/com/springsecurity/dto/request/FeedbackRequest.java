package com.springsecurity.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackRequest {
	
	private String firstname;
	private Long phoneno;
	private String email;
	private String feedback;

}
