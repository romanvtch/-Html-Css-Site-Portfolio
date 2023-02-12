window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
    }, 990);
}

const butt = document.getElementById('button');
const main = document.getElementById('main');

butt.addEventListener('click',() =>{
    main.scrollIntoView({
        block:'nearest',
        behavior: 'smooth',
    });
})