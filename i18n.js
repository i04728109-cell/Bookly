(function(){
const R=[
['Возможности','Features','Imkoniyatlar'],['Рестораны','Restaurants','Restoranlar'],['Салоны','Salons','Salonlar'],['Тарифы','Pricing','Tariflar'],['Контакты','Contact','Aloqa'],['Подключить заведение','Connect your business','Biznesingizni ulang'],['Подключить','Connect','Ulanish'],
['Запись клиентов, которая работает без звонков','Online booking that works without phone calls','Qo‘ng‘iroqsiz ishlaydigan mijozlar yozuvi'],
['Bookly AI — единая система онлайн-записи для ресторанов, салонов и барбершопов Узбекистана. Страница бронирования и Telegram Mini App для каждого заведения.','Bookly AI is a unified online booking system for restaurants, salons and barbershops in Uzbekistan. A booking page and a Telegram Mini App for every business.','Bookly AI — O‘zbekistondagi restoran, salon va sartaroshxonalar uchun yagona onlayn bron tizimi. Har bir biznes uchun bron sahifasi va Telegram Mini App.'],
['Как это работает','How it works','Qanday ishlaydi'],['0 звонков','0 calls','0 qo‘ng‘iroq'],['для записи клиента','to book a client','mijozni yozish uchun'],['приём бронирований','taking bookings','bronlarni qabul qilish'],['цены в сумах','prices in UZS','narxlar so‘mda'],
['Салон','Salon','Salon'],['Ресторан','Restaurant','Restoran'],['✨ Новая бронь','✨ New booking','✨ Yangi bron'],['Сегодня','Today','Bugun'],['Услуга','Service','Xizmat'],['Мастер','Specialist','Usta'],['Гостей','Guests','Mehmonlar'],['Зона','Area','Hudud'],['Свободное время','Available times','Bo‘sh vaqt'],['Выберите время','Choose a time','Vaqtni tanlang'],['Записаться','Book','Yozilish'],['Запись подтверждена','Booking confirmed','Yozuv tasdiqlandi'],['Попробовать снова','Try again','Qayta urinish'],['Любой мастер','Any specialist','Istalgan usta'],['Азиз','Aziz','Aziz'],['Рустам','Rustam','Rustam'],['Зал','Main hall','Zal'],['Терраса','Terrace','Terrassa'],['Стрижка','Haircut','Soch olish'],['Борода','Beard','Soqol'],['Комплекс','Combo','Kompleks'],
['От ссылки до записи за три шага','From a link to a booking in three steps','Havoladan yozuvgacha uch qadamda'],
['Клиент не скачивает приложение и не регистрируется. Он выбирает время и получает подтверждение в Telegram.','Clients don’t install an app or sign up. They pick a time and get a confirmation in Telegram.','Mijoz ilova yuklamaydi va ro‘yxatdan o‘tmaydi. U vaqtni tanlaydi va Telegramda tasdiq oladi.'],
['Шаг 1','Step 1','1-qadam'],['Шаг 2','Step 2','2-qadam'],['Шаг 3','Step 3','3-qadam'],
['Клиент открывает ссылку','The client opens a link','Mijoz havolani ochadi'],
['Страница bookly.ai/b/название или Mini App в Telegram с логотипом и цветами вашего заведения.','The page bookly.ai/b/name or a Telegram Mini App with your logo and colors.','bookly.ai/b/nom sahifasi yoki logotip va ranglaringiz bilan Telegram Mini App.'],
['Выбирает услугу или столик','Picks a service or a table','Xizmat yoki stolni tanlaydi'],
['Система показывает только свободное время с учётом мастеров, длительности и вместимости столиков.','The system shows only free times, taking staff, duration and table capacity into account.','Tizim faqat bo‘sh vaqtni ko‘rsatadi: ustalar, davomiylik va stol sig‘imi hisobga olinadi.'],
['Вы получаете бронь','You get the booking','Siz bronni olasiz'],
['Запись появляется в кабинете, а владелец и клиент получают уведомление. Двойная запись исключена на уровне базы данных.','The booking appears in your dashboard, and both owner and client get a notification. Double booking is blocked at the database level.','Yozuv kabinetda paydo bo‘ladi, egasi va mijoz xabar oladi. Ikki marta yozilish ma’lumotlar bazasi darajasida istisno qilingan.'],
['Устроено под ваш тип бизнеса','Built for your type of business','Biznes turingizga moslangan'],
['У ресторана и салона разные правила, поэтому у них разные сценарии записи.','Restaurants and salons follow different rules, so they get different booking flows.','Restoran va salonning qoidalari har xil, shuning uchun bron jarayonlari ham har xil.'],
['Рестораны и кафе','Restaurants and cafés','Restoran va kafelar'],['Салоны и барбершопы','Salons and barbershops','Salon va sartaroshxonalar'],
['Бронь столика без звонков и переписок.','Table booking without calls or chats.','Qo‘ng‘iroq va yozishmalarsiz stol bron qilish.'],
['Выбор даты, времени и количества гостей','Choose date, time and number of guests','Sana, vaqt va mehmonlar sonini tanlash'],
['Залы, зоны и столики с учётом вместимости','Halls, areas and tables by capacity','Zallar, hududlar va sig‘imi hisobga olingan stollar'],
['Время посадки и перерыв между бронями','Seating time and buffer between bookings','O‘tirish vaqti va bronlar orasidagi tanaffus'],
['Особые пожелания гостя к брони','Special requests from the guest','Mehmonning maxsus istaklari'],
['Запись к нужному мастеру на удобное время.','Book the right specialist at a convenient time.','Kerakli ustaga qulay vaqtga yozilish.'],
['Выбор услуги, мастера или «любой свободный»','Choose a service and a specialist, or “anyone available”','Xizmat va ustani yoki «istalgan bo‘shini» tanlash'],
['Цена и длительность до подтверждения','Price and duration before confirming','Tasdiqlashdan oldin narx va davomiylik'],
['Рабочие часы, перерывы и отпуска мастеров','Working hours, breaks and time off','Ish soatlari, tanaffuslar va ustalarning ta’tillari'],
['Несколько услуг в одной записи','Several services in one booking','Bir yozuvda bir nechta xizmat'],
['Свой Telegram Mini App у каждого заведения','Your own Telegram Mini App for every business','Har bir biznes uchun o‘z Telegram Mini App’i'],
['Клиенты Узбекистана уже живут в Telegram. Дайте им запись в два касания там, где они общаются.','Customers in Uzbekistan already live in Telegram. Let them book in two taps right where they chat.','O‘zbekistonlik mijozlar allaqachon Telegramda. Ularga muloqot qiladigan joyda ikki bosishda yozilish imkonini bering.'],
['Один бот для всех заведений','One bot for all businesses','Barcha bizneslar uchun bitta bot'],
['Каждое заведение открывается по своей ссылке со своим брендингом.','Each business opens by its own link with its own branding.','Har bir biznes o‘z havolasi va brendi bilan ochiladi.'],
['Проверенные данные пользователя','Verified user data','Tekshirilgan foydalanuvchi ma’lumotlari'],
['Подлинность Telegram-данных проверяется на сервере.','Telegram data is verified on the server.','Telegram ma’lumotlari serverda tekshiriladi.'],
['Напоминания и уведомления','Reminders and notifications','Eslatma va xabarlar'],
['О новой записи, переносе и отмене.','About new, rescheduled and cancelled bookings.','Yangi yozuv, ko‘chirish va bekor qilish haqida.'],
['Ташкент · 09:00–21:00','Tashkent · 09:00–21:00','Toshkent · 09:00–21:00'],
['Фиксированная цена в сумах: Старт — около $40, Бизнес — около $80 в месяц. Цена покрывает сервер, базу данных и Telegram-бота. Суммы ориентировочные.','Fixed price in UZS: Start is about $40, Business about $80 per month. The price covers the server, database and Telegram bot. Amounts are approximate.','So‘mda belgilangan narx: Start — taxminan $40, Business — oyiga taxminan $80. Narx server, ma’lumotlar bazasi va Telegram botni qoplaydi. Summalar taxminiy.'],
['Помесячно','Monthly','Oylik'],['Год, −20%','Yearly, −20%','Yillik, −20%'],['Старт','Start','Start'],['Бизнес','Business','Biznes'],['Сеть','Chain','Tarmoq'],['сум/мес','UZS/mo','so‘m/oy'],
['1 заведение','1 business','1 ta biznes'],['До 3 сотрудников','Up to 3 staff','3 tagacha xodim'],['Страница бронирования','Booking page','Bron sahifasi'],['Уведомления в Telegram','Telegram notifications','Telegram xabarlari'],['До 15 сотрудников и столиков','Up to 15 staff and tables','15 tagacha xodim va stol'],['Аналитика','Analytics','Tahlil'],['Напоминания клиентам','Client reminders','Mijozlarga eslatmalar'],['По запросу','On request','So‘rov bo‘yicha'],['Несколько филиалов','Multiple branches','Bir nechta filial'],['Расширенные роли','Advanced roles','Kengaytirilgan rollar'],['Индивидуальные условия','Custom terms','Individual shartlar'],['Выбрать','Choose','Tanlash'],['Обсудить','Discuss','Muhokama qilish'],
['Частые вопросы','FAQ','Ko‘p so‘raladigan savollar'],
['Нужно ли клиентам устанавливать приложение?','Do clients need to install an app?','Mijozlar ilova o‘rnatishi kerakmi?'],
['Нет. Запись работает по ссылке в браузере или внутри Telegram.','No. Booking works via a link in the browser or inside Telegram.','Yo‘q. Yozilish brauzerdagi havola orqali yoki Telegram ichida ishlaydi.'],
['Как защищены данные заведения?','How is my business data protected?','Biznes ma’lumotlari qanday himoyalangan?'],
['Каждое заведение изолировано от других на уровне базы данных. Сотрудник одного бизнеса не видит данные другого.','Each business is isolated from others at the database level. Staff of one business cannot see another’s data.','Har bir biznes boshqalardan ma’lumotlar bazasi darajasida ajratilgan. Bir biznes xodimi boshqasining ma’lumotini ko‘rmaydi.'],
['Можно ли избежать двойных записей?','Can double bookings be avoided?','Ikki marta yozilishni oldini olish mumkinmi?'],
['Да. Свободное время проверяется на сервере, а база данных не позволяет занять один слот дважды.','Yes. Free time is checked on the server, and the database does not allow the same slot to be taken twice.','Ha. Bo‘sh vaqt serverda tekshiriladi, ma’lumotlar bazasi bitta vaqtni ikki marta band qilishga yo‘l qo‘ymaydi.'],
['Есть ли онлайн-оплата?','Is there online payment?','Onlayn to‘lov bormi?'],
['Пока нет. Интеграции с Click и Payme планируются отдельным этапом.','Not yet. Click and Payme integrations are planned as a separate stage.','Hozircha yo‘q. Click va Payme integratsiyasi alohida bosqichda rejalashtirilgan.'],
['На каких языках работает сервис?','Which languages does the service support?','Xizmat qaysi tillarda ishlaydi?'],
['Русский, узбекский и английский. Язык переключается в меню.','Russian, Uzbek and English. You can switch the language in the menu.','Rus, o‘zbek va ingliz tillarida. Tilni menyudan almashtirish mumkin.'],
['Подключите заведение к Bookly AI','Connect your business to Bookly AI','Biznesingizni Bookly AI ga ulang'],
['Напишите нам в Telegram — настроим страницу бронирования и покажем кабинет на ваших данных.','Message us on Telegram — we’ll set up your booking page and show the dashboard with your data.','Telegramda yozing — bron sahifasini sozlaymiz va kabinetni sizning ma’lumotlaringizda ko‘rsatamiz.'],
['Написать в Telegram','Message us on Telegram','Telegramda yozish'],
['© 2026 Bookly AI. Ташкент, Узбекистан','© 2026 Bookly AI. Tashkent, Uzbekistan','© 2026 Bookly AI. Toshkent, O‘zbekiston'],
['Кафе','Cafés','Kafelar'],['Барбершопы','Barbershops','Sartaroshxonalar'],['Салоны красоты','Beauty salons','Go‘zallik salonlari'],['Массаж','Massage','Massaj'],['Маникюр','Manicure','Manikyur'],['Спа','Spa','Spa'],['Студии','Studios','Studiyalar'],
['Всё для записи в одном кабинете','Everything for booking in one dashboard','Yozuv uchun hammasi bitta kabinetda'],
['Бронирования, расписание, команда и клиенты в одном месте. Сайт и Telegram работают на одной базе. Возможности запускаются этапами, актуальный список уточним при подключении.','Bookings, schedule, team and clients in one place. The website and Telegram run on one database. Features roll out in stages; we’ll confirm the current list when you connect.','Bronlar, jadval, jamoa va mijozlar bir joyda. Sayt va Telegram bitta bazada ishlaydi. Imkoniyatlar bosqichma-bosqich ishga tushadi, joriy ro‘yxatni ulanishda aniqlashtiramiz.'],
['Бронирования','Bookings','Bronlar'],['Список и статусы записей: подтверждена, перенесена, отменена.','List and statuses of bookings: confirmed, rescheduled, cancelled.','Yozuvlar ro‘yxati va holatlari: tasdiqlangan, ko‘chirilgan, bekor qilingan.'],
['Календарь','Calendar','Kalendar'],['Загрузка мастеров и столиков по дням и часам.','Staff and table load by day and hour.','Usta va stollar bandligi kun va soat bo‘yicha.'],
['Услуги и мастера','Services and staff','Xizmatlar va ustalar'],['Цены, длительность и кто какие услуги выполняет.','Prices, durations and who performs which services.','Narxlar, davomiylik va kim qaysi xizmatni bajaradi.'],
['Клиенты','Clients','Mijozlar'],['База гостей с историей визитов.','Guest database with visit history.','Tashriflar tarixi bilan mehmonlar bazasi.'],
['Брони по периодам, отмены, популярные услуги.','Bookings by period, cancellations, popular services.','Davrlar bo‘yicha bronlar, bekor qilishlar, mashhur xizmatlar.'],
['Изоляция данных','Data isolation','Ma’lumotlar izolyatsiyasi'],['Данные каждого заведения закрыты от других на уровне базы.','Each business’s data is closed off from others at the database level.','Har bir biznes ma’lumotlari bazada boshqalardan yopiq.'],
['Бронь столиков для ресторанов и кафе','Table booking for restaurants and cafés','Restoran va kafelar uchun stol bron qilish'],
['Гость выбирает дату, время и число людей. Система показывает только свободные столы.','Guests choose date, time and party size. The system shows only free tables.','Mehmon sana, vaqt va odamlar sonini tanlaydi. Tizim faqat bo‘sh stollarni ko‘rsatadi.'],
['Залы и зоны','Halls and areas','Zallar va hududlar'],['Зал, терраса, VIP — гость выбирает, где сидеть.','Hall, terrace, VIP — guests choose where to sit.','Zal, terrassa, VIP — mehmon qayerda o‘tirishni tanlaydi.'],
['Столы по вместимости','Tables by capacity','Sig‘im bo‘yicha stollar'],['Предлагается стол, подходящий под число гостей.','A table that fits the party size is offered.','Mehmonlar soniga mos stol taklif qilinadi.'],
['Время посадки','Seating time','O‘tirish vaqti'],['Задайте длительность брони и перерыв между гостями.','Set booking duration and a buffer between guests.','Bron davomiyligi va mehmonlar orasidagi tanaffusni belgilang.'],
['Блокировка столов','Table blocking','Stollarni bloklash'],['Закройте стол на банкет или ремонт.','Close a table for a banquet or repairs.','Stolni banket yoki ta’mir uchun yoping.'],
['Пожелания гостя','Guest requests','Mehmon istaklari'],['Детский стул, день рождения, тихий угол — всё в брони.','High chair, birthday, quiet corner — all in the booking.','Bolalar stuli, tug‘ilgan kun, sokin burchak — hammasi bronda.'],
['Уведомления','Notifications','Xabarlar'],['Владелец и гость получают сообщение в Telegram.','The owner and the guest get a Telegram message.','Egasi va mehmon Telegramda xabar oladi.'],
['Запись для салонов и барбершопов','Booking for salons and barbershops','Salon va sartaroshxonalar uchun yozilish'],
['Клиент выбирает услугу, мастера и время, увидев цену и длительность.','Clients choose a service, specialist and time, seeing price and duration.','Mijoz narx va davomiylikni ko‘rib, xizmat, usta va vaqtni tanlaydi.'],
['Услуги и цены','Services and prices','Xizmatlar va narxlar'],['Несколько услуг в одной записи, цена и время видны сразу.','Several services in one booking, price and time visible at once.','Bir yozuvda bir nechta xizmat, narx va vaqt darhol ko‘rinadi.'],
['Выбор мастера','Choose a specialist','Ustani tanlash'],['Конкретный мастер или «любой свободный».','A specific specialist or “anyone available”.','Aniq usta yoki «istalgan bo‘sh».'],
['Рабочие часы','Working hours','Ish soatlari'],['Перерывы, выходные и отпуска мастеров учитываются.','Breaks, days off and time off are taken into account.','Tanaffus, dam olish kunlari va ta’tillar hisobga olinadi.'],
['Без накладок','No overlaps','Qo‘shilib qolishlarsiz'],['У одного мастера не будет двух записей на одно время.','One specialist will never get two bookings at the same time.','Bir ustada bir vaqtga ikkita yozuv bo‘lmaydi.'],
['Напоминания','Reminders','Eslatmalar'],['Клиент получает напоминание, меньше неявок.','Clients get a reminder, fewer no-shows.','Mijoz eslatma oladi, kelmaslik kamayadi.'],
['Свой Mini App','Your own Mini App','O‘z Mini App’ingiz'],['Запись в Telegram с вашим логотипом и цветами.','Booking in Telegram with your logo and colors.','Logotip va ranglaringiz bilan Telegramda yozilish.'],
['Ответим на вопросы, подберём тариф и покажем кабинет.','We’ll answer your questions, choose a plan and show the dashboard.','Savollarga javob beramiz, tarif tanlaymiz va kabinetni ko‘rsatamiz.'],
['Самый быстрый способ связаться с нами.','The fastest way to reach us.','Biz bilan bog‘lanishning eng tez usuli.'],
['Подключение','Onboarding','Ulanish jarayoni'],['Расскажите о заведении, настроим страницу бронирования и проведём по кабинету.','Tell us about your business, we’ll set up the booking page and walk you through the dashboard.','Biznesingiz haqida gapirib bering, bron sahifasini sozlaymiz va kabinet bilan tanishtiramiz.'],
['География','Location','Joylashuv'],['Ташкент, Узбекистан. Ориентируемся на заведения страны.','Tashkent, Uzbekistan. We focus on businesses in the country.','Toshkent, O‘zbekiston. Mamlakat biznesiga yo‘naltirilganmiz.'],
['Bookly AI — онлайн-запись для заведений Узбекистана','Bookly AI — online booking for businesses in Uzbekistan','Bookly AI — O‘zbekiston biznesi uchun onlayn yozilish'],
['Сменить тему','Toggle theme','Mavzuni almashtirish'],['Меню','Menu','Menyu'],['Интерактивная демонстрация бронирования','Interactive booking demo','Interaktiv bron demosi']
];
const X=[['сегодня в','today at','bugun soat'],[' сум',' UZS',' so‘m'],[' мин',' min',' daq'],['Стол на','Table for','Stol:'],['стол на','table for','stol:'],['Вы записаны:','You are booked:','Siz yozildingiz:'],['Напомним за 2 часа.','We’ll remind you 2 hours before.','2 soat oldin eslatamiz.']];
const D={en:{},uz:{}},FB={en:[],uz:[]};
R.forEach(r=>{D.en[r[0]]=r[1];D.uz[r[0]]=r[2]});
R.filter(r=>r[0].length<=30).concat(X).forEach(r=>{FB.en.push([r[0],r[1]]);FB.uz.push([r[0],r[2]])});
['en','uz'].forEach(l=>FB[l].sort((a,b)=>b[0].length-a[0].length));
const CY=/[А-Яа-яЁё]/;let lang='ru';
function tr(s){if(lang==='ru')return s;const k=s.trim();if(D[lang][k])return D[lang][k];if(!CY.test(k))return k;let o=k;FB[lang].forEach(p=>{o=o.split(p[0]).join(p[1])});return o}
function setNode(n,b){n.__o=b;const nv=lang==='ru'?b:b.replace(b.trim(),tr(b));n.__t=nv;if(n.nodeValue!==nv)n.nodeValue=nv}
function fix(n){if(n.__t!==n.nodeValue&&CY.test(n.nodeValue))setNode(n,n.nodeValue)}
function walk(root,full){const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while((n=w.nextNode())){const p=n.parentNode.nodeName;if(p==='SCRIPT'||p==='STYLE')continue;if(full&&n.__o!==undefined)setNode(n,n.__o);else fix(n)}}
function attrs(){document.querySelectorAll('[aria-label],meta[name=description],meta[property^="og:"],title').forEach(e=>{const a=e.tagName==='META'?'content':e.tagName==='TITLE'?null:'aria-label';if(a===null){if(e.__o===undefined)e.__o=e.textContent;e.textContent=lang==='ru'?e.__o:tr(e.__o);return}const v=e.getAttribute(a);if(!v||v==='Language')return;if(e.__o===undefined)e.__o=v;e.setAttribute(a,lang==='ru'?e.__o:tr(e.__o))})}
function set(l,save){lang=l;document.documentElement.lang=l;walk(document.body,true);attrs();const s=document.getElementById('lg');if(s)s.value=l;if(save){try{localStorage.setItem('lang',l)}catch(e){}}}
new MutationObserver(ms=>ms.forEach(m=>{if(m.type==='characterData')fix(m.target);else m.addedNodes.forEach(a=>{if(a.nodeType===3)fix(a);else if(a.nodeType===1)walk(a,false)})})).observe(document.body,{childList:true,subtree:true,characterData:true});
let l0='ru';try{l0=localStorage.getItem('lang')||''}catch(e){}
if(!D[l0]&&l0!=='ru'){const n=(navigator.language||'ru').slice(0,2);l0=n==='uz'?'uz':n==='en'?'en':'ru'}
document.getElementById('lg').addEventListener('change',e=>set(e.target.value,true));
set(l0,false);
})();
