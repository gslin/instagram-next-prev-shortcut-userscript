// ==UserScript==
// @name        Instagram Next/Prev Shortcut
// @namespace   https://github.com/gslin/instagram-next-prev-shortcut-userscript
// @match       https://www.instagram.com/*
// @grant       none
// @version     0.20230601.0
// @author      Gea-Suan Lin <gslin@gslin.com>
// @description Instagram Next/Prev Shortcut
// @license     MIT
// ==/UserScript==

(() => {
  document.addEventListener('keyup', function(event) {
    if ('input' === document.activeElement.tagName.toLowerCase()) {
      return;
    }

    if ('<' === event.key) {
      const el = document.querySelector('button[aria-label="Go Back"]');
      el?.click();
      return;
    }

    if ('>' === event.key) {
      const el = document.querySelector('button[aria-label="Next"]');
      el?.click();
      return;
    }
  });
})();
