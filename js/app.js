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
})

closePopup.addEventListener('click', () =>{
    popupbg.classList.remove('active');
    popup.classList.remove('active');
    hideSocial.classList.remove('active');
    openInfo.classList.remove('active');
    
})
document.addEventListener('click', (e) =>{
    if(e.target === popupbg){
        popupbg.classList.remove('active');
        popup.classList.remove('active');  
        hideSocial.classList.remove('active');   
        openInfo.classList.remove('active');
    }
})


