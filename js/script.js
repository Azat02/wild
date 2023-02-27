window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menus'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    const modalTrigger = document.querySelectorAll('.butter_buy'),
    modal = document.querySelector('.modal'),
    closeModal = document.querySelector('[data-close]'),
    close = document.querySelector('.btn_dark');
    let modalInput = document.querySelectorAll('input');


    modalTrigger.forEach(elem => {
        elem.addEventListener('click', function(){
            modal.classList.add('show');
            modal.classList.remove('hide');
        })
    })

    closeModal.addEventListener('click', function(){
        modal.classList.remove('show');
        modal.classList.add('hide');
    })

    close.addEventListener('click', function(){
        modal.classList.remove('show');
        modal.classList.add('hide');
        modalInput.forEach(elem => {
            elem.value.innerHTML = ' ';
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