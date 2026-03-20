// BLOG — scripts

'use strict';

/* DATA */
const ARTS=[
{id:1,title:"Les meilleurs smartphones de 2026 au Maroc",cat:"Smartphones",date:"15 Jan 2026",rt:"5 min",views:1240,
img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
exc:"Découvrez notre sélection des meilleurs smartphones disponibles au Maroc avec un excellent rapport qualité-prix. De Samsung à Xiaomi, on vous guide dans votre choix.",
tags:["Smartphones","Samsung","Xiaomi","Tech"],
body:`<p>Le marché des smartphones au Maroc évolue rapidement. En 2026, plusieurs modèles se distinguent par leurs performances, leur autonomie et leur rapport qualité-prix exceptionnel.</p>
<h3>🏆 Les modèles incontournables</h3>
<p>Cette année, les grandes marques proposent des appareils toujours plus performants à des prix accessibles.</p>
<ul>
  <li><strong>Samsung Galaxy A55</strong> — Écran AMOLED 120Hz, excellent appareil photo</li>
  <li><strong>Xiaomi Redmi Note 14 Pro</strong> — Meilleur rapport qualité-prix du marché</li>
  <li><strong>iPhone 15</strong> — Pour ceux qui veulent le meilleur de l'écosystème Apple</li>
  <li><strong>Realme 13 Pro</strong> — Charge rapide 100W, autonomie exceptionnelle</li>
</ul>
<div class="hl">💡 Notre conseil : Pour un budget entre 1500 et 2500 DH, le Xiaomi Redmi Note 14 Pro offre le meilleur équilibre performance/prix.</div>
<h3>📱 Comment bien choisir ?</h3>
<p>Avant d'acheter, posez-vous les bonnes questions : usage quotidien ou gaming intensif ? Qualité photo prioritaire ou autonomie ? Consultez notre équipe sur WhatsApp pour des conseils personnalisés selon votre budget.</p>`},

{id:2,title:"Guide complet : choisir son laptop en 2026",cat:"Informatique",date:"20 Jan 2026",rt:"7 min",views:980,
img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
exc:"Processeur, RAM, stockage... Tous nos conseils pour choisir le laptop parfait selon vos besoins et votre budget. Guide complet pour étudiants et professionnels.",
tags:["Laptop","PC","Guide","Informatique"],
body:`<p>Choisir un laptop peut être complexe face aux centaines de modèles disponibles. Voici notre guide complet pour vous aider à faire le bon choix en 2026.</p>
<h3>💻 Les critères essentiels</h3>
<ul>
  <li><strong>Processeur</strong> — Intel Core i5/i7 ou AMD Ryzen 5/7 pour de bonnes performances</li>
  <li><strong>RAM</strong> — 8 Go minimum, 16 Go recommandé pour le multitâche</li>
  <li><strong>Stockage</strong> — SSD 512 Go minimum pour une rapidité optimale</li>
  <li><strong>Écran</strong> — Full HD (1920x1080) au minimum, panneau IPS pour les couleurs</li>
  <li><strong>Autonomie</strong> — 8h+ pour une utilisation mobile confortable</li>
</ul>
<div class="hl">📚 Étudiant : Budget 3000-5000 DH — Lenovo IdeaPad ou Asus VivoBook offrent un excellent rapport qualité-prix.</div>
<h3>🛒 Où acheter au Maroc ?</h3>
<p>KLIKO Store propose une sélection de laptops reconditionnés et neufs aux meilleurs prix. Livraison sous 48h partout au Maroc avec garantie constructeur incluse.</p>`},

{id:3,title:"Tendances mode hiver 2026 au Maroc",cat:"Mode",date:"10 Jan 2026",rt:"4 min",views:756,
img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
exc:"Découvrez les tendances mode incontournables de cet hiver : couleurs, matières et styles à adopter. Des looks adaptés au climat marocain.",
tags:["Mode","Hiver","Tendances","Style"],
body:`<p>L'hiver 2026 apporte avec lui des tendances mode adaptées au style de vie marocain. Entre élégance et confort, voici ce qui fait fureur cette saison.</p>
<h3>🎨 Les couleurs de la saison</h3>
<ul>
  <li>Le <strong>camel</strong> — intemporel et élégant</li>
  <li>Le <strong>bordeaux</strong> — chaleureux et sophistiqué</li>
  <li>Le <strong>kaki</strong> — casual et polyvalent</li>
  <li>Le <strong>noir</strong> — toujours classique</li>
</ul>
<div class="hl">✨ Tendance forte : Le layering (superposition de vêtements) est incontournable pour affronter les hivers de Fès ou Ifrane.</div>
<h3>👗 Les pièces essentielles</h3>
<p>Manteau oversize, pull en laine mérinos, sneakers chunky et sac tote bag grand format — ces pièces constitueront la base d'une garde-robe hiver réussie. Retrouvez toutes ces pièces dans notre collection Mode sur KLIKO Store.</p>`},

{id:4,title:"Électroménager intelligent : innovations 2026",cat:"Maison",date:"5 Jan 2026",rt:"6 min",views:612,
img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
exc:"Les dernières innovations en matière d'électroménager pour rendre votre maison plus intelligente et économe. Aspirateurs robots, frigos connectés et bien plus.",
tags:["Maison","Smart Home","Électroménager"],
body:`<p>La maison connectée n'est plus un luxe — elle devient accessible au plus grand nombre. Voici les innovations qui transforment nos foyers en 2026.</p>
<h3>🤖 L'aspirateur robot</h3>
<p>Les aspirateurs robots de nouvelle génération cartographient votre logement, évitent les obstacles et se rechargent automatiquement. Disponibles à partir de 2500 DH.</p>
<div class="hl">💰 Bon plan : Un aspirateur robot vous fait économiser en moyenne 3h de ménage par semaine !</div>
<h3>❄️ Les réfrigérateurs connectés</h3>
<p>Les nouveaux frigos intelligents détectent les aliments périmés et vous alertent quand le stock est bas.</p>
<h3>🌡️ La climatisation intelligente</h3>
<p>Les climatiseurs inverter nouvelle génération réduisent la consommation d'énergie de 40% par rapport aux modèles classiques. Contrôle depuis votre smartphone, programmation horaire et mode eco automatique.</p>`},

{id:5,title:"Setup gaming parfait : guide complet 2026",cat:"Gaming",date:"22 Jan 2026",rt:"8 min",views:1480,
img:"https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&q=80",
exc:"Comment créer le setup gaming parfait ? Nos recommandations pour PC, périphériques et accessoires. Du budget serré au setup ultime.",
tags:["Gaming","PC","Setup","Accessoires"],
body:`<p>Créer un setup gaming performant au Maroc est tout à fait possible, même avec un budget limité. Voici notre guide complet pour 2026.</p>
<h3>🖥️ L'écran — priorité absolue</h3>
<p>Pour le gaming, privilégiez un taux de rafraîchissement élevé (144Hz minimum) et un temps de réponse faible (1ms). Les écrans IPS offrent les meilleures couleurs.</p>
<h3>🖱️ Les périphériques essentiels</h3>
<ul>
  <li><strong>Souris</strong> — Logitech G502 ou Razer DeathAdder pour la précision</li>
  <li><strong>Clavier mécanique</strong> — Switches Red pour le gaming rapide</li>
  <li><strong>Casque</strong> — Bon micro et son surround 7.1 virtuel</li>
  <li><strong>Tapis grand format</strong> — Pour les mouvements amples</li>
</ul>
<div class="hl">🎮 Budget recommandé : 5000–8000 DH pour un setup complet et performant. KLIKO Store propose tous ces accessoires avec livraison rapide.</div>`},

{id:6,title:"Comment bien choisir ses bijoux ? Conseils experts",cat:"Bijoux",date:"18 Jan 2026",rt:"5 min",views:534,
img:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
exc:"Conseils d'experts pour choisir des bijoux de qualité qui dureront toute une vie. Argent, or, acier... tout ce que vous devez savoir avant d'acheter.",
tags:["Bijoux","Accessoires","Argent","Or"],
body:`<p>Choisir des bijoux de qualité nécessite de connaître quelques bases. Voici tout ce que vous devez savoir pour faire les bons choix.</p>
<h3>💎 Les matériaux</h3>
<ul>
  <li><strong>Or 18 carats</strong> — Le meilleur pour une durabilité maximale</li>
  <li><strong>Argent 925</strong> — Belle brillance, prix accessible</li>
  <li><strong>Acier inoxydable</strong> — Résistant, anti-allergie, idéal au quotidien</li>
  <li><strong>Plaqué or</strong> — Économique mais nécessite un entretien régulier</li>
</ul>
<div class="hl">⚠️ Si vous avez une peau sensible, privilégiez l'acier chirurgical ou l'or pur pour éviter les réactions cutanées.</div>
<h3>🔍 Comment reconnaître la qualité ?</h3>
<p>Vérifiez toujours le poinçon (marque légale), le poids et les finitions. Rangez vos bijoux séparément pour éviter les rayures. Éloignez-les de l'eau de mer et des produits chimiques.</p>`}
];

const CATS=['Tous','Smartphones','Informatique','Mode','Maison','Gaming','Bijoux'];
const PER=6;
let selCat='Tous', srchTxt='', curPg=1;

function getFiltered(){
  return ARTS.filter(a=>{
    const mc=selCat==='Tous'||a.cat===selCat;
    const ms=!srchTxt||a.title.toLowerCase().includes(srchTxt.toLowerCase())||
             a.tags.some(t=>t.toLowerCase().includes(srchTxt.toLowerCase()));
    return mc&&ms;
  });
}

function renderCatBar(){
  document.getElementById('catBar').innerHTML=CATS.map(c=>
    `<button class="cat-tab${c===selCat?' on':''}" onclick="setCat('${c}')">${c}</button>`
  ).join('');
}

function renderSidebar(){
  document.getElementById('sbCats').innerHTML=CATS.map(c=>{
    const n=c==='Tous'?ARTS.length:ARTS.filter(a=>a.cat===c).length;
    return`<button class="sb-cat${c===selCat?' on':''}" onclick="setCat('${c}')">${c}<span class="sb-num">${n}</span></button>`;
  }).join('');
  const pop=[...ARTS].sort((a,b)=>b.views-a.views).slice(0,4);
  document.getElementById('sbPop').innerHTML=pop.map(a=>`
    <div class="pop-item" onclick="openArt(${a.id})">
      <img class="pop-img" src="${a.img}" alt="" onerror="this.src='https://via.placeholder.com/62x62/ff8716/fff?text=K'">
      <div class="pop-info">
        <div class="pop-ttl">${a.title}</div>
        <div class="pop-meta"><i class="fas fa-clock" style="color:var(--pr);font-size:10px;margin-right:4px"></i>${a.date} · ${a.rt}</div>
      </div>
    </div>`).join('');
  const tags=[...new Set(ARTS.flatMap(a=>a.tags))];
  document.getElementById('sbTags').innerHTML=tags.map(t=>`<button class="tg" onclick="setTag('${t}')">${t}</button>`).join('');
}

function renderGrid(){
  const f=getFiltered();
  document.getElementById('secTitle').textContent=
    selCat!=='Tous'?selCat:srchTxt?`"${srchTxt}"`:'Tous les articles';
  document.getElementById('secCount').textContent=
    `${f.length} article${f.length!==1?'s':''}`;
  const pg=f.slice((curPg-1)*PER, curPg*PER);
  const grid=document.getElementById('artGrid');
  if(!pg.length){
    grid.innerHTML=`<div class="no-res"><i class="fas fa-face-frown-open"></i><h3>Aucun article trouvé</h3><p>Essayez un autre mot-clé ou une autre catégorie.</p></div>`;
    document.getElementById('pages').innerHTML='';return;
  }
  grid.innerHTML=pg.map((a,i)=>{
    const feat=i===0&&curPg===1&&selCat==='Tous'&&!srchTxt;
    return`<article class="acard${feat?' feat':''}" onclick="openArt(${a.id})">
      <div class="a-thumb">
        <img src="${a.img}" alt="${a.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/800x400/ff8716/fff?text=KLIKO'">
        <span class="a-cat">${a.cat}</span>
        <span class="a-date">${a.date}</span>
      </div>
      <div class="a-body">
        <h2 class="a-title">${a.title}</h2>
        <p class="a-excerpt">${a.exc}</p>
        <div class="a-foot">
          <div class="a-meta">
            <span><i class="fas fa-clock"></i>${a.rt}</span>
            <span><i class="fas fa-eye"></i>${a.views.toLocaleString()}</span>
          </div>
          <span class="a-read">Lire <i class="fas fa-arrow-right"></i></span>
        </div>
      </div>
    </article>`;
  }).join('');
  renderPages(f.length);
}

function renderPages(total){
  const p=Math.ceil(total/PER);
  if(p<=1){document.getElementById('pages').innerHTML='';return;}
  let h='';
  if(curPg>1)h+=`<button class="pgb" onclick="goPage(${curPg-1})"><i class="fas fa-chevron-left"></i></button>`;
  for(let i=1;i<=p;i++){
    if(i===1||i===p||Math.abs(i-curPg)<=1)
      h+=`<button class="pgb${i===curPg?' on':''}" onclick="goPage(${i})">${i}</button>`;
    else if(Math.abs(i-curPg)===2)h+=`<span class="pgb dots">…</span>`;
  }
  if(curPg<p)h+=`<button class="pgb" onclick="goPage(${curPg+1})"><i class="fas fa-chevron-right"></i></button>`;
  document.getElementById('pages').innerHTML=h;
}

function setCat(c){
  selCat=c;curPg=1;
  renderCatBar();renderSidebar();renderGrid();
  window.scrollTo({top:document.querySelector('.blog-section').offsetTop-140,behavior:'smooth'});
}
function doSearch(){
  srchTxt=document.getElementById('heroSrch').value.trim();
  selCat='Tous';curPg=1;
  renderCatBar();renderSidebar();renderGrid();
}
function setTag(t){
  document.getElementById('heroSrch').value=t;
  srchTxt=t;selCat='Tous';curPg=1;
  renderCatBar();renderGrid();
  window.scrollTo({top:document.querySelector('.blog-section').offsetTop-140,behavior:'smooth'});
}
function goPage(p){curPg=p;renderGrid();window.scrollTo({top:0,behavior:'smooth'});}
function nlSub(e){e.preventDefault();alert('✅ Merci ! Vous êtes bien abonné à notre newsletter.');e.target.reset();}
function toggleMob(){document.getElementById('mobMenu').classList.toggle('open');}

function openArt(id){
  const a=ARTS.find(x=>x.id===id);if(!a)return;
  document.getElementById('mCover').src=a.img;
  document.getElementById('mCover').alt=a.title;
  document.getElementById('mBody').innerHTML=`
    <div class="m-meta">
      <span class="m-cat-badge">${a.cat}</span>
      <span class="m-info"><i class="fas fa-calendar"></i>${a.date}</span>
      <span class="m-info"><i class="fas fa-clock"></i>${a.rt} de lecture</span>
      <span class="m-info"><i class="fas fa-eye"></i>${a.views.toLocaleString()} vues</span>
    </div>
    <h1 class="m-title">${a.title}</h1>
    <div class="m-text">${a.body}</div>
    <div class="m-tags"><strong>Tags :</strong>${a.tags.map(t=>`<span class="m-tag">${t}</span>`).join('')}</div>
    <div class="m-share">
      <strong>Partager :</strong>
      <button class="sh sh-wa" onclick="share('wa',${a.id})" title="WhatsApp"><i class="fab fa-whatsapp"></i></button>
      <button class="sh sh-fb" onclick="share('fb',${a.id})" title="Facebook"><i class="fab fa-facebook-f"></i></button>
      <button class="sh sh-tw" onclick="share('tw',${a.id})" title="Twitter"><i class="fab fa-twitter"></i></button>
      <button class="sh sh-cp" onclick="share('cp',${a.id})" title="Copier le lien"><i class="fas fa-link"></i></button>
    </div>`;
  document.getElementById('artModal').classList.add('on');
  document.body.style.overflow='hidden';
  a.views++;
}
function closeMod(){
  document.getElementById('artModal').classList.remove('on');
  document.body.style.overflow='';
}
function share(type,id){
  const a=ARTS.find(x=>x.id===id);
  const url=encodeURIComponent(location.href);
  const txt=encodeURIComponent(a.title+' — KLIKO Store Blog');
  if(type==='wa')window.open(`https://wa.me/?text=${txt}%20${url}`,'_blank');
  else if(type==='fb')window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`,'_blank');
  else if(type==='tw')window.open(`https://twitter.com/intent/tweet?text=${txt}&url=${url}`,'_blank');
  else navigator.clipboard.writeText(location.href).then(()=>alert('✅ Lien copié !'));
}

window.addEventListener('scroll',()=>{
  document.getElementById('siteHeader').classList.toggle('scrolled',scrollY>5);
});

document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMod();});

document.addEventListener('DOMContentLoaded',()=>{
  renderCatBar();renderSidebar();renderGrid();
});