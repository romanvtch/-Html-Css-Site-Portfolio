document.addEventListener('DOMContentLoaded', function(){
    window.onload = function() {
        let preloader = document.getElementById('preloader');
        preloader.classList.add('hide-preloader');
        setInterval(function() {
              preloader.classList.add('preloader-hidden');
        }, 990);
    };

            // Need time
    // const form = document.getElementById('form');
    // form.addEventListener('submit', formSend);
    
    // async function formSend(e){
    //     e.preventDefault();

    //     let error = formValidate(form);
        
    // } 

    // function formValidate(form){
    //     let error = 0;
    //     let formReq = document.querySelectorAll('._req');

    //     for (let index = 0; index < formReq.length; index++) {
    //         const input = formReq[index];
    //         formRemoveError(input);

    //         if(input.classList.contains('_email')){
    //             if(emailTest(input)){
    //                 formAddError(input);
    //                 error++;
    //             }
    //         } else if(input.getAttribute('type') == 'checkbox' && input.checked === false){
    //             formAddError(input);
    //             error++;
    //         } else{
    //             if(input.value === ''){
    //                 formAddError(input);
    //                 error++;
    //             }
    //         }
            
    //     }
    // }

    // function formAddError(input){
    //     input.parentElement.classList.add('_error');
    //     input.classList.add('_error');
    // }
    // function formRemoveError(input){
    //     input.parentElement.classList.remove('_error');
    //     input.classList.remove('_error');
    // }
    // //function test email
    // function emailTest(input){
    //     return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.value);
    // }

});

