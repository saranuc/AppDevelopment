package com.cybertron.springsecurity.service;

import java.util.List;
import java.util.Optional;

import org.hibernate.sql.Template;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cybertron.springsecurity.model.Product;
import com.cybertron.springsecurity.model.enumerate.Role;
import com.cybertron.springsecurity.repository.ProductRepository;
import com.springsecurity.dto.request.AuthenticationRequest;
import com.springsecurity.dto.request.ProductRequest;
import com.springsecurity.dto.response.AuthenticationResponse;
import com.springsecurity.dto.response.ProductResponse;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor

public class ProductService {
	
	private  final ProductRepository repository ; 
	 private final PasswordEncoder passwordEncoder;
	 private  final JwtService jwtservice;
//	 private final AuthenticationManager authenticationManager;
	 
	 
	 public boolean registertemp(ProductRequest request) {
			// TODO Auto-generated method stub
		
				
		    var user = Product.builder()
//		            .pid(request.getProductid())
//		    		.pid(request.getProductid())
//		            .productname(request.getProductname())
		    		.productname(request.getProductname())
		            .price(request.getPrice())
		            .auctionid(request.getAuctionid())
		            .description(request.getDescription())
		            .proimage(request.getProimage())
		            .proimage1(request.getProimage1())
		            .proimage2(request.getProimage2())
		            .ownername(request.getOwnername())
		            .nooy(request.getNooy())
		            .colour(request.getColour())
		            .role(Role.ADMIN)
		            .build();
		    		repository.save(user);
//		    var jwtToken = jwtservice.generateToken(user);
		    
		    return true;
		}
	 
	 public List<Product> getAllProducts() {
	        List<Product> productList = repository.findAll();

	        return productList;
	    }
	 

	 public boolean updateProduct(ProductRequest request, Long pid) {
			Product product = repository.findByProductid(pid);

//		        if (product != null) {	           
//		        	product.setProductid(request.get);
          
		        	product.setProductname(request.getProductname());
		      
		        	product.setPrice(request.getPrice());
		        	
		            product.setAuctionid(request.getPrice());
		            
		            product.setDescription(request.getDescription());
		            
		            product.setProimage(request.getProimage());
		            
		            product.setProimage1(request.getProimage1());
		            
		            product.setProimage2(request.getProimage2());
		            
		            product.setOwnername(request.getOwnername());
		            
		            product.setNooy(request.getNooy());
		            
		            product.setColour(request.getColour());
		            
		            repository.save(product);

		            return true;
//		        } else {
//		            throw new EntityNotFoundException("Product with pid " + pid + " not found");
//		        }
		} 
	 
		public boolean delete(Long pid) {
			repository.deleteById(pid);
			return true;
		}
		
		public ProductResponse getProduct(Long productid){
			
			Product pro = repository.findByProductid(productid);
			return mapToProductResponse(pro);
		}

		private ProductResponse mapToProductResponse( Product pro)
		{
			return ProductResponse.builder()
					.productid(pro.getProductid())
					.productname(pro.getProductname())
					.price(pro.getPrice())
					.auctionid(pro.getAuctionid())
					.description(pro.getDescription())
					.proimage(pro.getProimage())
					.proimage1(pro.getProimage1())
					.proimage2(pro.getProimage2())
					.ownername(pro.getOwnername())
					.nooy(pro.getNooy())
					.colour(pro.getColour())
					.build();
		}
}
