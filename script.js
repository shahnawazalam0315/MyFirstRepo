const products=[
{id:1,name:"Aura Ceramic Diffuser",cat:"Home",price:49,img:"https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85",tag:"BESTSELLER",desc:"A sculptural diffuser that brings calm to your everyday ritual."},
{id:2,name:"Noir Everyday Watch",cat:"Accessories",price:129,img:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85",tag:"ICON",desc:"Clean lines and considered details for every hour."},
{id:3,name:"Studio Wireless Headphones",cat:"Tech",price:159,img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",tag:"POPULAR",desc:"A refined everyday essential for your favourite sounds."},
{id:4,name:"Silk Touch Facial Set",cat:"Beauty",price:39,img:"https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85",tag:"NEW",desc:"A simple, thoughtful set for your daily skincare routine."},
{id:5,name:"Minimal Leather Tote",cat:"Fashion",price:89,img:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",tag:"LIMITED",desc:"A versatile carryall with a quietly confident silhouette."},
{id:6,name:"Cloud Knit Sweater",cat:"Fashion",price:74,img:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=85",tag:"NEW",desc:"Soft texture, easy layers, and all-day comfort."},
{id:7,name:"Sculpt Desk Lamp",cat:"Home",price:69,img:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",tag:"DESIGN PICK",desc:"A warm, sculptural light for your favourite corner."},
{id:8,name:"Daily Glow Serum",cat:"Beauty",price:32,img:"https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=900&q=85",tag:"FAVOURITE",desc:"A little everyday luxury for your skincare shelf."},
{id:9,name:"Travel Smart Case",cat:"Accessories",price:99,img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",tag:"NEW",desc:"Keep the essentials organised, wherever the day takes you."},
{id:10,name:"Pocket Power Bank",cat:"Tech",price:45,img:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=85",tag:"SMART PICK",desc:"Reliable power in a compact, travel-friendly design."},
{id:11,name:"Signature Fragrance",cat:"Beauty",price:84,img:"https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85",tag:"ICON",desc:"A memorable finishing touch, made for your everyday."},
{id:12,name:"Soft Lounge Chair",cat:"Home",price:219,img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",tag:"STATEMENT",desc:"A comfortable statement piece for slow afternoons."},
{id:13,name:"Amber Glass Vase",cat:"Home",price:58,img:"https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=900&q=85",tag:"RARE FIND",desc:"A hand-finished silhouette that catches the afternoon light."},
{id:14,name:"Linen Weekend Shirt",cat:"Fashion",price:78,img:"https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",tag:"JUST IN",desc:"Relaxed linen tailoring made for unhurried weekends."},
{id:15,name:"Arc Wireless Earbuds",cat:"Tech",price:119,img:"https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85",tag:"DESIGN PICK",desc:"Pocket-sized sound with a clean, considered finish."},
{id:16,name:"Botanical Hand Balm",cat:"Beauty",price:24,img:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",tag:"SMALL LUXURY",desc:"A nourishing daily essential with a soft botanical scent."},
{id:17,name:"Pebble Leather Card Holder",cat:"Accessories",price:52,img:"https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85",tag:"LIMITED",desc:"A slim leather companion for the cards you reach for."},
{id:18,name:"Portable Mini Speaker",cat:"Tech",price:89,img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",tag:"NEW ARRIVAL",desc:"Room-filling sound in a compact, tactile form."},
{id:19,name:"Handmade Catchall Tray",cat:"Home",price:36,img:"https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85",tag:"ARTISAN MADE",desc:"A home for small essentials, shaped by hand."},
{id:20,name:"Everyday Crossbody Bag",cat:"Fashion",price:112,img:"https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",tag:"BESTSELLER",desc:"Hands-free ease with just enough room for the day."}
];
const productPhotos={
 Jewellery:[
  "https://images.unsplash.com/photo-1623699655000-b4eb2011cef4?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1708390307563-080a5bc126bf?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1633555234540-bb6db7f1ab80?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1708390250224-5bb7d58acfde?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1698259947580-90ffe913b711?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?auto=format&fit=crop&w=900&q=85"
 ],
 Beauty:[
  "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1635868388769-b2c0cd93e52d?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1633793566102-ee7793834059?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1768881187102-ca0131989c8a?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1761864293840-cf73a186bff8?auto=format&fit=crop&w=900&q=85"
 ]
};
const newJewelleryProducts=[
 ["Slim Gold Chain Necklace",38],["Pearl Drop Earrings",42],["Textured Signet Ring",54],["Herringbone Bracelet",48],["Mini Hoop Earrings",32],
 ["Oval Pendant Necklace",46],["Stacking Band Ring",29],["Freshwater Pearl Studs",36],["Layered Chain Set",64],["Sculpted Cuff Bracelet",58],
 ["Dainty Heart Pendant",34],["Chunky Gold Hoops",44],["Beaded Gold Bracelet",39],["Twisted Rope Chain",52],["Pave Stud Earrings",31],
 ["Open Circle Necklace",41],["Dome Statement Ring",62],["Pearl Tennis Bracelet",78],["Bar Pendant Necklace",37],["Square Huggie Hoops",35],
 ["Birthstone Charm Necklace",49],["Hammered Gold Cuff",56],["Double Chain Anklet",33],["Mini Pearl Hoops",38],["Emerald Accent Ring",69],
 ["Paperclip Link Bracelet",45],["Coin Pendant Necklace",51],["Silver Knot Studs",28],["Silver Signet Ring",47],["Y Chain Necklace",43],
 ["Baguette Ear Climber",39],["Organic Shape Hoops",46],["Gold Layered Anklet",35],["Pearl Charm Bracelet",44],["Twisted Band Ring",32],
 ["Bezel Stone Pendant",59],["Sculptural Drop Earrings",53],["Fine Chain Choker",34],["Triple Stack Ring Set",48],["T-Bar Toggle Necklace",63],
 ["Small Huggie Set",42],["Black Onyx Pendant",57],["Wide Domed Cuff",72],["Tiny Star Studs",25],["Link Chain Anklet",37],
 ["Pearl Station Necklace",68],["Minimal Cuff Ring",31],["Gold Threader Earrings",29],["Sunburst Medallion",74],["Mixed Metal Bracelet",52]
];
const newBeautyProducts=[
 ["Vitamin C Brightening Serum",28],["Hyaluronic Dew Serum",26],["Gentle Cream Cleanser",19],["Daily Mineral Sunscreen SPF 50",24],["Rosewater Cleansing Balm",22],
 ["Overnight Barrier Cream",34],["Peptide Eye Gel",29],["Niacinamide Pore Serum",25],["Ceramide Moisture Cream",31],["AHA Glow Toner",23],
 ["Caffeine Eye Cream",21],["Aloe Soothing Gel",16],["Velvet Matte Lipstick - Rose",18],["Satin Lipstick - Nude",18],["Hydrating Lip Oil",17],
 ["Sheer Tinted Lip Balm",14],["Lengthening Mascara",20],["Soft Volume Mascara",21],["Precision Brow Pencil",13],["Clear Brow Gel",15],
 ["Liquid Eyeliner - Espresso",16],["Kajal Eye Pencil - Black",12],["Neutral Eyeshadow Palette",39],["Rose Bronze Palette",42],["Cream Blush - Petal",19],
 ["Powder Blush - Peach",20],["Soft Focus Setting Powder",24],["Radiant Concealer - Medium",22],["Skin Tint - Light",32],["Skin Tint - Tan",32],
 ["Dewy Setting Spray",21],["Makeup Primer - Smooth",25],["Silky Foundation Brush",18],["Detail Concealer Brush",12],["Everyday Brush Set",46],
 ["Gentle Micellar Water",17],["Daily Foaming Face Wash",18],["Enzyme Powder Exfoliant",27],["PHA Clarifying Toner",23],["Squalane Face Oil",30],
 ["Retinol Night Serum",33],["Aloe Lip Mask",15],["Shea Hand Cream",14],["Body Butter - Citrus",24],["Whipped Body Lotion - Rose",22],
 ["Hair and Body Mist - Bloom",28],["Scalp Massaging Brush",11],["Bamboo Makeup Pads Set",16],["Clay Detox Face Mask",20],["Overnight Lip Treatment",17]
];
function addCatalogProducts(items,category){
 items.forEach(([name,price],index)=>products.push({
  id:products.length+1,
  name,
  cat:category,
  price,
  img:productPhotos[category][index%productPhotos[category].length],
  tag:index%10===0?"BESTSELLER":index%4===0?"NEW":category==="Jewellery"?"JEWELLERY PICK":"BEAUTY PICK",
  desc:category==="Jewellery"?`${name} adds a refined finishing touch to your everyday edit.`:`${name} is a considered essential for your daily beauty routine.`
 }));
}
addCatalogProducts(newJewelleryProducts,"Jewellery");
addCatalogProducts(newBeautyProducts,"Beauty");
let cart=JSON.parse(localStorage.getItem("luxeora-cart")||"[]");
let wishlist=JSON.parse(localStorage.getItem("luxeora-wishlist")||"[]");
let currentCat="All", searchQuery="", sortMode="featured", toastTimer;
const money=n=>"$"+Number(n).toFixed(2);
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function card(p,index=0){
 const liked=wishlist.includes(p.id);
 return `<article class="product-card reveal" style="--card-index:${index%4}">
  <div class="product-img"><img src="${p.img}" alt="${escapeHTML(p.name)}" loading="lazy"><span class="badge">${escapeHTML(p.tag)}</span>
  <button class="wishlist ${liked?"liked":""}" aria-label="${liked?"Remove from wishlist":"Add to wishlist"}" aria-pressed="${liked}" onclick="toggleWishlist(${p.id})">${liked?"♥":"♡"}</button>
  <div class="product-actions"><button class="quick" onclick="quickView(${p.id})">QUICK VIEW <span>↗</span></button><button class="quick add-quick" onclick="addToCart(${p.id})">ADD TO BAG +</button></div></div>
  <div class="product-info"><p>${escapeHTML(p.cat)}</p><h3>${escapeHTML(p.name)}</h3><span class="price">${money(p.price)}</span></div></article>`;
}
function getFiltered(){
 const terms=searchQuery.split(/\s+/).filter(Boolean);
 let list=products.filter(p=>{
  const searchable=(p.name+" "+p.cat+" "+p.tag).toLowerCase();
  return (currentCat==="All"||p.cat===currentCat)&&terms.every(term=>searchable.includes(term));
 });
 if(sortMode==="low")list.sort((a,b)=>a.price-b.price);
 if(sortMode==="high")list.sort((a,b)=>b.price-a.price);
 if(sortMode==="az")list.sort((a,b)=>a.name.localeCompare(b.name));
 return list;
}
function render(){
 const list=getFiltered();
 document.querySelector("#products").innerHTML=list.length?list.map(card).join(""):`<div class="no-results"><span>✳</span><h3>No pieces found just yet.</h3><p>Try another search or browse all of our edits.</p><button class="btn dark" onclick="resetFilters()">View all products</button></div>`;
 document.querySelector("#resultCount").textContent=`${list.length} ${list.length===1?"curated piece":"curated pieces"}`;
 const newProducts=[...products.filter(p=>p.cat==="Jewellery").slice(-4),...products.filter(p=>p.cat==="Beauty").slice(-4)];
 document.querySelector("#newProducts").innerHTML=newProducts.map((p,i)=>card(p,i)).join("");
 observeReveals();
}
function resetFilters(){currentCat="All";searchQuery="";sortMode="featured";document.querySelector("#searchInput").value="";document.querySelector("#clearSearch").disabled=true;document.querySelector("#sortSelect").value="featured";document.querySelectorAll(".cat").forEach(b=>b.classList.toggle("active",b.dataset.cat==="All"));render();updateSearchSuggestions("")}
function addToCart(id){
 const p=products.find(x=>x.id===id);if(!p)return;
 const found=cart.find(x=>x.id===id);if(found)found.qty++;else cart.push({...p,qty:1});
 save();openCart();showToast(`${p.name} added to your bag`);
}
function save(){localStorage.setItem("luxeora-cart",JSON.stringify(cart));updateCart()}
function updateCart(){
 document.querySelector("#cartCount").textContent=cart.reduce((s,x)=>s+x.qty,0);
 document.querySelector("#cartItems").innerHTML=cart.length?cart.map(x=>`<div class="cart-row"><img src="${x.img}" alt=""><div><h4>${escapeHTML(x.name)}</h4><p>${money(x.price)} × ${x.qty}</p><div class="qty-control"><button aria-label="Decrease quantity" onclick="changeQty(${x.id},-1)">−</button><span>${x.qty}</span><button aria-label="Increase quantity" onclick="changeQty(${x.id},1)">+</button></div><button class="remove" onclick="removeItem(${x.id})">Remove</button></div></div>`).join(""):`<div class="empty"><span>♡</span><p>Your bag is waiting for something beautiful.</p><a class="text-link" href="#shop" onclick="closeCart()">Explore the collection ↗</a></div>`;
 document.querySelector("#subtotal").textContent=money(cart.reduce((s,x)=>s+x.price*x.qty,0));
}
function changeQty(id,delta){const item=cart.find(x=>x.id===id);if(!item)return;item.qty+=delta;if(item.qty<1)cart=cart.filter(x=>x.id!==id);save()}
function removeItem(id){cart=cart.filter(x=>x.id!==id);save();showToast("Item removed from your bag")}
function openCart(){document.querySelector("#cartDrawer").classList.add("show");document.querySelector("#overlay").classList.add("show");document.body.classList.add("drawer-open")}
function closeCart(){document.querySelector("#cartDrawer").classList.remove("show");document.querySelector("#overlay").classList.remove("show");document.body.classList.remove("drawer-open")}
function toggleWishlist(id){if(wishlist.includes(id)){wishlist=wishlist.filter(x=>x!==id);showToast("Removed from your wishlist")}else{wishlist.push(id);showToast("Saved to your wishlist ♥")}localStorage.setItem("luxeora-wishlist",JSON.stringify(wishlist));render()}
function quickView(id){
 const p=products.find(x=>x.id===id);if(!p)return;
 document.querySelector("#quickViewContent").innerHTML=`<div class="quick-view-grid"><div class="quick-view-image"><img src="${p.img}" alt="${escapeHTML(p.name)}"></div><div class="quick-view-copy"><p class="eyebrow">${escapeHTML(p.cat)} · ${escapeHTML(p.tag)}</p><h2>${escapeHTML(p.name)}</h2><strong class="quick-view-price">${money(p.price)}</strong><p>${escapeHTML(p.desc||"A thoughtfully selected everyday essential from LUXEORA.")}</p><div class="quick-view-perks"><span>✓ Thoughtfully selected</span><span>✓ Easy returns</span></div><button class="btn dark" onclick="addToCart(${p.id});closeQuickView()">Add to bag — ${money(p.price)}</button></div></div>`;
 document.querySelector("#quickViewOverlay").classList.add("show");document.body.classList.add("modal-open");
}
function closeQuickView(){document.querySelector("#quickViewOverlay").classList.remove("show");document.body.classList.remove("modal-open")}
function showToast(message){const el=document.querySelector("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2600)}
function updateSearchSuggestions(query){
 const panel=document.querySelector("#searchSuggestions");
 const terms=query.toLowerCase().trim().split(/\s+/).filter(Boolean);
 const matches=terms.length?products.filter(p=>{
  const searchable=(p.name+" "+p.cat+" "+p.tag).toLowerCase();
  return terms.every(term=>searchable.includes(term));
 }).slice(0,5):products.filter(p=>p.tag==="BESTSELLER"||p.tag==="ICON").slice(0,4);
 panel.innerHTML=`<p class="suggestion-heading">${terms.length?"Matching products":"Popular picks"}</p>${matches.length?matches.map(p=>`<button class="suggestion-item" type="button" role="option" data-suggestion-id="${p.id}"><span><strong>${escapeHTML(p.name)}</strong><small>${escapeHTML(p.cat)}</small></span><span class="suggestion-price">${money(p.price)}</span></button>`).join(""):`<p class="suggestion-empty">No matching products. Try another search.</p>`}`;
}
function observeReveals(){
 const items=document.querySelectorAll(".reveal:not(.visible)");
 if(!("IntersectionObserver" in window)){items.forEach(el=>el.classList.add("visible"));return}
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.08});
 items.forEach(el=>observer.observe(el));
}
document.querySelectorAll(".cat").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".cat").forEach(x=>x.classList.remove("active"));b.classList.add("active");currentCat=b.dataset.cat;render()}));
document.querySelector("#cartBtn").onclick=openCart;
document.querySelector("#closeCart").onclick=closeCart;
document.querySelector("#overlay").onclick=closeCart;
const searchRoot=document.querySelector(".header-search");
const searchInput=document.querySelector("#searchInput");
searchInput.addEventListener("focus",()=>{searchRoot.classList.add("active");updateSearchSuggestions(searchInput.value)});
searchInput.addEventListener("input",e=>{searchQuery=e.target.value.toLowerCase().trim();document.querySelector("#clearSearch").disabled=!e.target.value;render();updateSearchSuggestions(e.target.value)});
document.querySelector("#clearSearch").onclick=()=>{const input=document.querySelector("#searchInput");input.value="";input.dispatchEvent(new Event("input",{bubbles:true}));input.focus()};
document.querySelector("#searchSuggestions").addEventListener("click",e=>{const option=e.target.closest("[data-suggestion-id]");if(!option)return;const product=products.find(p=>p.id===Number(option.dataset.suggestionId));if(!product)return;searchInput.value=product.name;searchQuery=product.name.toLowerCase();document.querySelector("#clearSearch").disabled=false;searchRoot.classList.remove("active");render();document.querySelector("#shop").scrollIntoView({behavior:"smooth"})});
document.addEventListener("click",e=>{if(!searchRoot.contains(e.target))searchRoot.classList.remove("active")});
document.querySelector("#sortSelect").addEventListener("change",e=>{sortMode=e.target.value;render()});
document.querySelector("#menuBtn").onclick=()=>document.querySelector("nav").classList.toggle("open");
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector("nav").classList.remove("open")));
document.querySelector("#newsletter").onsubmit=e=>{e.preventDefault();showToast("Thanks! You're on the LUXEORA list.");e.target.reset()};
document.querySelector(".checkout").onclick=()=>showToast(cart.length?"Demo checkout: connect a payment provider to accept orders.":"Your bag is empty.");
document.querySelector("#closeQuickView").onclick=closeQuickView;
document.querySelector("#quickViewOverlay").addEventListener("click",e=>{if(e.target.id==="quickViewOverlay")closeQuickView()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCart();closeQuickView();searchRoot.classList.remove("active")}});
window.addEventListener("scroll",()=>document.querySelector(".header").classList.toggle("scrolled",window.scrollY>12),{passive:true});
render();updateCart();observeReveals();
