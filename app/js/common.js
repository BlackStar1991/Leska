$(document).ready(function () {

//MENU
    var body = $("body");
    var blackWrapper = $(".blackWrapper");


    $('.open-menu-min').on("click", function () {
        $(this).toggleClass('close-menu-min');
        $(".bl_nav__mobile").toggleClass('closeMenu');

    });


//////////////////////////////////////////


//   sliderEffect
    function sliderEffectForButtons(button, element, duration) {
        button.click(function () {
            element.slideToggle(duration);
        });
    }


//  hideShowEffect
    function hideShowEffect(button, element) {

        button.click(function () {
            element.toggleClass("hidden");
        });
    }

//// Categories
//     var buttonCategories = $(".filter_name"),
//         fullCategories = $(".bl_catalogs__firstLevel");
//
//     sliderEffectForButtons(buttonCategories, fullCategories, 500);


//// Categories Buttons

    var buttonsSubCategories = $(".bl_catalogs__button"),
        active = "active";

    buttonsSubCategories.click(function () {
        $(this).parent(".bl_catalogs__item").toggleClass(active);
        $(this).siblings("ul").eq(0).slideToggle(400);
    });
//    Show Filters & Categories
    var buttonShowAllCatelogs = $(".js-button_catalogs"),
        catalogsAllArea = $(".bl_catalogs__firstLevel");


    var buttonShowAllFilters = $(".js-button_filters"),
        filtersAllArea = $(".bl_filters");


    sliderEffectForButtons(buttonShowAllCatelogs, catalogsAllArea, 500);
    sliderEffectForButtons(buttonShowAllFilters, filtersAllArea, 500);


///////// Filters Button
    var buttonFilterSection = $(".bl_filters__button");

    buttonFilterSection.on("click", function () {
        $(this).toggleClass("decor_filterLine decor_filterTriangle");
        $(this).next(".bl_filters__section").slideToggle(300);
    });


/// Pages button

    sliderEffectForButtons($(".btn_pages"), $(".nav_main__fullItems"), 500);

/// Offline Qestion
    var buttonShowOfflineQuestion = $(".bl_offlineQuestion_button"),
        buttonCloseOfflineQuestion = $(".bl_offlineQuestion__rollUp"),
        fieldOfflineQuestion = $(".bl_offlineQuestion__full");

    hideShowEffect(buttonShowOfflineQuestion, fieldOfflineQuestion);
    hideShowEffect(buttonCloseOfflineQuestion, fieldOfflineQuestion);


//// Footer Information buttons

    function footerButtonsInformation() {
        $(".bl_informations__title").on("click", function () {
            $(this).siblings(".bl_info").slideToggle(500);
        })
    }


/// buttons must work only  $(window).width() <=991px


    function liveScopeOfButtons() {

        if ($(window).width() <= 820) {
            footerButtonsInformation();

        } else {
            return false;
        }

    }

    liveScopeOfButtons();


    //// Main-slider

    $(".bl_mainSlider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: true,
        dots: true,
        autoplay: false,
        stopOnHover: true,
        // margin: 0,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            320: {
                items: 1
            }
        }
    });


// slider_popular

    $(".slider_popular").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        navText: true,
        dots: true,
        autoplay: false,
        stopOnHover: true,
        margin: 6,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 4
            },
            992: {
                items: 3,
                center: true
            },
            550: {
                dots: false,
                items: 2
            },
            320: {
                items: 1,
                dots: false,
                center: true
            }

        }
    });


////// slider_newProducts

    $(".slider_newProducts").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        navText: true,
        dots: true,
        autoplay: false,
        stopOnHover: true,
        margin: 6,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 4
            },
            992: {
                items: 3,
                center: true
            },
            550: {

                dots: false,
                items: 2
            },
            320: {
                dots: false,
                items: 1,
                center: true
            }

        }
    });

//    Slider Brands

    $(".slider_brands").owlCarousel({
        items: 6,
        loop: true,
        nav: true,
        navText: true,
        dots: false,
        autoplay: false,
        stopOnHover: true,
        margin: 62,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 6
            },
            992: {
                items: 4
            },
            550: {
                items: 3,
                center: true
            },
            320: {
                items: 1,
                center: true
            }

        }
    });

/////// additionalImages - Дополнительные изображения для товара:

    $(".bl_product__additionalImages").owlCarousel({
        items: 3,
        loop: true,
        nav: false,
        navText: true,
        dots: false,
        autoplay: false,
        stopOnHover: true,
        margin: 6,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 3
            },
            992: {
                items: 3
            },
            550: {
                items: 2
            },
            320: {
                items: 1,
                center: true
            }

        }
    });

//// slider_youViewed  - Вы смотрели:

function youViewedSlider() {

    var youViewedItems = $(".slider_youViewed .product_sliderCart__item").length,
        currentItems = 4,
        currentLoop;

    (youViewedItems > currentItems) ? (currentLoop = true) : (currentLoop = false);


    $(".slider_youViewed").owlCarousel({
        items: currentItems,
        loop: currentLoop,
        nav: true,
        navText: true,
        dots: false,
        autoplay: false,
        stopOnHover: true,
        margin: 0,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 4
            },
            992: {
                items: 3,
                center: true
            },
            550: {

                dots: false,
                items: 2
            },
            320: {
                dots: false,
                items: 1,
                center: true
            }

        }
    });

}

    youViewedSlider();

// ElevateZoom


    function mainPictureForProduct() {

        $('.product-galery__pic').attr('src', $('.prod-slider__item:first-child  img').attr('src'));

        $('.prod-slider__item').on('click', '.prod-slider__pic', function () {

            var currentSrc = $(this).attr('src');
            var currentSrcBig = currentSrc.split(".").join("-big.");

            $('.product-galery__mainImage').attr('src', currentSrc);
            $(".zoo-item").attr("data-zoo-image", currentSrcBig);

            zoomPictute();

        });

        zoomPictute();
    }

    mainPictureForProduct();


    ////////////////// ZOOM PICTURE

    function zoomPictute() {
        $('.zoo-item').elevateZoom({
            zoomType: "inner",
            cursor: "crosshair"
        });
    }


////// Product quantity

    var quantityProduct = $(".block_quantity__input"),
        plusProduct = $(".block_quantity__plus"),
        minusProduct = $(".block_quantity__minus");

    plusProduct.on("click", function () {
        quantityProduct.val(Number(quantityProduct.val()) + 1);
    });

    minusProduct.on("click", function () {

        if (quantityProduct.val() > 1) {
            quantityProduct.val(Number(quantityProduct.val()) - 1);
        }
        else {
            quantityProduct.val(1);
        }
    });

    leaveOnlyNumber(quantityProduct);


    function leaveOnlyNumber(inputField) {
        inputField.on('keyup', function () {
            var val = $(this).val();
            var new_str = val.replace(/[^0-9]/gim, '');
            $(this).val(new_str);
        });

        inputField.on('blur', function () {
            var val = $(this).val();
            var new_str = val.replace(/[^0-9]/gim, '');

            if (val === "") {
                new_str = 1;
            }
            $(this).val(new_str);
        });
    }


// Ancor

    scrollAncor($(".bl_ancor"));
    scrollAncor($(".ancor_addRewiew"));

     function scrollAncor(btn){
         btn.on("click", "a", function (event) {
             event.preventDefault();
             var id = $(this).attr('href'),
                 top = $(id).offset().top;
             $('body,html').animate({scrollTop: top}, 500);
         });
     }


// FILTER for telephone number

    var telephonseInput = $("input[type='tel']");
    telephonseInput.mask("+38 (0" + "99) 999-99-99", {placeholder: "+38 (0__) ___+__+__"});


////////////////// POPUPS LOGIC

    function popupWindowShow(btn, field) {
        btn.on("click", function () {

            field.removeClass("hidden");
            blackWrapper.removeClass("hidden");
            blackWrapper.animate({opacity: 0.6}, 300);
        });
    }

    function closePopupWindow(btn, field) {
        btn.on("click", function () {
            field.addClass("hidden");
            blackWrapper.addClass("hidden");
            blackWrapper.animate({opacity: 0}, 400);
        })
    }

 //// BasketShop
    $(".bl_bonus__label input").on( "click", function() {

            if($(this).prop('checked') === true) {
                $(".bl_bonus__button").addClass("bl_bonus__button_active")
            }
    });





/// POPUP BIFORE ADD TO SHOPBAG

    function popupWindowBiforeAddToShopBag() {

        var TESTBUTTON = $(".TEST_BUTTON");

        var popupWindow = $(".popup_likeShopbag"),
            buttonClose = $(".popup_likeShopbag__close"),
            buttonContinueBuying = $(".popup_likeShopbag__continueBuying");

        popupWindowShow(TESTBUTTON, popupWindow);

        closePopupWindow(buttonClose, popupWindow);
        closePopupWindow(buttonContinueBuying, popupWindow);
        closePopupWindow(blackWrapper, popupWindow);

    }

    popupWindowBiforeAddToShopBag();

////////// CallBack PopUp + BuyOneClick

    function popupWindowCallBack() {
        var buttonCallback = $(".btn_callBack"),
            buttonBuyOneClick = $(".button_buyOneClick"),
            fieldCallBack = $(".bl_callback"),
            buttonClose = $(".bl_callback__close");

        popupWindowShow(buttonCallback, fieldCallBack);
        popupWindowShow(buttonBuyOneClick, fieldCallBack);
        closePopupWindow(buttonClose, fieldCallBack);
        closePopupWindow(blackWrapper, fieldCallBack);


    }

    popupWindowCallBack();


//// Succsess PopUp


    function popupWindowSuccsess() {

        var fieldSuccess = $(".bl_success");

        closePopupWindow(blackWrapper, fieldSuccess);
        closePopupWindow(fieldSuccess, fieldSuccess);
    }

    popupWindowSuccsess();


////// Product quantity


// RESIZE WINDOW

    var body = $("body");

    var iconMenu = $(".open-menu-min"),
        iconMenu_close = "close-menu-min";

    var fullNavigation = $(".bl_fullNavigation"),
        mobileNavigation = "bl_fullNavigation_mobile",

        blockNavigation = $(".bl_nav"),
        menuMobile = "bl_nav__mobile",
        closeMenu = "closeMenu";


    $(window).resize(function () {

        var fieldRubrics = $(".bl_fullCategories__field"),
            fieldCategories = $(".bl_catalogProducts__full"),

            fieldInformation = $(".code_information__full"),
            fieldContacts = $(".code_contacts__full"),
            fieldAdress = $(".code_adress__full");


        // var buttonsWorkRight = liveScopeOfButtons();      ///////////// Эта хрень не работает =(


        if (body.width() >= 1200) {


            fullNavigation.removeClass(mobileNavigation);
            blockNavigation.removeClass(menuMobile);
            blockNavigation.removeClass(closeMenu);
        } else {
            fullNavigation.addClass(mobileNavigation);


            blockNavigation.addClass(menuMobile);
            blockNavigation.addClass(closeMenu);

            iconMenu.removeClass(iconMenu_close);


        }


        if (body.width() >= 992) {


            // fieldRubrics.css({"display": "block"});
            // fieldCategories.css({"display": "block"});
            // fieldInformation.css({"display": "block"});
            // fieldContacts.css({"display": "block"});
            // fieldAdress.css({"display": "block"});

            // $(".bl_filters").css({"display": "block"});
            // $(".bl_filters__productsFilters").css({"display": "block"});

        } else {
            // fieldRubrics.css({"display": "none"});
            // fieldCategories.css({"display": "none"});
            // fieldInformation.css({"display": "none"});
            // fieldContacts.css({"display": "none"});
            // fieldAdress.css({"display": "none"});


            // $(".bl_filters").css({"display": "none"});
            // $(".bl_filters__productsFilters").css({"display": "none"});

        }


    });


})



