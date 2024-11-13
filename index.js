import{S as p,i}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function m(s){return s.map(({webformatURL:o,largeImageURL:t,tags:n,likes:e,views:r,comments:a,downloads:u})=>`
        <li class="photo-card">
    <a href="${t}">
    <img class="photo-card-img"
    src="${o}"
    alt="${n}"
    />
</a>
<div class="info">
        <p class="info-item">
            <span>Likes</span>
            ${e}
        </p>
        <p class="info-item">
            <span>Views</span>
            ${r}
        </p>
        <p class="info-item">
            <span>Comments</span>
            ${e}
        </p>
        <p class="info-item">
            <span>Downloads</span>
            ${u}
        </p>
    </div>
</li>
`).join("")}function f(s,o){o.insertAdjacentHTML("beforeend",s);let t=new p(".gallery a",{caption:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});t.refresh(),t.on("show.simplelightbox")}const d="46939525-73ecae044838d7dfbbfadb664",g="https://pixabay.com/api/";function h(s){const o=new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${g}?${o}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}const y=document.querySelector(".searching-form");document.querySelector("button");const c=document.querySelector(".gallery"),l=document.querySelector(".loader-icon-container");y.addEventListener("submit",b);function b(s){s.preventDefault(),c.innerHTML="";const o=s.target.elements.search.value.trim();if(!o){i.error({message:"Please enter a keyword into the search field",position:"topRight"});return}l.classList.toggle("loader"),h(o).then(t=>{if(console.log("asda"),t.hits.length===0)i.error({message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"});else{const e=m(t.hits);f(e,c)}}).catch(t=>{i.error({message:t.message,position:"topRight"})}).finally(()=>{l.classList.toggle("loader"),s.target.elements.search.value=""})}
//# sourceMappingURL=index.js.map
