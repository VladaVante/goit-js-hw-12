import{a as b,S as x,i as g}from"./assets/vendor-mdVVRe9K.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const f=s=>s.map(({webformatURL:t,largeImageURL:a,tags:o,likes:e,views:r,comments:n,downloads:L})=>`
        <li class="card">
        
        <a href="${a}">
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
                <p class="card-description-title-value">${n} </p>
        </div>
        <div class="card-description-item"> 
                <p class="card-description-title">Downloads</p>
                <p class="card-description-title-value">${L} </p>
        </div>
        </div>
        </li>
        `),S="46982769-551c832606b75e5005f83cf77",C="https://pixabay.com/api/",y=async(s,t,a)=>{const o=new URLSearchParams({key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:a});return await b.get(`${C}?${o}`).then(e=>e.data)},h=document.querySelector(".form"),l=document.querySelector("ul.gallery"),p=()=>document.querySelector("span").classList.toggle("loader");let d="";const i=document.querySelector(".show-more"),m=15;let c,u,v;const w=new x(".gallery a",{caption:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),E=()=>g.show({message:"Input is empty!",position:"topRight",icon:"ico-warning",backgroundColor:"lavender",messageSize:"16",messageColor:"grey",theme:"dark",maxWidth:"432px"}),P=()=>g.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageSize:"16",messageColor:"#fff",theme:"dark",maxWidth:"350px",icon:"ico-error"}),z=()=>g.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageSize:"16",messageColor:"grey",theme:"dark",maxWidth:"350px",backgroundColor:"lavender"}),I=async s=>{if(s.preventDefault(),c=1,u=m,i.classList.add("hidden"),d=h.elements.searchText.value.trim(),!d)return E();l.innerHTML="",p();try{const t=await y(d,m,c);if(!t.hits.length)return P();l.insertAdjacentHTML("beforeend",f(t.hits).join("")),w.refresh(),t.totalHits>=u&&i.classList.remove("hidden")}catch(t){console.error("Error handling form submission:",t),iziToastError("An error occurred while fetching data. Please try again later.")}finally{p(),h.reset()}},T=async()=>{v=l.childElementCount,c++,u=m*c,p(),i.classList.add("hidden");try{const s=await y(d,m,c);l.insertAdjacentHTML("beforeend",f(s.hits).join("")),w.refresh(),$(),s.totalHits>u?i.classList.remove("hidden"):z()}catch(s){console.log(s),iziToastError("An error occurred while loading more images. Please try again later.")}finally{p()}},$=()=>{l.children[v].scrollIntoView({behavior:"smooth",block:"start"})};document.addEventListener("DOMContentLoaded",()=>{i.classList.add("hidden")});h.addEventListener("submit",I);i.addEventListener("click",T);
//# sourceMappingURL=index.js.map
