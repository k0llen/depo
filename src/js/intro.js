document.querySelectorAll('.callback--js').forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        Fancybox.show([
            {
                src: '#intro_popup',
                type: 'inline',
                options: {
                    Carousel: {
                        loop: false,
                    },
                    closeButton: false,
                    class: 'dark-fancybox',
                    touch: false,
                },
            },
        ]);
    });
});