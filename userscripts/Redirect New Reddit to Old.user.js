// ==UserScript==
// @name        Old Reddit
// @description For old reddit
// @match       *://www.reddit.com/*
// ==/UserScript==

if (window.location.href.includes('://www.reddit.com/r/') || window.location.href.includes('://www.reddit.com/user/')) {
    window.location.replace(window.location.href.replace('://www.', '://old.'))
}