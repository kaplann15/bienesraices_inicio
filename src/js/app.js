document.addEventListener('DOMContentLoaded', function(){

    eventListeners();
});

function eventListeners(){
    const mobileMenu = docuemnt.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive(){
    console.log('desdenavegacion respponsive');
}