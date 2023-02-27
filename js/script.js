window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menus'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    const modalTrigger = document.querySelectorAll('.butter_buy'),
    modal = document.querySelector('.modal'),
    closeModal = document.querySelectorAll('[data-close]'),
    close = document.querySelectorAll('.btn_dark');
    let modalInput = document.querySelectorAll('input');
    let span = document.querySelector('.our_descr_span');
    let discover = document.querySelector('.main .our_discover');
    let sign = document.querySelector('.sign');
    let signLink = document.querySelector('.sign_link');
    let cookies = document.querySelector('.cookies');
    let cookiesBtn = document.querySelector('.cookies_btn');
    let cart = document.querySelector('.cart')

    cookiesBtn.addEventListener('click', ()=>{
        cookies.classList.add('hide')
    })



    signLink.addEventListener('click', function(){
        sign.classList.remove('hide');
        sign.classList.add('show')
    })

    discover.addEventListener('click' , () =>{
        span.classList.remove('hide')
        span.classList.add('show');
    })

    

    modalTrigger.forEach(elem => {
        elem.addEventListener('click', incrementCount
    );

    let count = 0;

    function incrementCount() {
        count++;
        let counterElement = document.querySelector(".cart");
        counterElement.inner = `cart(${count})`;
        modal.classList.add('show');
        modal.classList.remove('hide');
        console.log(count);
        };

    closeModal.forEach(elem=>{
        elem.addEventListener('click', function(){
            modal.classList.remove('show');
            modal.classList.add('hide');
            sign.classList.add('hide');
            sign.classList.remove('show');
        })
    })

    close.forEach( elem => {
        elem.addEventListener('click', function(e){
            modal.classList.remove('show');
            modal.classList.add('hide');
            sign.classList.add('hide');
            sign.classList.remove('show');
            e.preventDefault();
        })
    })

    

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menus_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menus_active');
        })
    })
})

});
