package com.once.web.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.once.web.domain.Accounts;
import com.once.web.domain.Customers;
import com.once.web.domain.Once;
import com.once.web.domain.OnceHis;
import com.once.web.lambda.IConsumer;
import com.once.web.lambda.IFunction;
import com.once.web.lambda.ISupplier;
import com.once.web.service.AccountsServiceImpl;
import com.once.web.service.CustomersServiceImpl;
import com.once.web.service.OnceHisServiceImpl;
import com.once.web.service.OnceServiceImpl;
import com.once.web.service.TransactionsServiceImpl;



@Controller
public class NghController {
	@Autowired Map<String, Object> map;
	@Autowired Once once;
	@Autowired OnceServiceImpl onceimpl;
	@Autowired TransactionsServiceImpl trs;
	@Autowired AccountsServiceImpl asi;
	@Autowired Accounts ac;
	@Autowired OnceHisServiceImpl ohsi;
	@Autowired CustomersServiceImpl custi;
	/* @Autowired Customers cust; */
	
	
	private static final Logger logger = LoggerFactory.getLogger(NghController.class);
	@RequestMapping("/ngh")
	public String nghMain(Locale locale, Model model) {
		logger.info("남기호 컨트롤 진입 했씁니다!!!");	
		return "ngh";
	}
	@ResponseBody
	@RequestMapping("/ngh/once")
	public Map<String, Object> once() {
		logger.info("원스 코인에 들어왔습니다!!!");
		  map.clear();
		  ISupplier i = ()-> onceimpl.selectPrice();
		  List<?> ls = (List<?>) i.get();
		  System.out.println("ls 의 값 : "+ls);
		  map.put("ls", ls);
		  return map;
	}
	@ResponseBody
	@RequestMapping("/ngh/ch")
	public Map<String, Object>  chart(
			){
		logger.info("원스차트에 들어왔습니다!!!");
		once = new Once();
		map.clear();
		IFunction i = (Object o) -> onceimpl.selectAllOnceList(); 
		List<?> ls = (List<?>) i.apply(once);
		System.out.println("원스에 값"+i.apply(once).toString());
		map.put("ls", ls);
		 return map;
	}
	
	
	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping(value = "/ngh/buy/{unit}/{price}/{id}/{tprice}", method = RequestMethod.GET)
	public Map<String, Object> buy(@PathVariable("unit") String unit,
									@PathVariable("price") String price,
									@PathVariable("id") String id,
									@PathVariable("tprice") String tprice) {
		Date today = new Date();
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String date = String.valueOf(dateFormat.format(today));
		logger.info("매수 매도 에 들어왔습니다!!!");
		System.out.println("받아온값 : "+price);
		map.clear();
		map.put("unit", unit);
		map.put("id", id);
		map.put("nprice",price);
		map.put("rw","매수");
		map.put("date",date);
		map.put("tprice",tprice);
		int totalPrice = Integer.parseInt(tprice);
		int onceunit = Integer.parseInt(unit);
		IFunction f = (Object o) -> asi.retrieveAccount(id);
		Map<String,Object> ls = (Map<String,Object>)f.apply(id);	
		int  money = Integer.parseInt((String)ls.get("money"));
		int curruentMoney =  money - totalPrice;
		String bm = String.valueOf(curruentMoney);
		map.put("bm",bm); 
		IConsumer ii = (Object o) -> asi.modifyBuyAccount(map);
		ii.accept(map); 
		IConsumer i = (Object o) -> trs.modifyTransaction(map);
		i.accept(map); 
		ISupplier s = ()-> ohsi.selectOnceCount();
		s.get();
		Map<String, Object> olist = (Map<String, Object>) s.get();
		System.out.println(olist.get("current_count"));
		int count = (int) olist.get("current_count"); 
		int oncecount = count - onceunit;
		String oc = String.valueOf(oncecount);
		map.put("oc", oc);
		OnceHis oh = new OnceHis();
		oh.setCurrentCount(oc);
		IConsumer c = (Object o) -> ohsi.insertOnceCount(oh);
		c.accept(oh);
		System.out.println("id : "+id);
		IFunction ifc = (Object o)-> custi.retrieveCustomer(id);
		Customers custpr = (Customers) ifc.apply(id);
		System.out.println(custpr.getTbprice());
		System.out.println(custpr.getHqua());
		int tbprice = Integer.parseInt(custpr.getTbprice());
		int hqua = Integer.parseInt(custpr.getHqua());
		int tbprices = tbprice + totalPrice;
		int hquas = hqua + onceunit;
		String tb = String.valueOf(tbprices);
		String hq = String.valueOf(hquas);
		map.put("tb", tb);
		map.put("hq", hq);
		map.put("id", id);
		IConsumer cc = (Object o) -> custi.updateCust(map);
		cc.accept(map);

		
		 return map;
	}
}
