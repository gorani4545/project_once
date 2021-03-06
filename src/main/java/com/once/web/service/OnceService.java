package com.once.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.once.web.domain.Once;

@Component
public interface OnceService {

	public void insertOnce(Once once);
	
	public List<Once> selectAllOnceList();
	
	public Map<String, Object> selectOnce(Once once);
	
	public List<Once> selectPrice();
	
	public Once retriveOnce(Once once);
	
	public int countAllOnce();
	
	public void updateOnce(Once once);
	
	public void deleteOnce(Map<?, ?> map);
}