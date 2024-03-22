

const init = () => {
    $('.payment-system').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        speed: 300,
        slidesToShow: 5,
		responsive: [
			{
			  breakpoint: 440,
			  settings: {
				arrows: false
			  }
			}
		]
	});
}

window.onload = init();