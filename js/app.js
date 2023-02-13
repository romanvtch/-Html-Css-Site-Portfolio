
// first page Popup
const popupbg = document.getElementById('popup__bg');
const popup = document.getElementById('popup');
const openPoput = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');
const hideSocial = document.getElementById('hide_social');
const openInfo = document.getElementById('openInfo');

openPoput.addEventListener('click', (e) =>{
    e.preventDefault();
    popupbg.classList.add('active');
    popup.classList.add('active');
    hideSocial.classList.add('active');
    openInfo.classList.add('active');
    document.body.style.overflow = 'hidden';
})

closePopup.addEventListener('click', () =>{
    popupbg.classList.remove('active');
    popup.classList.remove('active');
    hideSocial.classList.remove('active');
    openInfo.classList.remove('active');
    document.body.style.overflow = '';
    
})
document.addEventListener('click', (e) =>{
    if(e.target === popupbg){
        popupbg.classList.remove('active');
        popup.classList.remove('active');  
        hideSocial.classList.remove('active');   
        openInfo.classList.remove('active');
        document.body.style.overflow = '';
    }
});
            // MainPopup
const popupbgMain = document.getElementById('popupbg__main');
const popupMain = document.getElementById('popup__main');
const openPopupMain = document.getElementById('openPopupMain');
const closePopupMain = document.getElementById('closePopupMain');
const openInfoMain = document.getElementById('openInfoMain');
const hideSocialMain = document.getElementById('hide_social__main');

openPopupMain.addEventListener('click', (e)=>{
    e.preventDefault();
    popupbgMain.classList.add('active');
    popupMain.classList.add('active');
    hideSocialMain.classList.add('active')
    openInfoMain.style.display = 'none';
    document.body.style.overflow = 'hidden';
});

closePopupMain.addEventListener('click', () =>{
    popupbgMain.classList.remove('active');
    popupMain.classList.remove('active');
    hideSocialMain.classList.remove('active')
    openInfoMain.style.display = 'block';
    document.body.style.overflow = '';
});

document.addEventListener('click', (e) =>{
    if(e.target === popupbgMain){
        popupbgMain.classList.remove('active');
        popupMain.classList.remove('active');  
        hideSocialMain.classList.remove('active')
        openInfoMain.style.display = 'block';
        document.body.style.overflow = '';
    }
});

            // preloader
window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
    }, 990);
};
            //Slider
if( window.innerWidth >= 420 ){
    $('.rev_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
       
    })
}
else{
    $('.rev_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        
    })
};
            //EndSlider
const one = document.getElementById('one');
const header = document.getElementById('header');
            
    one.addEventListener('click',() =>{
        header.scrollIntoView({
         block:'nearest',
        behavior: 'smooth',
    });
});
const two = document.getElementById('two');
const main = document.getElementById('main');
            
    two.addEventListener('click',() =>{
        main.scrollIntoView({
         block:'nearest',
        behavior: 'smooth',
    });
});

const three = document.getElementById('three');
const mainAfter = document.getElementById('mainAfter');
            
    three.addEventListener('click',() =>{
        mainAfter.scrollIntoView({
         block:'nearest',
        behavior: 'smooth',
    });
});



