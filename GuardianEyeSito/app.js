//Register PWA service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}

function openCloseBar() {
    if (document.getElementById("sideBar").classList.toggle("open")) {
        document.getElementById("openClose").src = "image/menu.png"
    } else {
        document.getElementById("openClose").src = "image/menu.png"
    }
}