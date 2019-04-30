package com.once.web.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.once.web.domain.CoinArticle;

@Controller
public class KthController {
	
	private static final Logger logger = LoggerFactory.getLogger(KthController.class);
	@Autowired Map<String, Object> map;
	@RequestMapping("/kth")
	public String kthMain() {
		logger.info("김태혁 컨트롤 진입 했씁니다!!!");	
		return "kth";
	}
	@ResponseBody
	@RequestMapping(value = "/crawler/naver/{page}", method = {RequestMethod.GET})
	public Map<String, Object> crawler(@PathVariable int page) throws Exception{
        System.out.println("=====이동==========");
        System.out.println(page);
        if(page!=1) {
        	page = (page-1)*10+1;
        }
        System.out.println();
        String url = "https://search.naver.com/search.naver?&where=news&query=%EB%B9%84%ED%8A%B8%EC%BD%94%EC%9D%B8%20%EC%8B%9C%EC%84%B8&sm=tab_pge&sort=0&photo=0&field=0&reporter_article=&pd=0&ds=&de=&docid=&nso=so:r,p:all,a:all&mynews=0&cluster_rank=10&start="+page+"&refresh_start=0";
        Document doc = Jsoup.connect(url).get();
        Elements elements = doc.select("ul.type01 li dl dt a");
        Elements elements2 = doc.select("dd.txt_inline");
        String text = elements2.attr("text");
        Elements times = doc.select("dd.txt_inline");
        String time = times.text();
        
        
        
        
        List<CoinArticle> list = new ArrayList<CoinArticle>();        
        list.clear();
        int i= 0;
        int j= 1;
        map.clear();
        for(Element element: elements) {
            CoinArticle coin = new CoinArticle();
            	String seq = String.valueOf(j);
            	coin.setNseq(seq);
            String nextUrl = element.attr("href");
            coin.setUrl(nextUrl);
            String nextTitle = element.attr("title");
            coin.setTitle(nextTitle);
            
            String splitUp = time.split(" 보내기 ")[i];
            int text1 = splitUp.indexOf(" ");
            String frontDel = splitUp.substring(text1+1);
            
            int text2 = frontDel.indexOf("전");
            String timeRes = frontDel.substring(0,text2+1);
            coin.setAdate(timeRes);
            map.clear();
            i++;
            j++;
            list.add(coin);
        }
        map.put("ls", list);
		return map;
	}
	
}
