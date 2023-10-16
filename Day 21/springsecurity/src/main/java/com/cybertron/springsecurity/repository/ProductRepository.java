package com.cybertron.springsecurity.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cybertron.springsecurity.model.Product;

public interface ProductRepository extends JpaRepository<Product,Long>{
	
	Product findByProductid(Long id);

	//Product findByProductId(Long productid);

}
