// Passive events
let passiveSupported = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: function() {
            passiveSupported = true;
        }
    }));
} catch (err) {}

// Scroll listener
window.addEventListener('scroll', function(e) {
    const height = document.querySelector('.parallax').getBoundingClientRect().height;
    const percentage = Math.min(Math.max(window.pageYOffset / height, 0), 1);
    document.documentElement.style.setProperty('--pct', percentage);
}, passiveSupported ? { passive: true } : false);

// Link to open without iframe
function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
if (inIframe()) {
    document.querySelector('.no-iframe').style.display = 'block';
}