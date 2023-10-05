package com.cybertronz.saran.service;

import java.util.List;

import com.cybertronz.saran.dto.request.UserRequestDto;
import com.cybertronz.saran.dto.response.UserResponseDto;


public interface UserService {

	boolean saveUser(UserRequestDto userRequest);

	List<UserResponseDto> getAllUser();

	UserResponseDto updateUser(UserRequestDto userRequest, int id);

	boolean deleteUser(int id);
		
}
