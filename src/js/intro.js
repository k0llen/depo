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

document.querySelectorAll('.country-callback--js').forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        Fancybox.show([
            {
                src: '#country_popup',
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

document.querySelectorAll('.country__popup-dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.country__popup-dropdown-button');
	const dropDownList = dropDownWrapper.querySelector('.country__popup-dropdown-list');
	const dropDownListItems = dropDownList.querySelectorAll('.country__popup-dropdown-list-item');
	const dropDownInput = dropDownWrapper.querySelector('.country__popup-dropdown-input-hidden');


	dropDownBtn.addEventListener('click', function (e) {
        e.preventDefault(); 
		dropDownList.classList.toggle('country__popup-dropdown-list--visible');
        this.classList.add('country__popup-dropdown-button--active');
	});

	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('country__popup-dropdown-list--visible');
            dropDownBtn.classList.remove('country__popup-dropdown-button--active');
		});
	});

	document.addEventListener('click', function (e) {
		if (!dropDownBtn.contains(e.target)) {
			dropDownBtn.classList.remove('country__popup-dropdown-button--active');
			dropDownList.classList.remove('country__popup-dropdown-list--visible');
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('country__popup-dropdown-button--active');
			dropDownList.classList.remove('country__popup-dropdown-list--visible');
		}
	});
});

if(document.querySelector('.country__popup')){
    const sentBtn = document.querySelector('.country__popup-form-btn');
    const popUp = document.querySelector('.country__popup');
    const countryBtn = document.querySelector('.country-callback--js');

    sentBtn.addEventListener('click', (e) => {
        popUp.classList.add('country__popup--form-sent');
    })

    countryBtn.addEventListener('click', (e) => {
        popUp.classList.remove('country__popup--form-sent');
    });

    
}
