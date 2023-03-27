document.querySelectorAll('.callback--js').forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        Fancybox.show([
            {
                src: '#callback-modal',
                type: 'inline',
                options: {
                    Carousel: {
                        loop: false,
                    },
                    closeButton: 'top',
                    class: 'dark-fancybox',
                    touch: false,
                },
            },
        ]);
    });
});