
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const fmt=n=>new Intl.NumberFormat('ru-RU').format(n).replace(/\u00a0/g,' ');
// pages
const P={
features:['Всё для записи в одном кабинете','Бронирования, расписание, команда и клиенты в одном месте. Сайт и Telegram работают на одной базе. Возможности запускаются этапами, актуальный список уточним при подключении.',[['Бронирования','Список и статусы записей: подтверждена, перенесена, отменена.'],['Календарь','Загрузка мастеров и столиков по дням и часам.'],['Услуги и мастера','Цены, длительность и кто какие услуги выполняет.'],['Клиенты','База гостей с историей визитов.'],['Аналитика','Брони по периодам, отмены, популярные услуги.'],['Изоляция данных','Данные каждого заведения закрыты от других на уровне базы.']]],
restaurants:['Бронь столиков для ресторанов и кафе','Гость выбирает дату, время и число людей. Система показывает только свободные столы.',[['Залы и зоны','Зал, терраса, VIP — гость выбирает, где сидеть.'],['Столы по вместимости','Предлагается стол, подходящий под число гостей.'],['Время посадки','Задайте длительность брони и перерыв между гостями.'],['Блокировка столов','Закройте стол на банкет или ремонт.'],['Пожелания гостя','Детский стул, день рождения, тихий угол — всё в брони.'],['Уведомления','Владелец и гость получают сообщение в Telegram.']]],
salons:['Запись для салонов и барбершопов','Клиент выбирает услугу, мастера и время, увидев цену и длительность.',[['Услуги и цены','Несколько услуг в одной записи, цена и время видны сразу.'],['Выбор мастера','Конкретный мастер или «любой свободный».'],['Рабочие часы','Перерывы, выходные и отпуска мастеров учитываются.'],['Без накладок','У одного мастера не будет двух записей на одно время.'],['Напоминания','Клиент получает напоминание, меньше неявок.'],['Свой Mini App','Запись в Telegram с вашим логотипом и цветами.']]],
contacts:['Контакты','Ответим на вопросы, подберём тариф и покажем кабинет.',[['Telegram','Самый быстрый способ связаться с нами.'],['Подключение','Расскажите о заведении, настроим страницу бронирования и проведём по кабинету.'],['География','Ташкент, Узбекистан. Ориентируемся на заведения страны.']]]};
Object.entries(P).forEach(([k,[t,l,c]])=>{const m=document.createElement('main');m.id='p-'+k;m.className='pg';m.hidden=true;m.innerHTML=`<section style="padding-top:64px"><div class="w"><div class="head"><h1>${t}</h1><p class="mut" style="font-size:19px;margin-top:16px">${l}</p></div><div class="cards">${c.map(([a,b])=>`<div class="card"><h3>${a}</h3><p class="mut" style="margin-top:8px">${b}</p></div>`).join('')}</div>${k==='contacts'?'<div style="margin-top:28px"><a class="btn" href="https://t.me/" target="_blank" rel="noopener noreferrer">Написать в Telegram</a></div>':''}</div></section>`;$('#cta').before(m)});
// glow, tilt, spotlight
const hv=matchMedia('(hover:hover)').matches,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(hv&&!rm){const sp=document.createElement('div');sp.className='spot';document.body.append(sp);addEventListener('pointermove',e=>{sp.style.transform=`translate(${e.clientX-260}px,${e.clientY-260}px)`});
$$('.demo,.step,.feat,.pc,.phone,.cta,.card').forEach(e=>{e.classList.add('gl');e.addEventListener('pointermove',v=>{const r=e.getBoundingClientRect(),x=v.clientX-r.left,y=v.clientY-r.top;e.style.setProperty('--mx',x+'px');e.style.setProperty('--my',y+'px');e.style.setProperty('--rx',((y/r.height-.5)*-5)+'deg');e.style.setProperty('--ry',((x/r.width-.5)*5)+'deg')});e.addEventListener('pointerleave',()=>{e.style.setProperty('--rx','0deg');e.style.setProperty('--ry','0deg')})})}
// mobile menu
const nv=$('nav'),bg=$('#bgr');const cl=()=>{nv.classList.remove('open');bg.setAttribute('aria-expanded','false');bg.textContent='☰'};
bg.onclick=()=>{const o=nv.classList.toggle('open');bg.setAttribute('aria-expanded',o);bg.textContent=o?'✕':'☰'};
nv.addEventListener('click',e=>{if(e.target.closest('a'))cl()});addEventListener('hashchange',cl);matchMedia('(min-width:821px)').addEventListener('change',cl);
// theme
$('#th').onclick=()=>{const d=document.documentElement,dark=getComputedStyle(d).colorScheme==='dark';d.dataset.theme=dark?'light':'dark'};
// demo
const D={
salon:{name:'Barber House',svc:[['Стрижка',120000,45],['Борода',70000,30],['Комплекс',170000,75]],staff:['Любой мастер','Азиз','Рустам'],slots:['10:00','10:45','11:30','12:15','14:00','15:30'],taken:['10:45','14:00']},
rest:{name:'Oshxona Garden',guests:[2,3,4,6],zone:['Зал','Терраса'],slots:['18:00','18:30','19:00','19:30','20:00','21:00'],taken:['19:00','20:00']}};
let tab='salon',S={};
function render(){
 const d=D[tab],b=$('#dbody');S={slot:null,a:0,c:0};
 let h=`<div class="dh"><b>${d.name}</b><span class="mut" style="font-size:14px">Сегодня</span></div>`;
 if(tab==='salon')h+=`<div class="lbl">Услуга</div><div class="opts" data-g="a">${d.svc.map((s,i)=>`<button class="opt" aria-pressed="${!i}" data-i="${i}">${s[0]}</button>`).join('')}</div><div class="lbl">Мастер</div><div class="opts" data-g="c">${d.staff.map((s,i)=>`<button class="opt" aria-pressed="${!i}" data-i="${i}">${s}</button>`).join('')}</div>`;
 else h+=`<div class="lbl">Гостей</div><div class="opts" data-g="a">${d.guests.map((s,i)=>`<button class="opt" aria-pressed="${!i}" data-i="${i}">${s}</button>`).join('')}</div><div class="lbl">Зона</div><div class="opts" data-g="c">${d.zone.map((s,i)=>`<button class="opt" aria-pressed="${!i}" data-i="${i}">${s}</button>`).join('')}</div>`;
 h+=`<div class="lbl">Свободное время</div><div class="opts slots" id="sl">${d.slots.map((s,i)=>`<button class="opt" style="animation-delay:${.35+i*.07}s" data-s="${s}" ${d.taken.includes(s)?'disabled':''}>${s}</button>`).join('')}</div>
 <div class="sum"><div><small id="sl1">Выберите время</small><b id="pr"></b></div><button class="btn" id="go" disabled>Записаться</button></div>`;
 b.innerHTML=h;upd();
 $$('.opts[data-g]',b).forEach(g=>g.onclick=e=>{const o=e.target.closest('.opt');if(!o)return;$$('.opt',g).forEach(x=>x.setAttribute('aria-pressed',x===o));S[g.dataset.g]=+o.dataset.i;upd()});
 $('#sl').onclick=e=>{const o=e.target.closest('.opt');if(!o||o.disabled)return;pick(o)};
 $('#go').onclick=done;
}
function pick(o){$$('#sl .opt').forEach(x=>x.setAttribute('aria-pressed',x===o));S.slot=o.dataset.s;auto=false;upd()}
function upd(){
 const d=D[tab];if(!$('#go'))return;
 $('#go').disabled=!S.slot;
 $('#sl1').textContent=S.slot?`Сегодня, ${S.slot}`:'Выберите время';
 $('#pr').textContent=tab==='salon'?`${fmt(d.svc[S.a][1])} сум · ${d.svc[S.a][2]} мин`:`Стол на ${d.guests[S.a]} · ${d.zone[S.c]}`;
}
function done(){
 const d=D[tab];$('#okt').textContent=`${d.name}, сегодня в ${S.slot}`;
 $('#tgm').innerHTML=`<b>Bookly AI</b><br>Вы записаны: ${tab==='salon'?d.svc[S.a][0]:'стол на '+d.guests[S.a]}, сегодня в ${S.slot}. Напомним за 2 часа.`;
 const ok=$('#ok');ok.classList.remove('on');void ok.offsetWidth;ok.classList.add('on');
}
$('#again').onclick=()=>{$('#ok').classList.remove('on');render()};
$$('.tabs button').forEach(b=>b.onclick=()=>{tab=b.dataset.t;$$('.tabs button').forEach(x=>x.setAttribute('aria-selected',x===b));$('#ok').classList.remove('on');render();autoplay()});
let auto=true;
function autoplay(){auto=true;setTimeout(()=>{if(auto){const o=$$('#sl .opt:not(:disabled)')[2];o&&pick(o)}},2400)}
render();autoplay();
// features
const F=[['Рестораны и кафе','Бронь столика без звонков и переписок.',['Выбор даты, времени и количества гостей','Залы, зоны и столики с учётом вместимости','Время посадки и перерыв между бронями','Особые пожелания гостя к брони']],
['Салоны и барбершопы','Запись к нужному мастеру на удобное время.',['Выбор услуги, мастера или «любой свободный»','Цена и длительность до подтверждения','Рабочие часы, перерывы и отпуска мастеров','Несколько услуг в одной записи']]];
function fp(i){$('#fp').innerHTML=`<h3>${F[i][0]}</h3><p class="mut" style="margin-top:6px">${F[i][1]}</p><ul>${F[i][2].map(x=>`<li>${x}</li>`).join('')}</ul>`}
fp(0);$$('.ft button').forEach(b=>b.onclick=()=>{$$('.ft button').forEach(x=>x.setAttribute('aria-selected',x===b));fp(+b.dataset.f)});
// pricing
$$('.sw button').forEach(b=>b.onclick=()=>{$$('.sw button').forEach(x=>x.setAttribute('aria-pressed',x===b));const y=b.dataset.p==='y';$$('[data-b]').forEach(e=>{const v=+e.dataset.b;e.innerHTML=`${fmt(y?Math.round(v*.8/1000)*1000:v)} <small>сум/мес</small>`})});
// router
const PG=['home','features','restaurants','salons','pricing','contacts'],AN={how:'home',biz:'home',tg:'home',price:'pricing',faq:'pricing'};let cur='';
function show(p){cur=p;$$('.pg').forEach(m=>m.hidden=m.id!=='p-'+p);$$('nav a.l').forEach(a=>a.toggleAttribute('aria-current',a.getAttribute('href')==='#'+p))}
function route(){const h=location.hash.slice(1);if(!h||PG.includes(h)){show(h||'home');scrollTo(0,0)}else{const p=AN[h];if(p&&cur!==p)show(p);else if(!cur)show('home');const t=document.getElementById(h);t&&t.scrollIntoView({behavior:'smooth'})}}
addEventListener('hashchange',route);route();
// marquee + reveal
const MQ=['Рестораны','Кафе','Барбершопы','Салоны красоты','Массаж','Маникюр','Спа','Студии'];
$('#mt').innerHTML=[...MQ,...MQ].map(x=>`<span>${x}</span>`).join('');
const rv=$$('.head,.steps,.cards,.price,.tgw');rv.forEach(e=>e.classList.add('rv'));
if('IntersectionObserver'in window&&!rm){const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});rv.forEach(e=>io.observe(e))}else rv.forEach(e=>e.classList.add('in'));
