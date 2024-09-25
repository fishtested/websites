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

function randomProject() {
    const projects = [
        1, // Weather Somewhere
        2, // SimpleIP
        3, // Comicify
        4, // SimpleTime
        5, // RandomWord
        6, // SoundButtonWebsiteThing
        7, // Cat Facts
        8, // Generate a Passphrase
    ];
    project = projects[Math.floor(Math.random() * projects.length)];

    if (project == "1") {
        window.location.href='https://weather.dino.icu'
    }
    if (project == "2") {
        window.location.href='https://simpleip.netlify.app'
    }
    if (project == "3") {
        window.location.href='https://addons.mozilla.org/en-US/firefox/addon/comicify1/'
    }
    if (project == "4") {
        window.location.href='https://simpletime1.netlify.app'
    }
    if (project == "5") {
        window.location.href='https://randomword1.netlify.app'
    }
    if (project == "6") {
        window.location.href='https://soundbuttonwebsitething.netlify.app'
    }
    if (project == "7") {
        window.location.href='https://catfacts1.netlify.app'
    }
    if (project == "8") {
        window.location.href='https://generateapassphrase.netlify.app'
    }

}
