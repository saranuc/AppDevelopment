package com.cybertronz.saran.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybertronz.saran.dto.request.UserRequestDto;
import com.cybertronz.saran.dto.response.UserResponseDto;
import com.cybertronz.saran.model.User;
import com.cybertronz.saran.repository.UserRepository;
import com.cybertronz.saran.service.UserService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;



@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
 
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public boolean saveUser(UserRequestDto userRequest) {
		Optional<User> isUserOptional = userRepository.existsByEmail(userRequest.getEmail());
		if(isUserOptional.isPresent()) {
			var data = User.builder()
					.username(userRequest.getUsername())
					.email(userRequest.getEmail())
					.password(userRequest.getPassword())
					.build();
		userRepository.save(data);
			return true;
		} else {
			return false;
		}
	}
	@Override
    public List<UserResponseDto> getAllUser() {
        List<User> userList = userRepository.findAll();

        return userList.stream()
                .map(this::mapToUserResponse)
                .collect(Collectors.toList());
    }
	@Override
	public UserResponseDto updateUser(UserRequestDto userRequest, int id) {
		User user = userRepository.findById(id);
		if(user != null) {
			user.setUsername(userRequest.getUsername());
			user.setEmail(userRequest.getEmail());
			user.setPassword(user.getPassword());
			
			userRepository.save(user);
			
			return mapUserToUserResponse(user);
		} else {
			throw new EntityNotFoundException("User with id "+ id+" not found");
		}
	}
	
	@Override
	public boolean deleteUser(int id) {
		User user = userRepository.findById(id);
		if(user != null) {
			userRepository.deleteById(id);
			return true;
		} else {
			return false;
		}
	}
	private UserResponseDto mapUserToUserResponse(User user) {
		return UserResponseDto.builder()
				.id(user.getId())
				.username(user.getUsername())
				.email(user.getEmail())
				.password(user.getPassword())
				.build();
				
	}
	private UserResponseDto mapToUserResponse(User user) {
        return UserResponseDto.builder()
                .id(user.getId())
                .username(user.getUsername())
                .email(user.getEmail())
                .password(user.getPassword())
                .build();
    }
	
}
