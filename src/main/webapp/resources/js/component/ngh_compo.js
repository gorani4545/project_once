var ngh_compo = ngh_compo || {}
	
ngh_compo={
		l_buy:()=>{
			return '<div style="height: 347px;">'
			+'                          <dl>'
			+'                            <dt class="price">'
			+'                              <strong>주문가능</strong>'
			+'                            </dt>'
			+'                            <dd class="price twinLIne">'
			+'                              <strong>0</strong> <i>KRW</i>'
			+'                            </dd>'
			+'                            <dt class="marginB10">'
			+'                              <strong>가격</strong> <i>(KRW)</i>'
			+'                            </dt>'
			+'                            <dd class="marginB101">'
			+'                              <div class="inputB">'
			+'                                <input id="priceall" type="text" class="txt" value="6,119,000"><a'
			+'                                  href="#" class="minus" title="-">-</a><a href="#"'
			+'                                  class="plus" title="+">+</a>'
			+'                              </div>'
			+'                            </dd>'
			+'                            <dt class="marginB6">'
			+'                              <strong>수량</strong> <i>(BTC)</i>'
			+'                            </dt>'
			+'                            <dd class="marginB6">'
			+'                              <input id="count" type="text" class="txt All" placeholder="0"'
			+'                                value="" >'
			+'                            </dd>'
			+'                            <dd class="Quantity marginNone">'
			+'                              <a href="#" class="qtBt">10%</a><a href="#" class="qtBt">25%</a><a'
			+'                                href="#" class="qtBt">50%</a><a href="#" class="qtBt">100%</a><a'
			+'                                class="qtInput">직접입력</a>'
			+'                            </dd>'
			+'                            <dt class="marginB6">'
			+'                              <strong>주문총액</strong> <i>(KRW)</i>'
			+'                            </dt>'
			+'                            <dd class="marginB64">'
			+'                              <input id="allpr" type="txt" class="txt All" placeholder="0"'
			+'                                value="" readonly>'
			+'                            </dd>'
			+'                          </dl>'
			+'                          <div class="FixedBottom">'
			+'                            <span class="commission" ><p class="fr last" >수수료(부가세'
			+'                                포함): 0.05%</p>'
			+'                              <p class="fr">최소주문금액: 1,000 KRW</p></span>'
			+'                            <ul id="btn_mesu" class="btnB">'
			+'                            </ul>'
			+'                          </div>'
			+'                        </div>'
		},
		
		l_medo:()=>{
			return '<div style="height: 347px;">'
			+'                          <dl>'
			+'                            <dt class="price">'
			+'                              <strong>주문가능</strong>'
			+'                            </dt>'
			+'                            <dd class="price twinLIne">'
			+'                              <strong>0</strong> <i>KRW</i>'
			+'                            </dd>'
			+'                            <dt class="marginB10">'
			+'                              <strong>가격</strong> <i>(KRW)</i>'
			+'                            </dt>'
			+'                            <dd class="marginB10">'
			+'                              <div class="inputB">'
			+'                                <input type="text" class="txt" value="6,119,000"><a'
			+'                                  href="#" class="minus" title="-">-</a><a href="#"'
			+'                                  class="plus" title="+">+</a>'
			+'                              </div>'
			+'                            </dd>'
			+'                            <dt class="marginB6">'
			+'                              <strong>수량</strong> <i>(BTC)</i>'
			+'                            </dt>'
			+'                            <dd class="marginB6">'
			+'                              <input type="text" class="txt All" placeholder="0"'
			+'                                value="">'
			+'                            </dd>'
			+'                            <dd class="Quantity marginNone">'
			+'                              <a href="#" class="qtBt">10%</a><a href="#" class="qtBt">25%</a><a'
			+'                                href="#" class="qtBt">50%</a><a href="#" class="qtBt">100%</a><a'
			+'                                class="qtInput">직접입력</a>'
			+'                            </dd>'
			+'                            <dt class="marginB6">'
			+'                              <strong>주문총액</strong> <i>(KRW)</i>'
			+'                            </dt>'
			+'                            <dd class="marginB6">'
			+'                              <input type="txt" class="txt All" placeholder="0"'
			+'                                value="0.00">'
			+'                            </dd>'
			+'                            <dt></dt>'
			+'                            <dd></dd>'
			+'                          </dl>'
			+'                          <div class="FixedBottom">'
			+'                            <span class="commission"><p class="fr last">수수료(부가세'
			+'                                포함): 0.05%</p>'
			+'                              <p class="fr">최소주문금액: 1,000 KRW</p></span>'
			+'                            <ul class="btnB">'
			+'                            <li class="ty02"><a href="#" title="매도">매도</a></li>'
			+'                            </ul>'
			+'                          </div>'
			+'                        </div>'
		},
		trx : ()=>{
			return '<span class="orderB" style="height: 374px;"><div class="max">'
			+'<div>'
				+'<table class="ty02">'
					+'<colgroup>'
						+'<col width="96">'
						+'<col width="46">'
						+'<col width="114">'
						+'<col width="120">'
						+'<col width="*">'
					+'</colgroup>'
					+'<thead>'
						+'<tr>'
							+'<th>주문시간</th>'
							+'<th>구분</th>'
							+'<th>체결가격</th>'
							+'<th>체결수량</th>'
							+'<th>체결금액</th>'
						+'</tr>'
					+'</thead>'
				+'</table>'
				+'<div class="scrollB overflow" style="height: 293px;">'
					+'<div style="position: relative; overflow: hidden; width: 100%; height: 293px;">'
						+'<div style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">'
							+'<table class="ty02">'
								+'<colgroup>'
									+'<col width="96">'
									+'<col width="46">'
									+'<col width="114">'
									+'<col width="120">'
									+'<col width="*">'
								+'</colgroup>'
								+'<tbody id="trx">'
									+'<tr class="down">'
										+'<td><p>'
												+'12.30 <i>17:38</i>'
											+'</p></td>'
										+'<td>매도</td>'
										+'<td class="rAlign"><p>18,850,000</p></td>'
										+'<td class="rAlign"><p>0.01527253</p></td>'
										+'<td class="rAlign"><p>287,887</p></td>'
									+'</tr>'
									+'<tr class="up">'
										+'<td><p>'
												+'12.28 <i>09:50</i>'
											+'</p></td>'
										+'<td>매수</td>'
										+'<td class="rAlign"><p>21,810,000</p></td>'
										+'<td class="rAlign"><p>0.00996888</p></td>'
										+'<td class="rAlign"><p>217,422</p></td>'
									+'</tr>'
									+'<tr class="up">'
										+'<td><p>'
												+'12.28 <i>09:45</i>'
											+'</p></td>'
										+'<td>매수</td>'
										+'<td class="rAlign"><p>21,837,000</p></td>'
										+'<td class="rAlign"><p>0.00659460</p></td>'
										+'<td class="rAlign"><p>144,007</p></td>'
									+'</tr>'
									+'<tr class="down">'
										+'<td><p>'
												+'12.28 <i>09:23</i>'
											+'</p></td>'
										+'<td>매도</td>'
										+'<td class="rAlign"><p>21,923,000</p></td>'
										+'<td class="rAlign"><p>0.00658369</p></td>'
										+'<td class="rAlign"><p>144,334</p></td>'
									+'</tr>'
									+'<tr class="up">'
										+'<td><p>'
												+'12.28 <i>09:20</i>'
											+'</p></td>'
										+'<td>매수</td>'
										+'<td class="rAlign"><p>21,997,000</p></td>'
										+'<td class="rAlign"><p>0.00658369</p></td>'
										+'<td class="rAlign"><p>144,822</p></td>'
									+'</tr>'
									+'<tr class="down">'
										+'<td><p>'
												+'12.21 <i>14:15</i>'
											+'</p></td>'
										+'<td>매도</td>'
										+'<td class="rAlign"><p>23,155,000</p></td>'
										+'<td class="rAlign"><p>0.01171342</p></td>'
										+'<td class="rAlign"><p>271,224</p></td>'
									+'</tr>'
									+'<tr class="up">'
										+'<td><p>'
												+'12.19 <i>07:54</i>'
											+'</p></td>'
										+'<td>매수</td>'
										+'<td class="rAlign"><p>21,798,000</p></td>'
										+'<td class="rAlign"><p>0.01171342</p></td>'
										+'<td class="rAlign"><p>255,330</p></td>'
									+'</tr>'
									+'<tr class="down">'
										+'<td><p>'
												+'12.15 <i>12:47</i>'
											+'</p></td>'
										+'<td>매도</td>'
										+'<td class="rAlign"><p>20,111,000</p></td>'
										+'<td class="rAlign"><p>0.01053026</p></td>'
										+'<td class="rAlign"><p>211,774</p></td>'
									+'</tr>'
									+'<tr class="up">'
										+'<td><p>'
												+'12.13 <i>00:25</i>'
											+'</p></td>'
										+'<td>매수</td>'
										+'<td class="rAlign"><p>19,147,000</p></td>'
										+'<td class="rAlign"><p>0.01053026</p></td>'
										+'<td class="rAlign"><p>201,623</p></td>'
									+'</tr>'
									+'<tr class="down">'
										+'<td><p>'
												+'12.07 <i>14:04</i>'
											+'</p></td>'
										+'<td>매도</td>'
										+'<td class="rAlign"><p>19,000,000</p></td>'
										+'<td class="rAlign"><p>0.00667846</p></td>'
										+'<td class="rAlign"><p>126,890</p></td>'
									+'</tr>'
									+'<tr class="up">'
										+'<td><p>'
												+'12.07 <i>12:39</i>'
											+'</p></td>'
										+'<td>매수</td>'
										+'<td class="rAlign"><p>18,539,000</p></td>'
										+'<td class="rAlign"><p>0.00667846</p></td>'
										+'<td class="rAlign"><p>123,812</p></td>'
									+'</tr>'
									+'<tr class="down">'
										+'<td><p>'
												+'12.02 <i>11:30</i>'
											+'</p></td>'
										+'<td>매도</td>'
										+'<td class="rAlign"><p>13,000,000</p></td>'
										+'<td class="rAlign"><p>0.01669469</p></td>'
										+'<td class="rAlign"><p>217,030</p></td>'
									+'</tr>'
									+'<tr class="up">'
										+'<td><p>'
												+'12.02 <i>02:01</i>'
											+'</p></td>'
										+'<td>매수</td>'
										+'<td class="rAlign"><p>12,352,000</p></td>'
										+'<td class="rAlign"><p>0.01669469</p></td>'
										+'<td class="rAlign"><p>206,213</p></td>'
									+'</tr>'
								+'</tbody>'
							+'</table>'
						+'</div>'
						+'<div style="position: absolute; height: 6px; right: 2px; bottom: 2px; left: 2px; border-radius: 3px;">'
							+'<div style="position: relative; display: block; height: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); width: 0px;"></div>'
						+'</div>'
						+'<div style="position: absolute; width: 6px; right: 2px; bottom: 2px; top: 2px; border-radius: 3px;">'
							+'<div style="position: relative; display: block; width: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); height: 204px; transform: translateY(0px);"></div>'
						+'</div>'
					+'</div>'
				+'</div>'
			+'</div>'
		+'</div></span>'
		},
		
		chr : ()=>{
			return  '<table class="ty01">'
            +'<colgroup>'
              +'<col width="*">'
              +'<col width="*">'
              +'<col width="*">'
              +'<col width="*">'
            +'</colgroup>'
            +'<thead>'
              +'<tr>'
                +'<th class="cAlign">체결시간</th>'
                +'<th><center>체결가격(KRW)</center></th>'
                +'<th><center>체결량(BTC)</center></th>'
                +'<th class="rAlign">체결금액(KRW)</th>'
              +'</tr>'
            +'</thead>'
          +'</table>'
          +'<div class="scrollB" style="height: 360px;">'
              +'<div style="position: relative; overflow: hidden; width: 100%; height: 360px;">'
                +'<div style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">'
                +'<table id="bt_ty01" class="ty01">'
                  +'<colgroup>'
                    +'<col width="*">'
                    +'<col width="*">'
                    +'<col width="*">'
                    +'<col width="*">'
                  +'</colgroup>'
                  +'<tbody id="bt_list">'
                    +'<tr class="up">'
                      +'<td class="cAlign">'
                        +'<p>'
                          +'04.22 <i>16:40</i>'
                        +'</p>'
                      +'</td>'
                      +'<td><strong class="down">6,122,000</strong></td>'
                      +'<td>2.00000000</td>'
                      +'<td class="rAlign">12,244,000</td>'
                    +'</tr>'
                    +'<tr class="up">'
                      +'<td class="cAlign"><p>'
                          +'04.22 <i>16:40</i>'
                        +'</p></td>'
                      +'<td><strong class="down">6,122,000</strong></td>'
                      +'<td>0.09239728</td>'
                      +'<td class="rAlign">565,656</td>'
                    +'</tr>'
                    +'<tr class="down">'
                      +'<td class="cAlign"><p>'
                          +'04.22 <i>16:40</i>'
                        +'</p></td>'
                      +'<td><strong class="down">6,122,000</strong></td>'
                      +'<td>0.28934694</td>'
                      +'<td class="rAlign">1,771,382</td>'
                    +'</tr>'
                  +'</tbody>'
                +'</table>'
              +'</div>'
              +'<div'
                +'style="position: absolute; height: 6px; right: 2px; bottom: 2px; left: 2px; border-radius: 3px;">'
                +'<div'
                  +'style="position: relative; display: block; height: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); width: 0px;"></div>'
              +'</div>'
              +'<div'
                +'style="position: absolute; width: 6px; right: 2px; bottom: 2px; top: 2px; border-radius: 3px;">'
                +'<div'
                  +'style="position: relative; display: block; width: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); height: 30px; transform: translateY(0px);">'
                +'</div>'
              +'</div>'
            +'</div>'
          +'</div>'
		}
		
}