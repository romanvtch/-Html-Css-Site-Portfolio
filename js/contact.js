window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
    }, 990);
};
const form = document.getElementById('form');
form.addEventListener('submit', forSend);

function forSend(){
    
}
