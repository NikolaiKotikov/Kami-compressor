$(document).ready(function () {
	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			$(".popup-city-wrapper").fadeOut();
			$(".search__preview").slideUp();
		}
	});

	$(".search__field").focus(function () {
		$(".search__preview").slideDown();
	});

	$(".preview__close-button").click(function () {
		$(".search__preview").slideUp();
	});

	$(".popup-city__close-button").click(function () {
		$(".popup-city-wrapper").fadeOut();
		$(".services").fadeOut();
		$(".popup-background").fadeOut();
		$(".breadcrumbs-menu").fadeOut();
		$('body').removeClass('hide-overflow');
	});

	$(".breadcrumbs__item--small-only").click(function () {
		$(".popup-background").fadeIn();
		$(".breadcrumbs-menu").fadeIn();
		$('body').addClass('hide-overflow');
	})

	$(".location__city").click(function (e) {
		e.preventDefault();
		$(".popup-city-wrapper").show();
		$(".popup-background").fadeIn();
		$(".burger-menu-wrapper").hide();
		$('body').addClass('hide-overflow');
	});

	$(".back").click(function () {
		$(".popup-city-wrapper").hide();
		$(".services").hide();
		$(".burger-menu-wrapper").show();
	})

	$(".burger-menu__about-link--services").click(function () {
		$(".services").show();
		$(".burger-menu-wrapper").hide();
	})

	$(".burger-menu__close-button").click(function () {
		$(".popup-background").fadeOut();
		$(".burger-menu-wrapper").fadeOut();
		$('body').removeClass('hide-overflow');
	})

	$(".header__open-menu").click(function () {
		$(".popup-background").fadeIn();
		$(".burger-menu-wrapper").fadeIn();
		$('body').addClass('hide-overflow');
	})

	$(window).scroll(function () {
		if ($(window).scrollTop() >= 60 && $(window).width() >= 1200) {
			$(".header").addClass("header--sticky");
			$(".header__info")
				.remove()
				.appendTo(".header__middle");
			$("body").css("padding-top", "200px");
		} else {
			$(".header").removeClass("header--sticky");
			$(".header__info")
				.remove()
				.appendTo(".header__top");
			$("body").css("padding-top", "0");
		}
	});

	$(window).resize(function () {
		if ($(window).width() <= 1200) {
			$(".header").removeClass("header--sticky");
			$("body").css("padding-top", "0");
			$(".header__info")
				.remove()
				.appendTo(".header__top");
		}
	})

	if ($(window).width() <= 1200) {
		$(".header").removeClass("header--sticky");
		$("body").css("padding-top", "0");
		$(".header__info")
			.remove()
			.appendTo(".header__top");
	}

	$(window).resize(function () {
		if ($(window).width() <= 350) {
			$('.filters-list__link--prod').html('Произв-ть')
		} else {
			$('.filters-list__link--prod').html('Производительность')
		}
	})

	if ($(window).width() <= 350) {
		$('.filters-list__link--prod').html('Произв-ть')
	} else {
		$('.filters-list__link--prod').html('Производительность')
	}

	$(window).resize(function () {
		if ($(window).width() <= 1200 && $(window).width() >= 768) {
			$("#different-layout").prop('className', 'results results--list');
			$(".prop-list__title--productivity").each(function () {
				$(this).html("Производительность <b>м&#179;/мин</b>");
			});
		} else if ($(window).width() < 768) {
			$("#different-layout").prop('className', 'results results--card');
			$(".prop-list__title--productivity").each(function () {
				$(this).html("Произв-ть <b>м&#179;/мин</b>");
			});
		} else {
			$("#different-layout").prop('className', 'results results--card');
			$('.filters-list').removeClass('filters-list--dropped');
		}
	});





	if ($(window).width() < 1200) {
		$("#different-layout").prop('className', 'results results--list');
	} else {
		$("#different-layout").prop('className', 'results results--card');
	}

	if ($(window).width() <= 768) {
		$("#different-layout").prop('className', 'results results--card');
	}

	$(".tags-slider__item").click(function () {
		$(this).toggleClass("tags-slider__item--active");
	});

	$(".tags-slider").slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: false,
		variableWidth: true,
		prevArrow: ".tags__button--prev",
		nextArrow: ".tags__button--next"
	});

	function prettify(num) {
		var n = num.toString();
		return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
	}

	$(".range--price").slider({
		animate: "slow",
		range: true,
		values: [0, 6000000],
		max: 6000000,

		slide: function (event, ui) {
			$(".price-min").text(prettify(ui.values[0]));
			$(".price-max").text(prettify(ui.values[1]));
			$("#price-min").val(ui.values[0]);
			$("#price-max").val(ui.values[1]);
		},

		change: function (event, ui) {
			$(".price-min").text(prettify(ui.values[0]));
			$(".price-max").text(prettify(ui.values[1]));
			$("#price-min").val(ui.values[0]);
			$("#price-max").val(ui.values[1]);
		}
	});

	$(".range--press").slider({
		animate: "slow",
		range: true,
		values: [0, 15],
		max: 15,

		slide: function (event, ui) {
			$(".press-min").text(ui.values[0]);
			$(".press-max").text(ui.values[1]);
			$("#press-min").val(ui.values[0]);
			$("#press-max").val(ui.values[1]);
		},

		change: function (event, ui) {
			$(".press-min").text(ui.values[0]);
			$(".press-max").text(ui.values[1]);
			$("#press-min").val(ui.values[0]);
			$("#press-max").val(ui.values[1]);
		}
	});

	$(".range--prod").slider({
		animate: "slow",
		range: true,
		values: [0, 54],
		max: 54,
		slide: function (event, ui) {
			$(".prod-min").text(ui.values[0]);
			$(".prod-max").text(ui.values[1]);
			$("#prod-min").val(ui.values[0]);
			$("#prod-max").val(ui.values[1]);
		},

		change: function (event, ui) {
			$(".prod-min").text(ui.values[0]);
			$(".prod-max").text(ui.values[1]);
			$("#prod-min").val(ui.values[0]);
			$("#prod-max").val(ui.values[1]);
		}
	});

	$(".range--pow").slider({
		animate: "slow",
		range: true,
		values: [0, 315],
		max: 315,
		slide: function (event, ui) {
			$(".pow-min").text(ui.values[0]);
			$(".pow-max").text(ui.values[1]);
			$("#pow-min").val(ui.values[0]);
			$("#pow-max").val(ui.values[1]);
		},

		change: function (event, ui) {
			$(".pow-min").text(ui.values[0]);
			$(".pow-max").text(ui.values[1]);
			$("#pow-min").val(ui.values[0]);
			$("#pow-max").val(ui.values[1]);
		}
	});

	$(".range").mousedown(function () {
		$(this).removeClass("ui-disabled");
	});

	$(".filters__form button[type=reset]").on("click", function () {
		$(".range").each(function () {
			$(this).addClass("ui-disabled");
			var options = $(this).slider("option");
			$(this).slider("values", [options.min, options.max]);
		});

		$("input[type='hidden']").each(function () {
			$(this).val(-1);
		});
	});

	$(".fieldset__title").on("click", function () {
		$(this)
			.toggleClass("title--closed")
			.next()
			.stop()
			.fadeToggle();
	});

	$(".card.card--out-of-stock .card__link--buy").click(function (e) {
		e.preventDefault();
	});

	$(".layout-button").click(function () {
		$(".layout-button").each(function () {
			$(this).removeClass("layout-button--active");
		});
		$(this).addClass("layout-button--active");
	});

	$(".per-page__link").click(function (e) {
		e.preventDefault();
		$(".per-page__link").each(function () {
			$(this).removeClass("per-page__link--active");
		});
		$(this).addClass("per-page__link--active");
	});

	$(".filters-list__link").click(function (e) {
		e.preventDefault();
		$(".filters-list__link").each(function () {
			$(this)
				.closest("li")
				.removeClass("filters-list__item--active");
		});
		$(this)
			.closest("li")
			.addClass("filters-list__item--active");
	});

	var filtersListonContent = $(".filters-list").html();

	$(".layout-button--list").click(function () {
		$(".prop-list__title--productivity").each(function () {
			$(this).html("Производительность <b>м&#179;/мин</b>");
		});
		$("#different-layout").removeClass();
		$("#different-layout").addClass("results results--list");
		$(".filters-list").html(filtersListonContent);
		$(".filters-list__link").click(function (e) {
			e.preventDefault();
			$(".filters-list__link").each(function () {
				$(this)
					.closest("li")
					.removeClass("filters-list__item--active");
			});
			$(this)
				.closest("li")
				.addClass("filters-list__item--active");
		});
	});

	$(".layout-button--cards").click(function () {
		$(".prop-list__title--productivity").each(function () {
			$(this).html("Произв-ть <b>м&#179;/мин</b>");
		});
		$("#different-layout").removeClass();
		$("#different-layout").addClass("results results--cards");
		$(".filters-list").html(filtersListonContent);
		$(".filters-list__link").click(function (e) {
			e.preventDefault();
			$(".filters-list__link").each(function () {
				$(this)
					.closest("li")
					.removeClass("filters-list__item--active");
			});
			$(this)
				.closest("li")
				.addClass("filters-list__item--active");
		});
	});

	$(".layout-button--table").click(function () {
		var tmp = document
			.querySelector("#filters-list-tmp")
			.content.cloneNode(true);
		$(".filters-list").html(tmp);
		$("#different-layout").removeClass();
		$("#different-layout").addClass("results results--table");
		$(".filters-list__link").click(function (e) {
			e.preventDefault();
			$(".filters-list__link").each(function () {
				$(this)
					.closest("li")
					.removeClass("filters-list__item--active");
			});
			$(this)
				.closest("li")
				.addClass("filters-list__item--active");
		});
	});

	$(".show-details").click(function () {
		$(".more-info").toggleClass("visually-hidden");
		$(this).toggleClass("visually-hidden");
	});

	$(".hide-details").click(function () {
		$(".more-info").toggleClass("visually-hidden");
		$(".show-details").toggleClass("visually-hidden");
	});

	$(".filters-toggler").click(function () {
		$(".filters-list").toggleClass('filters-list--dropped');
		$(this).toggleClass('filters-toggler--active');
	})
	$(".form-wrapper").click(function () {
		$(this).toggleClass('form-wrapper--active');
		$(".form").slideToggle();
	})
	$(".search__close-button").click(function () {
		$('.header__search').removeClass('show');
		$('.preview').hide();
	})
	$('.header__search-button').click(function () {
		$('.header__search').addClass('show');
	})
	$('.popup-background').click(function () {
		$('.burger-menu-wrapper').fadeOut();
		$(".breadcrumbs-menu").fadeOut();
		$('.services').fadeOut();
		$('.popup-city-wrapper').fadeOut();
		$('#callback-form').fadeOut();
		$('.popup-background').fadeOut();
		$('body').removeClass('hide-overflow');
		hideModal(costForm);
		hideModal(thanksPopup);
		$('#callback-name').val('');
		$('#callback-phone').val('');
		$("#cost-mail").val("");
		$('.phone-error').text('');
		$('.name-error').text('');
	})

	$("#callback-phone").mask("+7 (999) 999-99-99", { autoclear: false });
	$('#callback-name').blur(function () {
		if (this.value == '') {
			$('.name-error').text('Необходимо заполнить данное поле')
		} else { $('.name-error').text('') }
	})
	$('#callback-name').focus(function () {
		$('.name-error').text('')
	})
	$('#callback-phone').blur(function () {
		if (this.value == '') {
			$('.phone-error').text('Введите 10 символов')
		}
	})
	$('#callback-name').bind('input', function () {
		if (this.value != '') {
			$('.name-error').text('')
		}
	})
	$('#callback-phone').focus(function () {
		$('.phone-error').text('')
	})
	$('#callback-form').submit(function (e) {
		e.preventDefault();
		if ($('#callback-name').val() == '' || $('#callback-name').val() == undefined) {
			$('.name-error').text('Необходимо заполнить данное поле')
		}
		else if ($('#callback-phone').val() == '' || $('#callback-phone').val() == undefined) {
			$('.phone-error').text('Введите 10 символов')
		}

		else {
			hideModal(callbackForm);
			showModal(thanksPopup);
		}
	})
	$('.phones-list__cb').click(function (e) {
		e.preventDefault();
		$('#callback-form').fadeIn();
		$('.popup-background').fadeIn();
		$('body').addClass('hide-overflow');

	})
	$('.callback').click(function (e) {
		e.preventDefault();
		$('#callback-form').fadeIn();
		$('.popup-background').fadeIn();
		$('body').addClass('hide-overflow');
	})
	$('.header__call-icon').click(function (e) {
		e.preventDefault();
		$('#callback-form').fadeIn();
		$('.popup-background').fadeIn();
		$('body').addClass('hide-overflow');
	})
	$('.callback-form__close').click(function () {
		$('#callback-form').fadeOut();
		$('.popup-background').fadeOut();
		$('#callback-name').val('');
		$('#callback-phone').val('');
		$('.phone-error').text('')
		$('.name-error').text('')
		$('body').removeClass('hide-overflow');
	})
	////////////////////////////

	$(".popup-close").click(function() {
		hideModal(costForm);
		hideOverlay();
	})
	$(".card__link--request").each(function() {
		$(this).click(function(evt) {
			evt.preventDefault();
			showModal(costForm);
		})
	})
	$("#cost-phone").mask("+7 (999) 999-99-99", { autoclear: false });
	$('#cost-name').blur(function () {
		if (this.value == '') {
			$('.required-icon--name').text('*')
			$('.name-error').text('Необходимо заполнить данное поле')
		} else {
			$('.name-error').text('')
			$('.required-icon--name').text('')
		}
	})
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	$('#cost-mail').bind('input', function () {
		if (reg.test(this.value) == false) {
			$('.mail-error').text('Введите латиницей в виде ______@____.__')
		} else {
			$('.mail-error').text('')
		}
	})
	$('#cost-mail').blur(function() {
		if (this.value == '') {
			$('.mail-error').text('');
		}
	})
	$('#cost-name').focus(function () {
		$('.name-error').text('')
	})

	$('#cost-phone').blur(function () {
		if (this.value == '') {
			$('.required-icon--phone').text('*')
			$('.phone-error').text('Введите 10 символов')
		}
	})
	$('#cost-name').bind('input', function () {
		if (this.value != '') {
			$('.name-error').text('')
			$('.required-icon--name').text('')
		} else {
			$('.required-icon--name').text('*')
		}

	})
	$('#cost-phone').focus(function () {
		$('.required-icon--phone').text('')
		$('.phone-error').text('')
	})
	$('#cost-form').submit(function (e) {
		if ($('#cost-name').val() == '' || $('#cost-name').val() == undefined) {
			e.preventDefault();
			$('.name-error').text('Необходимо заполнить данное поле')
		}
		if ($('#cost-phone').val() == '' || $('#cost-phone').val() == undefined) {
			e.preventDefault();
			$('.phone-error').text('Введите 10 символов')
		}
	})

	costForm.submit(function(evt) {
		evt.preventDefault();
		if(validateBeforeSending(costName, costPhone)) {
			showModal(thanksPopup);
			hideModal(costForm);
		}

	})

	thanksPopupClose.click(function() {
		hideModal(thanksPopup);
	});
});

/////////// Variables

var body = $('body');
var phoneErrorItem = $('.phone-error');
var nameErrorItem = $('.name-error');
var mailErrorItem = $('.mail-error');
var popupBackground = $('.popup-background');
var popupInput = $(".popup-form-field");
var thanksPopup = $(".thanks");
var thanksPopupClose = thanksPopup.find(".thanks__close");
var costForm = $("#cost-form");
var costName = $("#cost-name");
var costPhone = $("#cost-phone");
var callbackForm = $("#callback-form");

/////////// Methods (i started to write more clear code here)

function validateBeforeSending(nameField, phoneField) {
	if (nameField.val() === undefined || nameField.val() === "" || phoneField.val() === undefined || phoneField.val() === "") {
		return false;
	}
	return true;
}

function showModal(identifyer) {
	identifyer.fadeIn();
	showOverlay();
	fixBody();
}
function hideModal(identifyer) {
	identifyer.fadeOut();
	unfixBody();
	clearHints();
	clearInputs();
}

function showOverlay() {
	popupBackground.fadeIn();
}
function hideOverlay() {
	popupBackground.fadeOut();
	clearHints();
	clearInputs();
}

function fixBody() {
	body.addClass('hide-overflow');
}
function unfixBody() {
	body.removeClass('hide-overflow');
}

function clearHints() {
	phoneErrorItem.each(function() {
		$(this).text('');
	});
	nameErrorItem.each(function() {
		$(this).text('');
	});
	mailErrorItem.each(function() {
		$(this).text('');
	})
}

function clearInputs() {
	popupInput.each(function() {
		$(this).val('');
	});
}
