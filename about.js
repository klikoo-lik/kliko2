// ABOUT — scripts

'use strict';

function toggleMob(){document.getElementById('mobMenu').classList.toggle('open')}
window.addEventListener('scroll',()=>{document.getElementById('siteHeader').classList.toggle('scrolled',scrollY>8)});