//package com.cybertron.springsecurity.config;
//
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//import com.cybertron.springsecurity.model.User;
//import com.cybertron.springsecurity.repository.UserRepository;
//
//public class Userinitialization implements CommandLineRunner{
//
////	private final UserRepository userRepository;
////	private final PasswordEncoder passwordEncoder;
////	@Override
////	public void run(String... args) throws Exception {
////		// TODO Auto-generated method stub
////		try {
////			if(userRepository.count() == 0)
////			{
////				User user =createUser();
////				userRepository.save(user);
////			}
////		}
////		catch(Exception e)
////		{
////			log.error(msg:"Enter during initialization:",e);
////		}
////		
////	}
////	private User createUser()
////	{
////		return User.builder()
////				.username(username:"admin")
////				.email(email:"admin123@gmail.com")
////				.password(passwordEncoder.encode("admin123"))
////				.
////	}
//
//}
