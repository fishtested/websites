document.addEventListener('DOMContentLoaded', function() {
    function updateImages () {
        // SimpleIP
    const simpleIP =  document.getElementById('simpleIP')
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        simpleIP.src = 'simpleIP-dark.png'
    } else {
        simpleIP.src = 'simpleIP-light.png'
    }

    // Comicify
    const comicify =  document.getElementById('comicify')
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        comicify.src = 'comicify-dark.png'
    } else {
        comicify.src = 'comicify-light.png'
    }
// SimpleTime
const simpletime =  document.getElementById('simpletime')
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    simpletime.src = 'simpletime-dark.png'
} else {
    simpletime.src = 'simpletime-light.png'
}
// This website
const websites =  document.getElementById('websites')
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    websites.src = 'websites-dark.png'
} else {
    websites.src = 'websites-light.png'
}
}
updateImages();
});
