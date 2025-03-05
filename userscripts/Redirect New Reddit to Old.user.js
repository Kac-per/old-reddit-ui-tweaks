// ==UserScript==
// @name        Old Reddit
// @description For old reddit
// @match       *://www.reddit.com/*
// @namespace   https://github.com/Kac-per
// @version     1.0.0
// ==/UserScript==

if (window.location.href.includes('://www.reddit.com/r/') || window.location.href.includes('://www.reddit.com/user/')) {
    window.location.replace(window.location.href.replace('://www.', '://old.'))
}