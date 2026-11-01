(()=>{'use strict';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const main=$('#mainProductImage'),thumbs=$$('.gallery-thumb');
thumbs.forEach((th,i)=>{th.addEventListener('click',()=>{if(!main)return;main.src=th.dataset.src;main.alt=th.dataset.alt||'';thumbs.forEach((t,j)=>{t.classList.toggle('selected',i===j);t.setAttribute('aria-pressed',String(i===j))})})});
$$('.variant').forEach(v=>v.addEventListener('click',()=>{$$('.variant').forEach(x=>{x.classList.remove('selected');x.setAttribute('aria-pressed','false')});v.classList.add('selected');v.setAttribute('aria-pressed','true')}));
$$('.color-option').forEach(c=>c.addEventListener('click',()=>{$$('.color-option').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-pressed','false')});c.classList.add('active');c.setAttribute('aria-pressed','true')}));
const qty=$('#quantity');let q=1;function displayQty(){if(qty)qty.textContent=String(q).replace(/[0-9]/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d])}
$('#qtyPlus')?.addEventListener('click',()=>{q=Math.min(q+1,10);displayQty()});$('#qtyMinus')?.addEventListener('click',()=>{q=Math.max(q-1,1);displayQty()});

})();
(()=>{'use strict';const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const catalog={
 'queen-64':{name:'فلش مموری کویین‌تک QueenTech USB-C ظرفیت ۶۴ گیگابایت',img:'assets/product-main.svg',cat:'حافظه و ذخیره‌سازی',sky:'QT-C64'},
 'queen-32':{name:'فلش مموری کویین Queen ظرفیت ۳۲ گیگابایت',img:'assets/flash.svg',cat:'حافظه و ذخیره‌سازی',sky:'Q-32'},
 'queen-16':{name:'فلش مموری کویین Queen ظرفیت ۱۶ گیگابایت',img:'assets/flash.svg',cat:'حافظه و ذخیره‌سازی',sky:'Q-16'},
 'car-charger':{name:'شارژر فندکی خودرو فست شارژ دو پورت USB',img:'assets/charger.svg',cat:'شارژر و مبدل',sky:'M-CH'},
 'mini-speaker':{name:'اسپیکر بلوتوثی قابل حمل مدل Mini Sound',img:'assets/speaker.svg',cat:'اسپیکر و صوت',sky:'MS-01'},
 'smart-watch':{name:'ساعت هوشمند اسپرت با نمایشگر رنگی',img:'assets/watch.svg',cat:'گجت‌های پوشیدنی',sky:'SW-01'}};
const fa=n=>String(n).replace(/[0-9]/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);
const q=new URLSearchParams(location.search),key=catalog[q.get('id')||'']?q.get('id'):catalog[q.get('slug')||'']?q.get('slug'):'queen-64';
const it=catalog[key];const h1=$('.detail-info h1'),main=$('#mainProductImage');if(h1)h1.textContent=it.name;const crumb=$('.breadcrumbs b');if(crumb)crumb.textContent=it.name.length>35?it.name.slice(0,34)+'…':it.name;
if(key!=='queen-64'){if(main){main.src=it.img;main.alt=it.name}$$('.gallery-thumb').forEach(t=>{t.dataset.src=it.img;t.querySelector('img').src=it.img});const sk=$('.sku');if(sk)sk.textContent='کد کالا: '+it.sky;document.title=it.name+' | MTM Digital'}
const addBtn=$('#productAdd');if(addBtn&&window.mtmStore){addBtn.onclick=()=>{const v=$('.variant.selected')?.textContent.trim()||'';const price={ 'queen-32':308000,'queen-16':235000,'car-charger':465000,'mini-speaker':1490000,'smart-watch':1980000}[key]||398000;window.mtmStore.add(key,Math.max(1,parseInt($('#quantity')?.textContent.replace(/[۰-۹]/g,d=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))||1),{variant:v,color:$('.color-option.active')?.title||'ذغالی',price,img:it.img})}}
$$('.related-card[href="product.html"]').forEach(a=>a.href='product.html?id=queen-64');
})();
