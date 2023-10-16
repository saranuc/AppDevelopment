package com.springsecurity.dto.response;

import com.springsecurity.dto.request.feedrequest;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Feedresponse {

	private Long fid;
	private String firstname;
	private String phoneno;
	private String email;
	private String feedback;

}
