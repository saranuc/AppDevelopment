package com.zybertron.feedback.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Feedrequest {
	
	    private Long fid;
	    private String firstname;
	    private String phoneno;
	    private String email;
	    private String feedback;

}
