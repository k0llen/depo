if (document.querySelector('.faq')) {
    const trigger = document.querySelectorAll('.faq__accordeon-item-trigger');

    trigger.forEach((item) => { 
        item.addEventListener('click', function(e) {
            if (item.parentNode.classList.contains('faq__accordeon-item--active')) {
                item.parentNode.classList.remove('faq__accordeon-item--active');
            } else {
                trigger.forEach((child) => {
                    child.parentNode.classList.remove('faq__accordeon-item--active');
                })
                item.parentNode.classList.add('faq__accordeon-item--active');
            };
        });
    });
}