(()=>{"use strict";const a="https://rickandmortyapi.com/api/character/",n=async n=>{const e=n?`${a}${n}`:a;try{const a=await fetch(e);return await a.json()}catch(a){console.error("Fetch algo paso",a)}},e=()=>location.hash.slice(1).toLowerCase().split("/")[1]||"/",t=()=>'\n        <div class="Error404">\n            <h2>Error 404</h2>\n        </div>\n    ',s={"/":async()=>`\n        <div class="Characters">\n            ${(await n()).results.map((a=>`    \n                <article class="Character-Item">\n                    <a href="#/${a.id}/">\n                        <img src="${a.image}" alt="${a.name}">\n                        <h2>${a.name}</h2>\n                    </a>\n                </article>\n            `)).join("")}\n        </div>\n    `,"/:id":async()=>{const a=e(),t=await n(a);return`\n        <div class="Characters-inner">\n            <article class="Characters-card">\n                <img src="${t.image}" alt="${t.name}">\n                <h2>${t.name}</h2>\n            </article>\n            <article class="Characters-card">\n                <h3>Episodes: <spam> ${t.episode.length} </spam></h3>\n                <h3>Status: <spam> ${t.status} </spam></h3>\n                <h3>Species: <spam> ${t.species} </spam></h3>\n                <h3>Gender: <spam> ${t.gender} </spam></h3>\n                <h3>Origin:<spam> ${t.origin.name} </spam></h3>\n                <h3>Last Location: <spam> ${t.location.name} </spam></h3>\n            </article>\n        </div>\n    `},"/contact":"contact"},i=async()=>{const a=document.getElementById("header"),n=document.getElementById("content");a.innerHTML=await'\n        <div class="Header-main">\n            <div class="Heder-logo">\n                <h1>\n                    <a href="/">\n                        100tifi.co\n                    <a>\n                </h1>\n            <div>\n            <div class="Header-nav">\n                <a href="#/about">\n                    About\n                <a>\n            <div>\n        </div>\n    ';let i=e(),c=await(a=>a.length<=3?"/"===a?a:"/:id":`/${a}`)(i),r=s[c]?s[c]:t;n.innerHTML=await r()};window.addEventListener("load",i),window.addEventListener("hashchange",i)})();