(() => {
  const DATA = [
    ['TGPU Legacy','Warisan Tok Guru Pulau Ubi, keluarga, pendidikan dan misi komuniti.','../','Legacy','legacy tok guru pulau ubi keluarga family sejarah history komuniti community tgpu'],
    ['TGPU Academy','Payung pendidikan untuk Quran, Arabic, Islamic Learning dan Learning Hub.','../academy/','Academy','academy akademi pendidikan education belajar learning kelas class quran arabic islamic'],
    ['TGPU Quran','Bacaan, Tajwid, Qiraat, kisah, makanan dalam Al-Quran, Ayat al-Ahkam, bahasa Quran dan Huffaz.','../academy/quran/','Quran','quran al-quran tajwid iqra tilawah bacaan reading hafazan huffaz hafiz qiraat riwayat hafs warsh qalun nabi kisah makanan food ayat ahkam hukum bahasa arabic corpus tadabbur'],
    ['Qiraat & Riwayat','Pengenalan Qiraat, riwayat dan sumber pembelajaran berautoriti.','../academy/quran/#qiraat','Quran','qiraat qiraah riwayah riwayat hafs warsh qalun bacaan sanad tajwid'],
    ['Kisah & Nabi dalam Al-Quran','Kisah Nabi Yusuf, Musa, Ibrahim, Maryam, Isa dan pelajaran daripada Al-Quran.','../academy/quran/#stories','Quran','nabi prophet stories kisah yusuf musa ibrahim maryam isa ayyub quran'],
    ['Makanan & Minuman dalam Al-Quran','Makanan dan minuman yang disebut dalam Al-Quran dengan rujukan berhati-hati.','../academy/quran/#foods','Quran','makanan food minuman drink quran madu honey kurma dates susu milk zaitun olive'],
    ['Ayat al-Ahkam','Ayat berkaitan ibadah, keluarga, muamalat, makanan, faraid dan keadilan.','../academy/quran/#ahkam','Quran','ayat ahkam hukum fiqh ibadah keluarga faraid muamalat halal haram justice'],
    ['Ruang Huffaz','Idea hafazan dan murajaah untuk menjaga hafalan Al-Quran.','../academy/quran/#huffaz','Quran','huffaz hafiz hafazan memorisation memorization murajaah revision'],
    ['TGPU Arabic','Pembelajaran bahasa Arab secara berperingkat untuk bukan penutur asli.','../academy/arabic/','Academy','arabic bahasa arab learning nahu sarf vocabulary kosa kata grammar beginner'],
    ['TGPU Islamic Learning','Asas Islam: Rukun Iman, Rukun Islam, wuduk, solat, puasa, zakat dan adab.','../academy/islamic-learning/','Islamic Learning','islam muslim asas basic rukun iman rukun islam wuduk wudhu solat prayer salah puasa fasting ramadan zakat adab fiqh'],
    ['Wuduk','Panduan asas bersuci dan rukun wuduk dalam konteks mazhab al-Syafi‘i di Malaysia.','../academy/islamic-learning/#wuduk','Islamic Learning','wuduk wudhu ablution taharah bersuci syafie shafii niat muka tangan siku kepala kaki'],
    ['Cara Solat','Struktur asas solat fardu, rukun dan rujukan pembelajaran Malaysia.','../academy/islamic-learning/#solat','Islamic Learning','solat salah prayer cara solat beginner takbir fatihah rukuk sujud tasyahhud salam subuh zohor asar maghrib isyak'],
    ['Puasa Ramadan','Asas puasa, niat, waktu dan situasi yang memerlukan rujukan hukum lanjut.','../academy/islamic-learning/#puasa','Islamic Learning','puasa fasting ramadan niat imsak iftar qada fidyah sakit musafir'],
    ['Zakat','Pengenalan zakat fitrah dan zakat harta serta rujukan institusi negeri.','../academy/islamic-learning/#zakat','Islamic Learning','zakat fitrah harta nisab haul kadar negeri malaysia'],
    ['TGPU Learning Hub','Pusat sumber percuma untuk belajar, kehidupan, kerjaya, budaya, Islam dan Malaysia.','../academy/learning-hub/','Learning Hub','learning hub belajar free percuma malaysia education sumber resources verified'],
    ['Rujukan Fatwa Malaysia','JAKIM e-SMAF dan pautan jabatan mufti negeri untuk semakan fatwa.','../academy/learning-hub/fatwa-malaysia.html','Learning Hub','fatwa jakim mufti e-smaf hukum agama malaysia'],
    ['Sekolah & Biasiswa','Perancangan sekolah, pengajian dan rujukan biasiswa untuk pelajar.','../academy/learning-hub/school-scholarship-planner.html','Learning Hub','school sekolah scholarship biasiswa university universiti student pelajar education planner tajaan'],
    ['Perpustakaan Pelajar & Ilmu','u-Pustaka, OpenStax, OpenLearn, Project Gutenberg dan sumber ilmu terbuka.','../academy/learning-hub/student-library-knowledge.html','Learning Hub','library perpustakaan books buku upustaka openstax openlearn gutenberg student knowledge ilmu'],
    ['Bahasa Malaysia Bersama','Sumber pertukaran dan pembelajaran Bahasa Melayu, Mandarin dan Tamil.','../academy/learning-hub/malaysia-language-exchange.html','Learning Hub','language bahasa melayu malay mandarin chinese tamil exchange prpm dictionary kamus'],
    ['Kerja & Kerjaya Malaysia','Portal kerjaya dan pekerjaan seperti MYFutureJobs, SPA9 dan PERKESO.','../academy/learning-hub/malaysia-jobs-career.html','Learning Hub','job jobs kerja career kerjaya vacancy jawatan myfuturejobs spa9 perkeso malaysia'],
    ['Bisnes, SME & Jual Online','SSM, SME Corp, MDEC, TEKUN, TikTok Shop, Shopee, Lazada dan MATRADE.','../academy/learning-hub/malaysia-business-sme-digital.html','Learning Hub','business bisnes sme pks pmks ssm usahawan entrepreneur mdec tekun matrade tiktok shop shopee lazada ecommerce jual online export eksport'],
    ['Malaysia Essentials','Bantuan, kesihatan, PTPTN, KWSP dan perkhidmatan penting Malaysia.','../academy/learning-hub/malaysia-essentials.html','Learning Hub','malaysia essentials bantuan aid kesihatan health ptptn kwsp epf mysejahtera government kerajaan'],
    ['Explore Masjid Malaysia','Cari masjid melalui SISMIM, e-Solat dan sumber rasmi serta panduan adab lawatan.','../academy/learning-hub/explore-masjid-malaysia.html','Learning Hub','masjid mosque surau sismim e-solat jakim prayer solat malaysia travel visit'],
    ['Live Haramain & Gulf','Saluran rasmi Haramain, Nusuk, SPA, WAM dan maklumat Saudi/Gulf.','../academy/learning-hub/live-haramain-gulf-info.html','Learning Hub','haramain makkah mecca madinah medina live saudi gulf nusuk spa wam hajj umrah'],
    ['Warisan Malaysia Mengikut Negeri','Makanan, pakaian, sukan dan identiti negeri-negeri Malaysia.','../academy/learning-hub/malaysia-heritage-by-state.html','Learning Hub','heritage warisan malaysia negeri state budaya culture traditional food pakaian sukan'],
    ['Cerita Malaysia Zaman Dulu','P. Ramlee, arkib, filem dan memori budaya Malaysia.','../academy/learning-hub/malaysia-classic-stories.html','Learning Hub','cerita malaysia classic stories p ramlee arkib archive filem film nostalgia'],
    ['Cuti-Cuti Malaysia','Destinasi dan rujukan pelancongan mengikut negeri.','../academy/learning-hub/malaysia-holiday-by-state.html','Learning Hub','cuti holiday travel tourism malaysia negeri destination'],
    ['Kalendar Cuti & Sekolah Malaysia','Rujukan cuti awam dan cuti sekolah Malaysia.','../academy/learning-hub/malaysia-holidays-school-calendar.html','Learning Hub','calendar kalendar cuti sekolah school holiday public holiday malaysia raya ramadan'],
    ['Kafe & Tempat Popular Malaysia','Panduan kawasan, kafe dan tempat popular untuk diteroka.','../academy/learning-hub/malaysia-cafes-popular-places.html','Learning Hub','cafe cafes kafe popular places tempat viral malaysia travel makan'],
    ['Makanan, Sumber & Herba Malaysia','Sumber tempatan, sawit, makanan dan herba dengan pendekatan berhati-hati.','../academy/learning-hub/malaysia-food-resources-herbs.html','Learning Hub','food makanan herbs herba palm oil sawit resources malaysia traditional'],
    ['Ulama & Sasterawan Malaysia','Tokoh ilmu, agama, bahasa dan sastera Malaysia.','../academy/learning-hub/ulama-sasterawan-malaysia.html','Learning Hub','ulama scholar sasterawan writer malaysia tokoh literature bahasa agama'],
    ['Nasyid Interaktif','Sumber nasyid dan aktiviti bahasa serta nilai.','../academy/learning-hub/interactive-nasyid.html','Learning Hub','nasyid nasheed music islamic song lagu interactive bahasa values'],
    ['Islamic Education Class (IEC)','Kolaborasi pendidikan Islam TGPU Academy dengan Islamic Education Class.','../academy/learning-hub/interactive-islamic-education-europe.html','Collaboration','iec islamic education class europe eropah children adult tadabbur collaboration kelas islam'],
    ['Akademi Lancar','Kolaborasi komuniti pembelajaran Al-Quran secara online, percuma dan berperingkat.','../academy/#akademi-lancar','Collaboration','akademi lancar quran tajwid iqra zoom online free percuma 30 juzuk 1 juz 1 minggu kak sal salwana'],
    ['Feature Your Class with TGPU','Borang kolaborasi untuk kelas Quran, Tajwid, Iqra, Hafazan, Arabic atau pendidikan Islam.','../academy/collaboration.html','Collaboration','collaboration kolaborasi feature class kelas quran tajwid iqra hafazan arabic islamic teacher academy'],
    ['Kelas TGPU','Maklumat kelas, yuran dan pendaftaran TGPU.','../classes.html','Classes','kelas class tuition yuran fee pricing registration daftar quran tajwid online'],
    ['Support TGPU','Sokongan kepada misi TGPU dan Surau Tok Guru Pulau Ubi serta borang cadangan.','../support/','Support','support sokong donation sumbangan duitnow qr maybank surau tok guru pulau ubi suggestion cadangan'],
    ['TGPU Naturals','Inisiatif produk kesejahteraan semula jadi keluarga TGPU.','../wellness/','Wellness','tgpu naturals wellness natural family product produk kunyit moringa tongkat ali sacha inchi'],
    ['TGPU Gulf Advisory & Trade','Malaysia ↔ Saudi/GCC market entry, sourcing, trade facilitation dan business development.','../gulf/','Gulf','gulf gcc saudi uae middle east malaysia market entry trade advisory sourcing business tgpu gulf'],
    ['Sarong Music Run 2026 · Living Heritage','Refleksi tentang Sarong Music Run 2026 dan warisan hidup Malaysia.','../academy/learning-hub/sarong-music-run-2026-living-heritage.html','Learning Hub','sarong music run 2026 heritage warisan malaysia budaya family event']
  ].map(([title,description,url,category,keywords]) => ({title,description,url,category,keywords}));

  const params = new URLSearchParams(location.search);
  const qParam = params.get('q') || '';
  const langValue = (params.get('lang') || navigator.language || 'ms').toLowerCase();
  const lang = langValue.startsWith('ar') ? 'ar' : langValue.startsWith('en') ? 'en' : 'ms';
  const copy = {
    ms:{button:'Cari',start:'Mula mencari',prompt:'Taip satu perkataan atau topik untuk mencari kandungan TGPU.',found:n=>`${n} hasil ditemui`,none:'Tiada hasil yang tepat ditemui.',all:'Semua'},
    en:{button:'Search',start:'Start searching',prompt:'Type a word or topic to search TGPU.',found:n=>`${n} result${n===1?'':'s'} found`,none:'No exact result was found.',all:'All'},
    ar:{button:'بحث',start:'ابدأ البحث',prompt:'اكتب كلمة أو موضوعاً للبحث في TGPU.',found:n=>`تم العثور على ${n} نتيجة`,none:'لم يتم العثور على نتيجة مطابقة.',all:'الكل'}
  }[lang];
  if (lang === 'ar') { document.documentElement.lang='ar'; document.documentElement.dir='rtl'; }
  else document.documentElement.lang = lang;

  const input=document.getElementById('site-search');
  const form=document.getElementById('search-form');
  const results=document.getElementById('results');
  const title=document.getElementById('result-title');
  const status=document.getElementById('result-status');
  const start=document.getElementById('start-here');
  const filters=document.getElementById('filters');
  form.querySelector('button').textContent=copy.button;
  let active='All';

  ['All',...new Set(DATA.map(x=>x.category))].forEach(cat=>{
    const b=document.createElement('button'); b.type='button'; b.className='filter'+(cat==='All'?' active':'');
    b.textContent=cat==='All'?copy.all:cat; b.dataset.category=cat;
    b.addEventListener('click',()=>{active=cat;filters.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));run(input.value)});
    filters.appendChild(b);
  });

  const norm=s=>(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’‘]/g,"'");
  function score(item,q){const phrase=norm(q),tokens=phrase.split(/\s+/).filter(Boolean),t=norm(item.title),d=norm(item.description),k=norm(item.keywords),c=norm(item.category);let s=0;if(t.includes(phrase))s+=30;if(k.includes(phrase))s+=18;if(d.includes(phrase))s+=12;tokens.forEach(token=>{if(t.includes(token))s+=10;if(k.includes(token))s+=6;if(d.includes(token))s+=4;if(c.includes(token))s+=2});return s}
  function run(raw){
    const q=raw.trim(); results.innerHTML='';
    if(!q){title.textContent=copy.start;status.textContent=copy.prompt;start.hidden=false;history.replaceState(null,'',location.pathname+(lang!=='ms'?`?lang=${lang}`:''));return}
    start.hidden=true;
    const matches=DATA.map(item=>({...item,score:score(item,q)})).filter(x=>x.score>0&&(active==='All'||x.category===active)).sort((a,b)=>b.score-a.score||a.title.localeCompare(b.title)).slice(0,30);
    title.textContent=q; status.textContent=matches.length?copy.found(matches.length):copy.none;
    if(!matches.length){const box=document.createElement('div');box.className='empty';box.innerHTML=`<strong>${copy.none}</strong><div class="suggestions"></div>`;['solat','qiraat','masjid','biasiswa','kerja','SME','fatwa'].forEach(x=>{const b=document.createElement('button');b.type='button';b.textContent=x;b.onclick=()=>{input.value=x;run(x)};box.querySelector('.suggestions').appendChild(b)});results.appendChild(box)}
    else matches.forEach(item=>{const a=document.createElement('a');a.className='result';a.href=item.url;const text=document.createElement('div'),cat=document.createElement('span'),h=document.createElement('h3'),p=document.createElement('p'),arrow=document.createElement('span');cat.className='result-category';cat.textContent=item.category;h.textContent=item.title;p.textContent=item.description;arrow.className='arrow';arrow.textContent='→';text.append(cat,h,p);a.append(text,arrow);results.appendChild(a)});
    const u=new URL(location.href);u.searchParams.set('q',q);if(lang!=='ms')u.searchParams.set('lang',lang);history.replaceState(null,'',u.pathname+u.search);
  }
  form.addEventListener('submit',e=>{e.preventDefault();run(input.value)});
  input.addEventListener('input',()=>{if(input.value.trim().length>=2||!input.value.trim())run(input.value)});
  if(qParam){input.value=qParam;run(qParam)} else {title.textContent=copy.start;status.textContent=copy.prompt}
})();