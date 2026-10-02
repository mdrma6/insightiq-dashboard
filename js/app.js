const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const P={user:{name:'Ruhi Anana'},cur:'INR',theme:'light',rows:8,compact:false};
const LS={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
Object.assign(P,LS.get('iiq_prefs',{}));
/* ---------- data ---------- */
function demo(){let s=7;const r=()=>(s=(s*16807)%2147483647)/2147483647;
const prods=[['Wireless Earbuds','Electronics',2499],['Smart Watch','Electronics',5999],['Bluetooth Speaker','Electronics',1899],['Linen Shirt','Fashion',1299],['Denim Jacket','Fashion',2799],['Running Shoes','Fashion',3299],['Table Lamp','Home & Living',1599],['Cotton Bedsheet','Home & Living',1199],['Face Serum','Beauty',899],['Lipstick Set','Beauty',649],['Yoga Mat','Other',999],['Notebook Pack','Other',349]];
const cust=['Aarav Mehta','Diya Shah','Kabir Rao','Ananya Iyer','Rohan Gupta','Meera Nair','Vihaan Reddy','Isha Kapoor','Arjun Singh','Sara Khan','Neha Verma','Karan Joshi','Pooja Menon','Dev Patel','Tara Bose','Rahul Das'];
const regs=['South','West','North','East'],w=[.34,.28,.22,.16],out=[],end=new Date('2026-09-30');
for(let i=0;i<620;i++){const d=new Date(end-Math.pow(r(),.85)*365*864e5),m=d.getMonth(),boost=(m==9||m==10||m==11)?1:.7;
if(r()>boost+.3)continue;const p=prods[Math.floor(Math.pow(r(),1.4)*12)],q=1+Math.floor(r()*3);let x=r(),ri=0;while(x>w[ri]){x-=w[ri];ri++}
const t=r();out.push({id:'IQ-'+(10200+i),date:d.toISOString().slice(0,10),customer:cust[Math.floor(r()*16)],product:p[0],category:p[1],qty:q,revenue:Math.round(p[2]*q*(.92+r()*.16)),region:regs[ri],status:t<.82?'Completed':t<.93?'Pending':'Refunded'})}
return out}
let DATA=LS.get('iiq_data',null)||demo(),IMPORTED=!!LS.get('iiq_data',null);
/* ---------- helpers ---------- */
const SYM={INR:['en-IN','₹'],USD:['en-US','$'],EUR:['de-DE','€']};
const money=n=>{const[l,s]=SYM[P.cur];return s+(P.compact&&n>=1e5?(P.cur=='INR'?(n>=1e7?(n/1e7).toFixed(2)+' Cr':(n/1e5).toFixed(2)+' L'):new Intl.NumberFormat(l,{notation:'compact'}).format(n)):Math.round(n).toLocaleString(l))};
const num=n=>Math.round(n).toLocaleString('en-IN'),pct=n=>(n>=0?'+':'')+n.toFixed(1)+'%',sum=(a,f)=>a.reduce((t,x)=>t+f(x),0);
const group=(a,k,f=x=>x.revenue)=>{const m={};a.forEach(x=>m[k(x)]=(m[k(x)]||0)+f(x));return Object.entries(m).sort((a,b)=>b[1]-a[1])};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const IC={ov:'M3 12l9-9 9 9M5 10v10h14V10',an:'M4 20V10M10 20V4M16 20v-8M22 20H2',sl:'M3 17l6-6 4 4 8-8M15 7h6v6',cu:'M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M10 11a4 4 0 100-8 4 4 0 000 8M21 21v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8',pr:'M21 8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8',rp:'M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9zM14 3v6h6M8 13h8M8 17h8',st:'M12 15a3 3 0 100-6 3 3 0 000 6M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 01-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 010-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 014 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 010 4h-.1a1.7 1.7 0 00-1.5 1z',
rev:'M6 3h12M6 8h12M6 13l8.5 8M6 13h3a4 4 0 000-8',ord:'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0',aov:'M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6',gr:'M23 6l-9.5 9.5-5-5L1 18M17 6h6v6',sp:'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z',dl:'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3',up:'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12',al:'M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0'};
const ico=k=>`<svg class="i" viewBox="0 0 24 24"><path d="${IC[k]}"/></svg>`;
function toast(m){const t=document.createElement('div');t.className='toast';t.textContent=m;$('#toasts').append(t);setTimeout(()=>t.remove(),3000)}
function download(name,text,type='text/csv'){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)}
const toCSV=rows=>Papa.unparse(rows.map(r=>({'Order ID':r.id,'Order Date':r.date,'Customer Name':r.customer,Product:r.product,Category:r.category,Quantity:r.qty,Revenue:r.revenue,Region:r.region,'Payment Status':r.status})));
/* ---------- analytics core ---------- */
const S={months:6,page:'ov',q:''};
const endDate=()=>new Date(Math.max(...DATA.map(d=>+new Date(d.date))));
function windows(){const e=endDate(),D=864e5,span=S.months*30*D,s=new Date(+e-span+D),ps=new Date(+s-span);
const inR=(d,a,b)=>{const t=+new Date(d.date);return t>=+a&&t<+b+D};
return{start:s,pstart:ps,end:e,cur:DATA.filter(d=>inR(d,s,e)),prev:DATA.filter(d=>inR(d,ps,new Date(+s-D)))}}
const valid=a=>a.filter(x=>x.status!='Refunded');
function kpis(){const w=windows(),f=(a)=>{const v=valid(a),rv=sum(v,x=>x.revenue);return{rv,or:v.length,aov:v.length?rv/v.length:0,cu:new Set(v.map(x=>x.customer)).size}};
const c=f(w.cur),p=f(w.prev),ch=(a,b)=>b?(a-b)/b*100:0;
const firstSeen={};DATA.forEach(d=>{if(!firstSeen[d.customer]||d.date<firstSeen[d.customer])firstSeen[d.customer]=d.date});
return{c,p,ch:{rv:ch(c.rv,p.rv),or:ch(c.or,p.or),aov:ch(c.aov,p.aov),cu:ch(c.cu,p.cu)},w}}
function series(size,n){const w=windows(),D=864e5,out={labels:[],cur:[],prev:[]};
const st=size==1?new Date(+w.end-29*D):w.start;const len=size==1?30:S.months*30,N=Math.ceil(len/size);
for(let i=0;i<N;i++){out.cur.push(0);out.prev.push(0);const d=new Date(+st+i*size*D);out.labels.push(d.toLocaleDateString('en-GB',{day:'numeric',month:'short'}))}
const add=(arr,base,list)=>valid(list).forEach(x=>{const i=Math.floor((+new Date(x.date)-+base)/(size*D));if(i>=0&&i<N)arr[i]+=x.revenue});
const pst=new Date(+st-len*D);add(out.cur,st,DATA);add(out.prev,pst,DATA);return out}
function monthly(k=7){const e=endDate(),out=[];for(let i=k-1;i>=0;i--){const d=new Date(e.getFullYear(),e.getMonth()-i,1);const key=d.toISOString().slice(0,7);out.push({key,label:d.toLocaleDateString('en-GB',{month:'short'}),rev:0,ord:0})}
valid(DATA).forEach(x=>{const m=out.find(o=>o.key==x.date.slice(0,7));if(m){m.rev+=x.revenue;m.ord++}});return out}
/* ---------- insights (rule-based; swap `insightProvider` for an AI API later) ---------- */
const insightProvider={name:'rule-based',async generate(data,k){const w=k.w,v=valid(w.cur),out=[];
out.push({cat:'Revenue',icon:k.ch.rv>=0?'gr':'al',title:k.ch.rv>=0?'Revenue grew vs previous period':'Revenue fell vs previous period',text:`${money(k.c.rv)} this period against ${money(k.p.rv)} in the equivalent prior window.`,metric:pct(k.ch.rv)});
const cats=group(v,x=>x.category);if(cats.length){const t=sum(v,x=>x.revenue);out.push({cat:'Category',icon:'pr',title:`${cats[0][0]} leads revenue`,text:`It contributes the largest share of revenue in the selected period.`,metric:(cats[0][1]/t*100).toFixed(1)+'% share'})}
const mo=monthly(12).sort((a,b)=>b.ord-a.ord)[0],avg=sum(monthly(12),x=>x.ord)/12;if(mo&&avg)out.push({cat:'Seasonality',icon:'an',title:`Orders peak in ${mo.label}`,text:`Order volume that month is above the 12-month monthly average of ${avg.toFixed(0)}.`,metric:pct((mo.ord/avg-1)*100)+' vs avg'});
const rg=group(v,x=>x.region);if(rg.length>1){const lo=rg[rg.length-1];out.push({cat:'Region',icon:'al',title:`${lo[0]} is the weakest region`,text:`Lowest revenue of ${rg.length} regions; the top region (${rg[0][0]}) earns ${(rg[0][1]/Math.max(lo[1],1)).toFixed(1)}× more.`,metric:money(lo[1])})}
const ref=w.cur.length?w.cur.filter(x=>x.status=='Refunded').length/w.cur.length*100:0;out.push({cat:'Quality',icon:'al',title:ref>8?'Refund rate needs attention':'Refund rate is healthy',text:`Share of orders in this period that were refunded.`,metric:ref.toFixed(1)+'%'});
return out}};
let INSIGHTS=[];
/* ---------- charts ---------- */
let CH=[];const mk=(el,cfg)=>{const c=new Chart(el,cfg);CH.push(c);return c};
const gridC=()=>getComputedStyle(document.documentElement).getPropertyValue('--bd'),tc=()=>getComputedStyle(document.documentElement).getPropertyValue('--tx2');
const axes=(yf=v=>money(v))=>({maintainAspectRatio:false,responsive:true,interaction:{mode:'index',intersect:false},plugins:{legend:{position:'bottom',labels:{usePointStyle:true,boxWidth:8,color:tc()}},tooltip:{callbacks:{label:c=>` ${c.dataset.label}: ${c.dataset.fmt?c.dataset.fmt(c.parsed.y):yf(c.parsed.y)}`}}},scales:{x:{grid:{display:false},ticks:{color:tc()},title:{display:true,text:'Period',color:tc()}},y:{grid:{color:gridC()},ticks:{color:tc(),callback:v=>yf(v)},title:{display:true,text:'Revenue',color:tc()}}}});
const PAL=['#2563EB','#3B82F6','#93C5FD','#172554','#BFDBFE','#64748B'];
function lineChart(el,size){const s=series(size);return mk(el,{type:'line',data:{labels:s.labels,datasets:[{label:'Current period',data:s.cur,borderColor:'#2563EB',backgroundColor:'rgba(37,99,235,.08)',fill:true,tension:.4,pointRadius:0,pointHoverRadius:4,borderWidth:2},{label:'Previous period',data:s.prev,borderColor:'#94A3B8',borderDash:[5,4],tension:.4,pointRadius:0,borderWidth:2}]},options:axes()})}
function donut(el,list){const g=group(list,x=>x.category),t=sum(g,x=>x[1]);return mk(el,{type:'doughnut',data:{labels:g.map(x=>x[0]),datasets:[{data:g.map(x=>x[1]),backgroundColor:PAL,borderWidth:2,borderColor:getComputedStyle(document.documentElement).getPropertyValue('--card')}]},options:{maintainAspectRatio:false,cutout:'68%',plugins:{legend:{position:'right',labels:{usePointStyle:true,boxWidth:8,color:tc(),generateLabels:c=>c.data.labels.map((l,i)=>({text:`${l}  ${(c.data.datasets[0].data[i]/t*100).toFixed(1)}%`,fillStyle:PAL[i],strokeStyle:PAL[i],pointStyle:'circle',index:i,fontColor:tc()}))}},tooltip:{callbacks:{label:c=>` ${c.label}: ${money(c.parsed)} (${(c.parsed/t*100).toFixed(1)}%)`}}}}})}
function barChart(el,mode,k=7){const m=monthly(k),rv=mode=='rev';return mk(el,{type:'bar',data:{labels:m.map(x=>x.label),datasets:[{label:rv?'Revenue':'Orders',data:m.map(x=>rv?x.rev:x.ord),backgroundColor:'#2563EB',borderRadius:5,maxBarThickness:36}]},options:{...axes(rv?v=>money(v):v=>num(v)),plugins:{legend:{display:false}}}})}
function spark(el,data,col){mk(el,{type:'line',data:{labels:data.map((_,i)=>i),datasets:[{data,borderColor:col,tension:.4,pointRadius:0,borderWidth:2,fill:true,backgroundColor:col+'18'}]},options:{maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{enabled:false}},scales:{x:{display:false},y:{display:false}}}})}
/* ---------- tables ---------- */
const T={};
function table(id,rows,cols,o={}){const t=T[id]=T[id]||{sort:o.sort||null,dir:-1,page:0,q:'',f:''};
const host=$('#'+id);const draw=()=>{let r=rows.filter(x=>(!t.q||JSON.stringify(Object.values(x)).toLowerCase().includes(t.q))&&(!t.f||x[o.fk]==t.f));
if(t.sort){const c=cols.find(c=>c.k==t.sort);r=[...r].sort((a,b)=>(a[t.sort]>b[t.sort]?1:-1)*t.dir)}
const pp=o.pp||P.rows,pages=Math.max(1,Math.ceil(r.length/pp));t.page=Math.min(t.page,pages-1);const sl=r.slice(t.page*pp,t.page*pp+pp);
host.innerHTML=`<div class="tb">${o.search?`<input data-q placeholder="Search…" value="${esc(t.q)}">`:''}${o.fk?`<select data-f><option value="">All ${o.fl||'statuses'}</option>${[...new Set(rows.map(x=>x[o.fk]))].map(v=>`<option ${t.f==v?'selected':''}>${esc(v)}</option>`).join('')}</select>`:''}</div>
<div class="tw"><table><thead><tr>${cols.map(c=>`<th class="${c.n?'n':''}" data-s="${c.k}">${c.h}${t.sort==c.k?(t.dir>0?' ↑':' ↓'):''}</th>`).join('')}</tr></thead><tbody>${sl.map(x=>`<tr>${cols.map(c=>`<td class="${c.n?'n':''}">${c.r?c.r(x):esc(x[c.k])}</td>`).join('')}</tr>`).join('')||`<tr><td colspan="${cols.length}" class="empty">No matching rows. Clear the search or filter.</td></tr>`}</tbody></table></div>
<div class="pg"><span>${r.length} rows · page ${t.page+1} of ${pages}</span><span><button class="btn" data-p="-1">Previous</button> <button class="btn" data-p="1">Next</button></span></div>`;
const qi=$('[data-q]',host);if(qi){qi.oninput=e=>{t.q=e.target.value.toLowerCase();t.page=0;const p=e.target.selectionStart;draw();const n=$('[data-q]',host);n.focus();n.setSelectionRange(p,p)}}
const fi=$('[data-f]',host);if(fi)fi.onchange=e=>{t.f=e.target.value;t.page=0;draw()};
$$('th',host).forEach(h=>h.onclick=()=>{t.dir=t.sort==h.dataset.s?-t.dir:-1;t.sort=h.dataset.s;draw()});
$$('[data-p]',host).forEach(b=>b.onclick=()=>{t.page=Math.max(0,Math.min(pages-1,t.page+ +b.dataset.p));draw()})};draw()}
const badge=x=>`<span class="b ${x.status}">${x.status}</span>`;
const txCols=()=>[{k:'id',h:'Order ID'},{k:'customer',h:'Customer'},{k:'product',h:'Product'},{k:'date',h:'Date'},{k:'revenue',h:'Amount',n:1,r:x=>money(x.revenue)},{k:'status',h:'Status',r:badge}];
/* ---------- pages ---------- */
const PAGES={ov:['Overview'],an:['Analytics'],sl:['Sales Performance'],cu:['Customers'],pr:['Products'],rp:['Reports'],st:['Settings']};
const head=(t,s,btn='')=>`<div class="top"><div><h1>${t}</h1><p>${s}</p></div><div>${btn}</div></div>`;
const kcard=(l,ic,v,c,id)=>`<div class="card kpi"><div class="h"><span>${l}</span><span class="ic">${ico(ic)}</span></div><div class="v">${v}</div><div class="d ${c>=0?'up':'dn'}">${c>=0?'▲':'▼'} ${pct(c)} <span>vs previous period</span></div><div class="ch s"><canvas id="${id}"></canvas></div></div>`;
const seg=(id,opts,cur)=>`<div class="seg" id="${id}">${opts.map(([v,l])=>`<button data-v="${v}" class="${v==cur?'on':''}">${l}</button>`).join('')}</div>`;
function bindSeg(id,fn){$$('#'+id+' button').forEach(b=>b.onclick=()=>{$$('#'+id+' button').forEach(x=>x.classList.toggle('on',x==b));fn(b.dataset.v)})}
function insightsHTML(){return INSIGHTS.map(i=>`<div class="in"><div class="t">${ico(i.icon)} ${i.cat}</div><h4>${esc(i.title)}</h4><p>${esc(i.text)}</p><div class="m">${esc(i.metric)}</div></div>`).join('')}
async function runInsights(announce){const k=kpis();INSIGHTS=await insightProvider.generate(DATA,k);const h=$('#insg');if(h)h.innerHTML=insightsHTML();if(announce)toast('Insights updated from '+num(DATA.length)+' orders')}
function ov(v){const k=kpis(),m=monthly(7),sp=f=>m.map(f);
v.innerHTML=head(`Welcome back, ${esc(P.user.name.split(' ')[0])}`,"Here's what's happening with your business today.",`<button class="btn" data-a="imp">${ico('up')} Import Data</button> <button class="btn p" data-a="exp">${ico('dl')} Export Report</button>`)+
`<div class="grid g4">${kcard('Total Revenue','rev',money(k.c.rv),k.ch.rv,'k1')}${kcard('Total Orders','ord',num(k.c.or),k.ch.or,'k2')}${kcard('Average Order Value','aov','₹$€'.includes(SYM[P.cur][1])?SYM[P.cur][1]+k.c.aov.toLocaleString(SYM[P.cur][0],{minimumFractionDigits:2,maximumFractionDigits:2}):'',k.ch.aov,'k3')}${kcard('Customer Growth','gr',pct(k.ch.cu).replace('+',''),k.ch.cu,'k4')}</div>
<div class="grid g21"><div class="card"><h3>Revenue Overview ${seg('s1',[[30,'Monthly'],[7,'Weekly'],[1,'Daily']],30)}</h3><div class="ch"><canvas id="c1"></canvas></div></div><div class="card"><h3>Sales by Category</h3><div class="ch"><canvas id="c2"></canvas></div></div></div>
<div class="grid g2"><div class="card"><h3>Sales Performance ${seg('s2',[['rev','Revenue'],['ord','Orders']],'rev')}</h3><div class="ch"><canvas id="c3"></canvas></div></div>
<div class="card aib"><h3><span>${ico('sp')} AI Insights <small style="color:var(--tx2);font-weight:400">· rule-based, computed from your data</small></span><button class="btn p" data-a="gen">Generate Insights</button></h3><div class="ins" id="insg"></div></div></div>
<div class="card"><h3>Recent Transactions</h3><div id="tx"></div></div>`;
let l=lineChart($('#c1'),30);bindSeg('s1',s=>{CH=CH.filter(c=>c!=l);l.destroy();l=lineChart($('#c1'),+s)});
spark($('#k1'),sp(x=>x.rev),'#2563EB');spark($('#k2'),sp(x=>x.ord),'#3B82F6');spark($('#k3'),sp(x=>x.ord?x.rev/x.ord:0),'#172554');spark($('#k4'),sp(x=>x.ord),'#16A34A');
donut($('#c2'),k.w.cur.filter(x=>x.status!='Refunded'));let b=barChart($('#c3'),'rev');bindSeg('s2',s=>{CH=CH.filter(c=>c!=b);b.destroy();b=barChart($('#c3'),s)});
$('#insg').innerHTML=insightsHTML();
table('tx',[...DATA].sort((a,b)=>b.date.localeCompare(a.date)),txCols(),{search:1,fk:'status',sort:'date'})}
function an(v){const k=kpis();v.innerHTML=head('Analytics','Revenue trends and period-over-period growth. Change the range in the header.')+
`<div class="card" style="margin-bottom:16px"><h3>Revenue comparison ${seg('s1',[[30,'Monthly'],[7,'Weekly'],[1,'Daily']],30)}</h3><div class="ch" style="height:340px"><canvas id="c1"></canvas></div></div>
<div class="grid g2"><div class="card"><h3>Monthly growth rate</h3><div class="ch"><canvas id="c2"></canvas></div></div><div class="card"><h3>Period summary</h3><table style="min-width:0"><tr><td>Revenue</td><td class="n">${money(k.c.rv)}</td><td class="n d ${k.ch.rv>=0?'up':'dn'}">${pct(k.ch.rv)}</td></tr><tr><td>Orders</td><td class="n">${num(k.c.or)}</td><td class="n d ${k.ch.or>=0?'up':'dn'}">${pct(k.ch.or)}</td></tr><tr><td>Avg order value</td><td class="n">${money(k.c.aov)}</td><td class="n d ${k.ch.aov>=0?'up':'dn'}">${pct(k.ch.aov)}</td></tr><tr><td>Active customers</td><td class="n">${num(k.c.cu)}</td><td class="n d ${k.ch.cu>=0?'up':'dn'}">${pct(k.ch.cu)}</td></tr></table></div></div>`;
let l=lineChart($('#c1'),30);bindSeg('s1',s=>{CH=CH.filter(c=>c!=l);l.destroy();l=lineChart($('#c1'),+s)});
const m=monthly(12),g=m.map((x,i)=>i&&m[i-1].rev?(x.rev/m[i-1].rev-1)*100:0);
mk($('#c2'),{type:'bar',data:{labels:m.map(x=>x.label),datasets:[{label:'MoM growth',data:g,fmt:v=>v.toFixed(1)+'%',backgroundColor:g.map(x=>x>=0?'#16A34A':'#DC2626'),borderRadius:4}]},options:{...axes(v=>v+'%'),plugins:{legend:{display:false}}}})}
function sl(v){const c=valid(windows().cur),rg=group(c,x=>x.region),ct=group(c,x=>x.category),t=sum(c,x=>x.revenue);
v.innerHTML=head('Sales Performance','Regions, categories and monthly comparisons for the selected range.')+`<div class="grid g2"><div class="card"><h3>Regional sales</h3><div class="ch"><canvas id="c1"></canvas></div></div><div class="card"><h3>Monthly sales ${seg('s2',[['rev','Revenue'],['ord','Orders']],'rev')}</h3><div class="ch"><canvas id="c2"></canvas></div></div></div>
<div class="grid g2"><div class="card"><h3>Top-performing categories</h3><div id="t1"></div></div><div class="card"><h3>Region performance</h3><div id="t2"></div></div></div>`;
mk($('#c1'),{type:'bar',data:{labels:rg.map(x=>x[0]),datasets:[{label:'Revenue',data:rg.map(x=>x[1]),backgroundColor:'#3B82F6',borderRadius:5,maxBarThickness:40}]},options:{...axes(),indexAxis:'y',plugins:{legend:{display:false}}}});
let b=barChart($('#c2'),'rev',12);bindSeg('s2',s=>{CH=CH.filter(x=>x!=b);b.destroy();b=barChart($('#c2'),s,12)});
const mkr=a=>a.map(([k,r])=>({k,r,share:r/t*100,orders:c.filter(x=>x.region==k||x.category==k).length}));const cols=[{k:'k',h:'Name'},{k:'r',h:'Revenue',n:1,r:x=>money(x.r)},{k:'orders',h:'Orders',n:1},{k:'share',h:'Share',n:1,r:x=>x.share.toFixed(1)+'%'}];
table('t1',mkr(ct),cols,{pp:6,sort:'r'});table('t2',mkr(rg),cols,{pp:6,sort:'r'})}
function cu(v){const w=windows(),first={};DATA.forEach(d=>{if(!first[d.customer]||d.date<first[d.customer])first[d.customer]=d.date});
const act=valid(w.cur),names=[...new Set(act.map(x=>x.customer))],isNew=n=>new Date(first[n])>=w.start,nw=names.filter(isNew).length;
const list=Object.entries(group(DATA.filter(x=>x.status!='Refunded'),x=>x.customer)).map(([,[n,r]])=>({name:n,orders:DATA.filter(x=>x.customer==n&&x.status!='Refunded').length,spent:r,last:DATA.filter(x=>x.customer==n).map(x=>x.date).sort().pop(),region:(DATA.find(x=>x.customer==n)||{}).region}));
v.innerHTML=head('Customers','Who is buying, and how often.')+`<div class="grid g3"><div class="card kpi"><span>Total customers</span><div class="v">${num(new Set(DATA.map(x=>x.customer)).size)}</div></div><div class="card kpi"><span>New this period</span><div class="v">${nw}</div></div><div class="card kpi"><span>Returning</span><div class="v">${names.length-nw}</div></div></div>
<div class="grid g2"><div class="card"><h3>New vs returning</h3><div class="ch"><canvas id="c1"></canvas></div></div><div class="card"><h3>Purchase trend</h3><div class="ch"><canvas id="c2"></canvas></div></div></div><div class="card"><h3>Customer list</h3><div id="tc"></div></div>`;
mk($('#c1'),{type:'doughnut',data:{labels:['New','Returning'],datasets:[{data:[nw,names.length-nw],backgroundColor:['#2563EB','#BFDBFE'],borderWidth:0}]},options:{maintainAspectRatio:false,cutout:'68%',plugins:{legend:{position:'bottom'}}}});
const m=monthly(12);mk($('#c2'),{type:'line',data:{labels:m.map(x=>x.label),datasets:[{label:'Orders',data:m.map(x=>x.ord),borderColor:'#2563EB',tension:.4,fill:true,backgroundColor:'rgba(37,99,235,.08)',fmt:num}]},options:{...axes(num),plugins:{legend:{display:false}}}});
table('tc',list,[{k:'name',h:'Customer'},{k:'region',h:'Region'},{k:'orders',h:'Orders',n:1},{k:'spent',h:'Total spent',n:1,r:x=>money(x.spent)},{k:'last',h:'Last order'}],{search:1,sort:'spent'})}
function pr(v){const c=valid(windows().cur),rows=Object.values(c.reduce((m,x)=>{const p=m[x.product]=m[x.product]||{product:x.product,category:x.category,units:0,revenue:0};p.units+=x.qty;p.revenue+=x.revenue;return m},{})),top=[...rows].sort((a,b)=>b.revenue-a.revenue).slice(0,8);
v.innerHTML=head('Products','Performance by product for the selected range.')+`<div class="grid g2"><div class="card"><h3>Revenue by product</h3><div class="ch"><canvas id="c1"></canvas></div></div><div class="card"><h3>Top sellers by units</h3><div id="tp"></div></div></div><div class="card"><h3>All products</h3><div id="tpr"></div></div>`;
mk($('#c1'),{type:'bar',data:{labels:top.map(x=>x.product),datasets:[{label:'Revenue',data:top.map(x=>x.revenue),backgroundColor:'#2563EB',borderRadius:4}]},options:{...axes(),indexAxis:'y',plugins:{legend:{display:false}}}});
const cols=[{k:'product',h:'Product'},{k:'category',h:'Category'},{k:'units',h:'Units',n:1},{k:'revenue',h:'Revenue',n:1,r:x=>money(x.revenue)}];
table('tp',[...rows].sort((a,b)=>b.units-a.units).slice(0,6),cols.slice(0,3),{pp:6});table('tpr',rows,cols,{search:1,fk:'category',fl:'categories',sort:'revenue',pp:10})}
function rp(v){const k=kpis(),w=k.w,cats=group(valid(w.cur),x=>x.category);
v.innerHTML=head('Reports',`${w.start.toLocaleDateString('en-GB')} – ${w.end.toLocaleDateString('en-GB')}`,`<span class="np"><button class="btn" data-a="csv">${ico('dl')} Download CSV</button> <button class="btn p" data-a="print">Print report</button></span>`)+
`<div class="card"><h3>Summary of key metrics</h3><table style="min-width:0"><tr><th>Metric</th><th class="n">Current</th><th class="n">Previous</th><th class="n">Change</th></tr>
<tr><td>Revenue</td><td class="n">${money(k.c.rv)}</td><td class="n">${money(k.p.rv)}</td><td class="n">${pct(k.ch.rv)}</td></tr><tr><td>Orders</td><td class="n">${num(k.c.or)}</td><td class="n">${num(k.p.or)}</td><td class="n">${pct(k.ch.or)}</td></tr><tr><td>Avg order value</td><td class="n">${money(k.c.aov)}</td><td class="n">${money(k.p.aov)}</td><td class="n">${pct(k.ch.aov)}</td></tr><tr><td>Active customers</td><td class="n">${k.c.cu}</td><td class="n">${k.p.cu}</td><td class="n">${pct(k.ch.cu)}</td></tr></table></div>
<div class="grid g2" style="margin-top:16px"><div class="card"><h3>Revenue by category</h3><table style="min-width:0">${cats.map(c=>`<tr><td>${c[0]}</td><td class="n">${money(c[1])}</td></tr>`).join('')}</table></div><div class="card"><h3>Insights</h3>${INSIGHTS.map(i=>`<p><b>${esc(i.title)}</b> — ${esc(i.text)} (${esc(i.metric)})</p>`).join('')}</div></div>`}
function st(v){v.innerHTML=head('Settings','Preferences are saved in this browser.')+`<div class="card"><div class="set"><label>Full name<input id="sn" value="${esc(P.user.name)}"></label><label>Theme<select id="sth"><option value="light">Light</option><option value="dark">Dark</option></select></label><label>Currency<select id="scu"><option value="INR">₹ Indian Rupee</option><option value="USD">$ US Dollar</option><option value="EUR">€ Euro</option></select></label><label>Table rows per page<select id="sr"><option>5</option><option>8</option><option>10</option><option>15</option></select></label><label style="display:flex;gap:8px;align-items:center;flex-direction:row"><input type="checkbox" id="sc" ${P.compact?'checked':''}> Show large amounts compactly (e.g. 12.8 L)</label><div><button class="btn p" id="ss">Save changes</button></div><small style="color:var(--tx2)">Currency changes the symbol only; amounts are not converted.</small></div></div>`;
$('#sth').value=P.theme;$('#scu').value=P.cur;$('#sr').value=P.rows;
$('#ss').onclick=()=>{P.user.name=$('#sn').value.trim()||'Ruhi Anana';P.theme=$('#sth').value;P.cur=$('#scu').value;P.rows=+$('#sr').value;P.compact=$('#sc').checked;LS.set('iiq_prefs',P);applyPrefs();toast('Settings saved')}}
function applyPrefs(){document.documentElement.dataset.theme=P.theme;$('#pn').textContent=P.user.name;const i=P.user.name.split(' ').map(x=>x[0]).join('').slice(0,2).toUpperCase();$$('.av').forEach(a=>a.textContent=i);go(S.page)}
/* ---------- shell ---------- */
$('#nav').innerHTML=Object.entries(PAGES).map(([k,[l]])=>`<button data-pg="${k}">${ico(k)}<span class="lbl">${l}</span></button>`).join('');
function go(p){S.page=p;CH.forEach(c=>c.destroy());CH=[];$$('#nav button').forEach(b=>b.classList.toggle('on',b.dataset.pg==p));$('#pt').textContent=PAGES[p][0]+(IMPORTED?' · imported data':'');
document.body.classList.remove('open');const v=$('#view');v.innerHTML='<div class="empty">Loading…</div>';({ov,an,sl,cu,pr,rp,st})[p](v);scrollTo(0,0)}
$('#nav').onclick=e=>{const b=e.target.closest('[data-pg]');if(b)go(b.dataset.pg)};
$('#colb').onclick=()=>document.body.classList.toggle('col');$('#mb').onclick=()=>document.body.classList.toggle('open');
$('#rng').onchange=e=>{S.months=+e.target.value;runInsights().then(()=>go(S.page));toast('Showing last '+S.months+' months')};
$('#um').onclick=e=>{e.stopPropagation();$('#menu').classList.toggle('show')};document.onclick=()=>$('#menu').classList.remove('show');
$('#bell').onclick=()=>{$('.dot').remove();toast(IMPORTED?'Imported data is active':'No new notifications. Demo data is loaded.')};
$('#help').onclick=()=>modal(`<h3 style="margin-top:0">Help</h3><p>Use <b>Import Data</b> to upload a sales CSV with columns such as Order ID, Order Date, Customer Name, Product, Category, Quantity, Revenue, Region and Payment Status. Dates and revenue are required. Use <b>Reset to demo data</b> in the account menu to go back.</p><button class="btn p" onclick="closeModal()">Got it</button>`);
$('#gs').onkeydown=e=>{if(e.key=='Enter'){go('ov');T.tx={...(T.tx||{}),q:e.target.value.toLowerCase(),page:0,sort:'date',dir:-1,f:''};go('ov');toast('Filtered transactions by "'+e.target.value+'"')}};
document.addEventListener('click',e=>{const a=e.target.closest('[data-a]');if(!a)return;({imp:openImport,exp:()=>{download('insightiq-report.csv',toCSV(windows().cur));toast('Report exported')},gen:()=>{const b=a;b.textContent='Calculating…';setTimeout(()=>{runInsights(true);b.textContent='Generate Insights'},350)},csv:()=>{download('insightiq-data.csv',toCSV(DATA));toast('CSV downloaded')},print:()=>print(),set:()=>go('st'),rst:resetDemo})[a.dataset.a]()});
function modal(h){$('#mbody').innerHTML=h;$('#modal').classList.add('show')}function closeModal(){$('#modal').classList.remove('show')}
$('#modal').onclick=e=>{if(e.target.id=='modal')closeModal()};
function resetDemo(){DATA=demo();IMPORTED=false;try{localStorage.removeItem('iiq_data')}catch(e){}runInsights().then(()=>go(S.page));toast('Demo data restored')}
/* ---------- CSV import ---------- */
const ALIAS={id:['order id','orderid','id'],date:['order date','date'],customer:['customer name','customer'],product:['product','item'],category:['category'],qty:['quantity','qty'],revenue:['revenue','amount','total','sales'],region:['region'],status:['payment status','status']};
function openImport(){modal(`<h3 style="margin-top:0">Import sales data</h3><p style="color:var(--tx2)">Upload a CSV. Required: Order Date, Revenue, Product. Nothing changes until you confirm.</p><input type="file" id="fi" accept=".csv,text/csv"><div id="pv"></div>`);
$('#fi').onchange=e=>{const f=e.target.files[0];if(!f)return;if(!/\.csv$/i.test(f.name)){$('#pv').innerHTML='<div class="err">That is not a .csv file. Export your data as CSV and try again.</div>';return}
Papa.parse(f,{header:true,skipEmptyLines:true,complete:r=>{const hs=(r.meta.fields||[]).map(h=>h.trim().toLowerCase()),map={};for(const k in ALIAS){const i=hs.findIndex(h=>ALIAS[k].includes(h));if(i>=0)map[k]=r.meta.fields[i]}
const miss=['date','revenue','product'].filter(k=>!map[k]);if(miss.length||!r.data.length){$('#pv').innerHTML=`<div class="err">${r.data.length?'Missing required columns: '+miss.join(', ')+'.':'The file has no data rows.'} Check the header row.</div>`;return}
let bad=0;const rows=[];r.data.forEach((x,i)=>{const d=new Date(x[map.date]),rv=parseFloat(String(x[map.revenue]).replace(/[^0-9.\-]/g,''));if(isNaN(d)||isNaN(rv)||rv<0||!String(x[map.product]||'').trim()){bad++;return}
const st=String(x[map.status]||'Completed').toLowerCase();rows.push({id:x[map.id]||'IMP-'+(i+1),date:d.toISOString().slice(0,10),customer:(x[map.customer]||'Unknown').trim(),product:x[map.product].trim(),category:(x[map.category]||'Other').trim(),qty:parseInt(x[map.qty])||1,revenue:rv,region:(x[map.region]||'Unknown').trim(),status:/refund/.test(st)?'Refunded':/pend/.test(st)?'Pending':'Completed'})});
if(!rows.length){$('#pv').innerHTML='<div class="err">Every row had a missing or invalid date, revenue or product.</div>';return}
$('#pv').innerHTML=`<p><b>${rows.length}</b> valid rows${bad?`, <b>${bad}</b> skipped (invalid or missing values)`:''}. Preview:</p><div class="tw"><table><tr><th>Order</th><th>Date</th><th>Customer</th><th>Product</th><th>Revenue</th></tr>${rows.slice(0,5).map(x=>`<tr><td>${esc(x.id)}</td><td>${x.date}</td><td>${esc(x.customer)}</td><td>${esc(x.product)}</td><td>${money(x.revenue)}</td></tr>`).join('')}</table></div><p style="margin-top:14px"><button class="btn p" id="cf">Replace dashboard data</button> <button class="btn" onclick="closeModal()">Cancel</button></p>`;
$('#cf').onclick=()=>{DATA=rows;IMPORTED=true;LS.set('iiq_data',rows);closeModal();T.tx=T.tc=null;runInsights().then(()=>go(S.page));toast(`Imported ${rows.length} orders`)}},error:()=>{$('#pv').innerHTML='<div class="err">The file could not be read.</div>'}})}}
/* ---------- boot ---------- */
applyPrefs();runInsights().then(()=>go('ov'));
