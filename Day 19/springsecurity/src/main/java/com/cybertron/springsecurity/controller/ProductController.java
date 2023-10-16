package com.cybertron.springsecurity.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cybertron.springsecurity.model.Product;
import com.cybertron.springsecurity.service.ProductService;
import com.springsecurity.dto.request.ProductRequest;
import com.springsecurity.dto.response.ProductResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/temp")	
@RequiredArgsConstructor

public class ProductController {

private final ProductService templateService;
	
	@PostMapping("/register")
	  public ResponseEntity<String> register(
	      @RequestBody ProductRequest request
	  ) {
	      boolean isSaved = templateService.registertemp(request);
	        return isSaved ? ResponseEntity.status(201).body("Product added successfully!")
	                : ResponseEntity.badRequest().build();
//	    return ResponseEntity.ok(templateService.register(request));
	  }
	
	@GetMapping("/get")
	 public ResponseEntity<List<Product>> getAllProducts() {
       List<Product> productList = templateService.getAllProducts();
       return !productList.isEmpty() ? ResponseEntity.status(200).body(productList)
               : ResponseEntity.noContent().build();
   }
	
	@GetMapping("/byid/{productid}")
	public ResponseEntity<ProductResponse> getProduct(@PathVariable Long productid){
		ProductResponse productResponse = templateService.getProduct(productid);
		return productResponse != null ?ResponseEntity.ok().body(productResponse)
				:ResponseEntity.notFound().build()
;	}
	
	@PutMapping("/edit/{productid}")
    public ResponseEntity<String> updateProduct(@RequestBody ProductRequest request, @PathVariable Long productid) {
        boolean isUpdate = templateService.updateProduct(request, productid);
        return isUpdate ? ResponseEntity.status(201).body("Update Successfull") 
        		: ResponseEntity.notFound().build();
    }
	
	
	
  @DeleteMapping("/delete/{productid}")
  public ResponseEntity<String> delete(@PathVariable("productid") Long productid)
	{
	  boolean isDelete = templateService.delete(productid);
	  return isDelete ? ResponseEntity.status(201).body("Delete Successfull") 
        		: ResponseEntity.notFound().build();
	}
}
