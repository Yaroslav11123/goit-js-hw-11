import{a as d,S as p,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const f="https://pixabay.com/api/",y="52353296-7e1352dd89e2156c2e1f9fbb2";async function m(s){const o={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(f,{params:o})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info">
        <p>👍 ${e.likes}</p>
        <p>👁 ${e.views}</p>
        <p>💬 ${e.comments}</p>
        <p>⬇️ ${e.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function w(){l.classList.add("hidden")}const u=document.querySelector(".form"),S=u.querySelector("input[name='search-text']");u.addEventListener("submit",async s=>{s.preventDefault();const o=S.value.trim();if(!o){n.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}L(),b();try{const e=await m(o);e.hits.length?g(e.hits):n.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(e){n.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"}),console.error(e)}finally{w()}});
//# sourceMappingURL=index.js.map
