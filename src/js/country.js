
if (document.querySelector('.country')){
    if (window.innerWidth <= 650) {
        const swiper = new Swiper('.swiper', {       
            slideToClickedSlide: true,
            spaceBetween: 0,
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2.7, 
                },
                350: {
                    slidesPerView: 3, 
                },
                390: {
                    slidesPerView: 3.3, 
                },
                420: {
                    slidesPerView: 3.5, 
                },
                // when window width is >= 480px
                450: {
                    slidesPerView: 3.8,
                },
                488: {
                    slidesPerView: 4,
                },
                518: {
                    slidesPerView: 4.1,
                },
                530: {
                    slidesPerView: 4.3,
                },
                600: {
                    slidesPerView: 4.5,
                },
                630: {
                    slidesPerView: 4.7,
                },
            }
        });
    }

    const mapWrapper = document.querySelector('.country__wrapper');
    const russiaBtn = document.querySelector('.russia');
    const ukraineBtn = document.querySelector('.ukraine');
    const turkeyBtn = document.querySelector('.turkey');
    const kazakhstanBtn = document.querySelector('.kazakhstan');
    const belarusBtn = document.querySelector('.belarus');

    ukraineBtn.addEventListener('click', () => {
        mapWrapper.classList.remove('russia--active');
        mapWrapper.classList.add('ukraine--active');
        mapWrapper.classList.remove('turkey--active');
        mapWrapper.classList.remove('kazakhstan--active');
        mapWrapper.classList.remove('belarus--active');
    });

    russiaBtn.addEventListener('click', () => {
        mapWrapper.classList.add('russia--active');
        mapWrapper.classList.remove('ukraine--active');
        mapWrapper.classList.remove('turkey--active');
        mapWrapper.classList.remove('kazakhstan--active');
        mapWrapper.classList.remove('belarus--active');
    });

    turkeyBtn.addEventListener('click', () => {
        mapWrapper.classList.remove('russia--active');
        mapWrapper.classList.remove('ukraine--active');
        mapWrapper.classList.add('turkey--active');
        mapWrapper.classList.remove('kazakhstan--active');
        mapWrapper.classList.remove('belarus--active');
    });

    kazakhstanBtn.addEventListener('click', () => {
        mapWrapper.classList.remove('russia--active');
        mapWrapper.classList.remove('ukraine--active');
        mapWrapper.classList.remove('turkey--active');
        mapWrapper.classList.add('kazakhstan--active');
        mapWrapper.classList.remove('belarus--active');
    });

    belarusBtn.addEventListener('click', () => {
        mapWrapper.classList.remove('russia--active');
        mapWrapper.classList.remove('ukraine--active');
        mapWrapper.classList.remove('turkey--active');
        mapWrapper.classList.remove('kazakhstan--active');
        mapWrapper.classList.add('belarus--active');
    });
}