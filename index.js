import{a as L,S as x,i as h}from"./assets/vendor-mdVVRe9K.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const g=s=>s.map(({webformatURL:t,largeImageURL:i,tags:o,likes:e,views:r,comments:a,downloads:b})=>`
        <li class="card">
        
        <a href="${i}">
        <img src="${t}" class="image" height="152px" width="360px" alt="${o}" />
        </a>
        
        <div class="card-description-wrapper">
        <div class="card-description-item"> 
                <p class="card-description-title">Likes </p>
                <p class="card-description-title-value">${e} </p>
        </div>
        <div class="card-description-item"> 
                <p class="card-description-title">Views </p>
                <p class="card-description-title-value">${r} </p>
        </div>
        <div class="card-description-item"> 
                <p class="card-description-title">Comments </p>
                <p class="card-description-title-value">${a} </p>
        </div>
        <div class="card-description-item"> 
                <p class="card-description-title">Downloads</p>
                <p class="card-description-title-value">${b} </p>
        </div>
        </div>
        </li>
        `),S="46982769-551c832606b75e5005f83cf77",C="https://pixabay.com/api/",y=async(s,t,i)=>{const o=new URLSearchParams({key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:i});return await L.get(`${C}?${o}`).then(e=>e.data)},f=document.querySelector(".form"),n=document.querySelector("ul.gallery"),p=()=>document.querySelector("span").classList.toggle("loader");let d="";const l=document.querySelector(".show-more"),m=15;let c,u,v;const w=new x(".gallery a",{caption:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),I=()=>h.show({message:"Input is empty!",position:"topRight",icon:"ico-warning",backgroundColor:"orangered",messageSize:"16",messageColor:"#fff",theme:"dark",maxWidth:"432px"}),E=()=>h.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageSize:"16",messageColor:"#fff",theme:"dark",maxWidth:"350px",icon:"ico-error"}),P=()=>h.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageSize:"16",messageColor:"#fff",theme:"dark",maxWidth:"350px",backgroundColor:"#4e75ff"}),$=async s=>{if(s.preventDefault(),c=1,u=m,l.classList.add("hidden"),d=f.elements.searchText.value.trim(),!d)return I();n.innerHTML="",p();try{const t=await y(d,m,c);if(!t.hits.length)return E();n.insertAdjacentHTML("beforeend",g(t.hits).join("")),w.refresh(),t.totalHits>=u&&l.classList.remove("hidden")}catch(t){console.error("Error handling form submission:",t)}finally{p(),f.reset()}},z=async()=>{v=n.childElementCount,c++,u=m*c,p(),l.classList.add("hidden");try{const s=await y(d,m,c);n.insertAdjacentHTML("beforeend",g(s.hits).join("")),w.refresh(),k(),s.totalHits>u?l.classList.remove("hidden"):P()}catch(s){console.log(s)}finally{p()}},k=()=>{n.children[v].scrollIntoView({behavior:"smooth",block:"start"})};f.addEventListener("submit",$);l.addEventListener("click",z);
//# sourceMappingURL=index.js.map
