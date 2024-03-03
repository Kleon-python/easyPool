
function openWindow() {
    let button = document.getElementById('contact-me');
    button.onclick = function () {
        setTimeout(function () { 
            window.open('contact.html', '_blank');
        }, 800);
    }
   
}

openWindow();

