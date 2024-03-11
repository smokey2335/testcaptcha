// First function
function openFirstPopup() {
    var popup = window.open('https://bit.ly/boowbsmob?utm_source=ezm', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/boowbsmob?utm_source=ezm', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

function triggerOpenFirstPopup() {
    openFirstPopup();
}

// Second function
function openSecondPopup() {
    var popup = window.open('https://bit.ly/smashwatchmob?utm_source=ez', '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                popup = window.open('https://bit.ly/smashwatchmob?utm_source=ez', '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}
function triggerOpenSecondPopup() {
    openSecondPopup();
}

window.addEventListener('load', triggerOpenFirstPopup);
window.addEventListener('scroll', triggerOpenFirstPopup);
window.addEventListener('keydown', triggerOpenFirstPopup);
document.addEventListener('scroll', triggerOpenFirstPopup);
document.addEventListener('keydown', triggerOpenFirstPopup);
window.addEventListener('beforeunload', triggerOpenFirstPopup);
document.addEventListener('beforeunload', triggerOpenFirstPopup);

window.addEventListener('load', triggerOpenSecondPopup);
window.addEventListener('scroll', triggerOpenSecondPopup);
window.addEventListener('keydown', triggerOpenSecondPopup);
document.addEventListener('scroll', triggerOpenSecondPopup);
document.addEventListener('keydown', triggerOpenSecondPopup);
window.addEventListener('beforeunload', triggerOpenSecondPopup);
document.addEventListener('beforeunload', triggerOpenSecondPopup);
