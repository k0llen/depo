const screenWidth = window.innerWidth;

// Burger

if (document.querySelector('.header')) {
    if (screenWidth <=992){
        const trigger = document.querySelector('.header__burger');
        const headerWrapper = document.querySelector('.header__wrapper');
        const headerNav = document.querySelector('.header__nav');
        const body = document.querySelector('body');
        
        trigger.addEventListener('click', () => {
            headerWrapper.classList.toggle('header__nav--active');
            body.classList.toggle('body-noscroll');
        })

        document.addEventListener('click', (e) => {
            if (!headerWrapper.contains(e.target)) {
                headerWrapper.classList.remove('header__nav--active');
                body.classList.remove('body-noscroll');
            }
        })


    }
}

// Dropdown

if (document.querySelector('.dropdown')) {

    const dropdown = document.querySelector('.dropdown');
    const dropDownBtn = document.querySelector('.dropdown__button');
    const dropDownList = document.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    
    dropDownBtn.addEventListener('click', (e) => {
        dropDownList.classList.toggle('dropdown__list--visible');
    })

    document.addEventListener('click', (e) => {
        if(!dropDownBtn.contains(e.target)){
        dropDownList.classList.remove('dropdown__list--visible');
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' || e.key === 'Escape'){
            dropDownList.classList.remove('dropdown__list--visible');
        }
    })
}

// Scroll 
const anchors = document.querySelectorAll('a[href*="#"]');


for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        document.querySelector('.header__wrapper').classList.remove('header__nav--active');
        document.querySelector('body').classList.remove('body-noscroll');
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};