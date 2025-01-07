document.addEventListener('DOMContentLoaded', function() {
    console.log('Found my secrets, have you? Can we be friends?')
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
        9, // Christmas Facts

    ];
    project = projects[Math.floor(Math.random() * projects.length)];

    if (project == "1") {
        if (confirm("Random project: Weather Somewhere")) {
            window.location.href='https://weather.dino.icu'
          }
    }
    if (project == "2") {
        if (confirm("Random project: SimpleIP")) {
        window.location.href='https://simpleip.netlify.app'
        }
    }
    if (project == "3") {
        if (confirm("Random project: Comicify")) {
        window.location.href='https://addons.mozilla.org/en-US/firefox/addon/comicify1/'
        }
    }
    if (project == "4") {
        if (confirm("Random project: SimpleTime")) {
        window.location.href='https://simpletime1.netlify.app'
        }
    }
    if (project == "5") {
        if (confirm("Random project: RandomWord")) {
        window.location.href='https://randomword1.netlify.app'
        }
    }
    if (project == "6") {
        if (confirm("Random project: SoundButtonWebsiteThing")) {
        window.location.href='https://soundbuttonwebsitething.netlify.app'
        }
    }
    if (project == "7") {
        if (confirm("Random project: Cat Facts")) {
        window.location.href='https://catfacts1.netlify.app'
        }
    }
    if (project == "8") {
        if (confirm("Random project: Generate a Passphrase")) {
        window.location.href='https://generateapassphrase.netlify.app'
        }
    }
    if (project == "9") {
        if (confirm("Random project: Christmas Facts")) {
            window.location.href='https://fishtested.github.io/Christmas-facts/'
        }
    }
}
function openWS() {
    window.location.href='https://weather.dino.icu'
}
function openSIP() {
    window.location.href='https://simpleip.netlify.app'
}
function openComicify() {
    window.location.href='https://addons.mozilla.org/en-US/firefox/addon/comicify1/'
}
function openST() {
    window.location.href='https://simpletime1.netlify.app'
}
function openRW() {
    window.location.href='https://randomword1.netlify.app'
}
function openSBWT() {
    window.location.href='https://soundbuttonwebsitething.netlify.app'
}
function openCF() {
    window.location.href='https://catfacts1.netlify.app'
}
function openGaP() {
    window.location.href='https://generateapassphrase.netlify.app'
}
function openCF() {
    window.location.href='https://fishtested.github.io/Christmas-facts/'
}

function darkTheme() {
    var main = document.getElementById("main");
    main.classList.toggle("dark-theme");
    var maintitle = document.getElementById("main-title");
    maintitle.classList.toggle("dark-theme");
    var maincards = document.getElementById("main-cards");
    maincards.classList.toggle("dark-theme")
    var mainbody = document.getElementById("main-heading");
    mainbody.classList.toggle("dark-theme")
    var button1 = document.getElementById("button1");
    button1.classList.toggle("dark-theme-buttons")
    var button2 = document.getElementById("button2");
    button2.classList.toggle("dark-theme-buttons")

    // AI Disclosure: I used ChatGPT to help change the icons
    var button = document.getElementById("darklight");
    var icon = button.querySelector("i");

    if (icon.classList.contains("fa-moon")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
  } 
