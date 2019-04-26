package com.once.web.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.once.web.domain.Customers;

@Component
public interface CustomersService {
	public void registCustomer(Customers cust);
	public List<Customers> bringAllAmount(Customers cust);
	public List<Customers> bringSomeCoin(Customers cust);
	
	public Customers retrieveCustomer(Customers cust);
	public int countCustomers();
	public boolean existsCustomerID(Customers cust);
	
	public void modifyCustomer(Customers cust);
	public void removeCustomer(Customers cust);

}
