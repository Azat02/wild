window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menus'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');
    const modalTrigger = document.querySelectorAll('.butter_buy'),
    modal = document.querySelector('.modal'),
    closeModal = document.querySelectorAll('[data-close]'),
    close = document.querySelectorAll('.btn_dark');
    let span = document.querySelector('.our_descr_span');
    let discover = document.querySelector('.main .our_discover');
    let sign = document.querySelector('.sign');
    let signLink = document.querySelector('.sign_link');
    let cookies = document.querySelector('.cookies');
    let cookiesBtn = document.querySelector('.cookies_btn');
    let cart = document.querySelector('.cart');
    let cartBlock = document.querySelector('.cart_block');
    
    

    cookiesBtn.addEventListener('click', ()=>{
        cookies.classList.add('hide')
    })



    signLink.addEventListener('click', function(){
        sign.classList.remove('hide');
        sign.classList.add('show')
    })

    discover.addEventListener('click' , () =>{
        if (span.classList.contains('hide')){
            span.classList.remove('hide')
            span.classList.add('show');
        }else{
            span.classList.add('hide')
            span.classList.remove('show');
        }
    })
    function plusMinus(){
        let counterr = 1
        let counter = document.querySelector('.counter');
        let minus = document.querySelector('.minus');
        let plus = document.querySelector('.plus');
        let wrapper = document.querySelector('.cart_block .wrapper');


        minus.addEventListener('click', function () {
            if (counterr == 1) {
                wrapper.classList.add('hide');
                cart.innerHTML = `CART (0)`;
            } else {
                counterr--;
                counter.innerHTML = `${counterr}`

            }
        })

        plus.addEventListener('click', function () {
            counterr++;
            counter.innerHTML = `${counterr}`
            
        })
    }

    modalTrigger[0].addEventListener('click', () => {
        cartBlock.insertAdjacentHTML('beforeend', `
        <div class="wrapper">
            <img src="img/Rectangle.png" alt="">
            <div class="butter_title">The Wild Peanut <br> Butter</div>
            <div class="butter_price">€4,90</div>
            <button class="minus">-</button>
            <div class="counter">1</div>
            <button class="plus">+</button>
        </div>
        `
        );
        plusMinus();
    });
    modalTrigger[1].addEventListener('click', () => {
        cartBlock.insertAdjacentHTML('beforeend', `
        <div class="wrapper">
            <img src="img/Rectangle2.png" alt="">
            <div class="butter_title">Tahini with Cocoa & <br> Honey</div>
            <div class="butter_price">€5,90</div>
            <button class="minus">-</button>
            <div class="counter">1</div>
            <button class="plus">+</button>
        </div>
        `)
        plusMinus();
    })

    modalTrigger[2].addEventListener('click', () => {
        cartBlock.insertAdjacentHTML('beforeend', `
        <div class="wrapper">
            <img src="img/Rectangle3.png" alt="">
            <div class="butter_title">The Wild Hazelnut <br> Butter</div>
            <div class="butter_price">€6,90</div>
            <button class="minus">-</button>
            <div class="counter">1</div>
            <button class="plus">+</button>
        </div>
        `);
        plusMinus();
    })

    cart.addEventListener('click', ()=>{
        if (counter == 0){
            cartBlock.classList.remove('show');
            cartBlock.classList.add('hide');
        } else {
            cartBlock.classList.add('show');
            cartBlock.classList.remove('hide');
        }
    })

    // cart.addEventListener('mouseout', ()=>{
    //     cartBlock.classList.remove('show');
    //     cartBlock.classList.add('hide');
    // })
    

    modalTrigger.forEach(elem => {
        elem.addEventListener('click', () => {
            modal.classList.remove('show');
            modal.classList.add('hide');
        } )
    })
    

    modalTrigger.forEach(elem => {
        elem.addEventListener('click', incrementCount
        )
    });

    let counter = 0;

    function incrementCount (){
        counter++;
        cart.innerHTML = `<a href="#">cart (${counter})</a>`;
    }

    

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

    modal.addEventListener('click', (e) =>{
        if(e.target === modal){
            modal.classList.remove('show');
            modal.classList.add('hide');
            document.body.style.overflow =''; 
        }
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
});

