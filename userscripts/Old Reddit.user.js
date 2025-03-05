// ==UserScript==
// @name        Old Reddit
// @description For old reddit
// @match       *://old.reddit.com/*
// ==/UserScript==

const setMeta = (name, content) => {
    let metaEl = document.querySelector('meta[name="' + name + '"]')
    if (!metaEl) {
        metaEl = document.createElement('META')
        metaEl.name = name
        document.head.appendChild(metaEl)
    }
    metaEl.content = content
}

setMeta('viewport', 'width=device-width, initial-scale=1')

if (matchMedia('(prefers-color-scheme: dark)').matches) {
    setMeta('theme-color', '#0f0f0f')
} else {
    setMeta('theme-color', '#cee3f8')
}

document.querySelector('link[ref="applied_subreddit_stylesheet"]')?.remove()
document.querySelectorAll('[data-cachedhtml]').forEach(el => {

    el.dataset.cachedhtml = el.dataset.cachedhtml.replaceAll('<a class="may-blank gallery-item-thumbnail-link"', '<a class="may-blank gallery-item-thumbnail-link" onclick="this.querySelector(\'img\').src = this.href;return false"')

    let [match, width, height] = el.dataset.cachedhtml.match(/width="(\d+)" height="(\d+)"/) || []
    if (!match) return

    if (width < 400) {
        width *= 2
        height *= 2
    }
    el.dataset.cachedhtml = el.dataset.cachedhtml.replace(match, 'width="' + width + '" height="' + height + '" style="aspect-ratio: ' + width + '/' + height + '"')
})
document.querySelector('.side').id = 'sidebar'
const jumpToSidebar = document.createElement('A')
jumpToSidebar.classList.add('choice', 'jump-to-sidebar')
jumpToSidebar.innerText = 'sidebar'
jumpToSidebar.href = '#sidebar'
document.querySelector('.tabmenu').appendChild(document.createElement('LI')).appendChild(jumpToSidebar)
setTimeout(() => {
    document.querySelector('.tabmenu li.selected')?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
    document.querySelector('.listingsignupbar__close')?.click()
    document.querySelector('#mobile-web-redirect-optout')?.click()
}, 0)
