import{S as f,i}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function m(n){return n.map(({webformatURL:o,largeImageURL:t,tags:s,likes:e,views:r,comments:a,downloads:p})=>`
        <li class="photo-card">
    <a href="${t}">
    <img class="photo-card-img"
    src="${o}"
    alt="${s}"
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
            ${p}
        </p>
    </div>
</li>
`).join("")}function d(n,o){o.insertAdjacentHTML("beforeend",n);let t=new f(".gallery a",{caption:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});t.refresh(),t.on("show.simplelightbox")}const g="46939525-73ecae044838d7dfbbfadb664",h="https://pixabay.com/api/";function y(n){const o=new URLSearchParams({key:g,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}?${o}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}const c=document.querySelector(".search-field"),L=document.querySelector("button"),l=document.querySelector(".gallery"),u=document.querySelector(".loader-icon-container");L.addEventListener("click",b);function b(n){n.preventDefault(),l.innerHTML="",u.classList.toggle("loader");const o=c.value.trim();y(o).then(t=>{if(t.hits===0)i.error({message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"});else{const e=m(t.hits);d(e,l)}}).catch(t=>{i.error({message:t.message,position:"topRight"})}).finally(()=>{u.classList.toggle("loader"),c.value=""})}
//# sourceMappingURL=index.js.map
