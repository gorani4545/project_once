package com.once.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.once.web.domain.Customers;

@Component
public interface CustomersService {
	public void registCustomer(Map<?,?> map);
	public List<Customers> bringAllAmount(Customers cust);
	public List<Customers> bringSomeCoin(Customers cust);
	public Customers retrieveCustomer(String id);
	public Customers searchCoin(Map<?,?> map);
	public int countCustomers();
	public boolean existsCustomerID(Map<?,?> map);
	public void updateCust(Map<?,?> map);
	public void modifyCustomer(Customers cust);
	public void removeCustomer(Customers cust);

}
