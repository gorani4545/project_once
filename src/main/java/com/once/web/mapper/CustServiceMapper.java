package com.once.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.once.web.domain.CustService;



@Repository
public interface CustServiceMapper {
	public void insertCustService(CustService cuse);
	public List<CustService> selectCustServiceList(Map<?,?> map);
	public CustService selectCustService(CustService cuse);
	public int countCustServices();
	public boolean existsCustService(CustService cuse);
	public void updateCustService(CustService cuse);
	public void deleteCustService(CustService cuse);
}
