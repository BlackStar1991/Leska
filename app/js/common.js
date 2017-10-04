$(document).ready(function () {

//MENU

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


/// buttons must work only  $(window).width() <=991px


    function liveScopeOfButtons() {

        if ($(window).width() <= 991) {

            // sliderEffectForButtons(buttonRubrics, fieldRubrics, 600);

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
                items: 2
            },
            320: {
                items: 1,
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
                items: 2
            },
            320: {
                items: 1,
                center: true
            }

        }
    });

//    probuct_image__slider - SLIDER for Product

    $(".product_image__slider").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        navText: false,
        dots: false,

        mouseDrag: false,
        touchDrag: false,

        autoplay: false,
        stopOnHover: true,
        margin: 15,
        center: true,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 3
            },
            550: {
                items: 2,
                center: false
            },
            320: {
                items: 1,
                center: true
            }

        }
    });

/////// slider_withThisProductBuy - С этим товаром покупают:

    $(".slider_withThisProductBuy").owlCarousel({
        items: 4,
        loop: true,
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
                items: 2
            },
            320: {
                items: 1,
                center: true
            }

        }
    });

//// slider_youViewed  - Вы смотрели:

    $(".slider_youViewed").owlCarousel({
        items: 4,
        loop: true,
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
                items: 2
            },
            320: {
                items: 1,
                center: true
            }

        }
    });


//// Img for main product slider

    $('.product_image__slider').on("click", ".product_image__sliderImg", function () {
        var currentSrc = $(this).attr('src');

        var hrefForFancybox = currentSrc.split(".").join("-big.");


        $('.product_image__img').attr('src', currentSrc);

        // add Big photo for fancybox  ///////////////////////////////
        $(".fancybox-animated").attr("href", hrefForFancybox);


    });


    // SLIDER for categories show

    function sliderShowForAllCategories() {
//////Categories Filter

        var sliderName = $(".code_sliderName");

        sliderName.on("click", function () {
            $(".bl_filters__caterogyName_active").removeClass("bl_filters__caterogyName_active");
            sliderName.removeClass("bl_filters__caterogyName_active");
            $(this).addClass("bl_filters__caterogyName_active");

            $(this).next().toggleClass("hidden");
            $(this).toggleClass("decor_triangle__active");

        });

        var filterItem = $(".bl_filters__item");

        filterItem.on("click", function () {
            filterItem.removeClass("decor_circle");
            $(this).addClass("decor_circle");

            $(".bl_filters__subName_active").removeClass("bl_filters__subName_active");
            $(this).children().addClass("bl_filters__subName_active");
        });

//////// Characteristics filter

        var filterName = $(".code_filterName");

        filterName.on("click", function () {

            $(this).next().toggleClass("hidden");
            $(this).toggleClass("decor_leftTriangle__active");
        });
    }


    $(".bl_filter__label").on("click", function (event) {

        $(this).find(".filter_text").toggleClass("filter_text__active");

        if ($(this).find(".bl_filter__checkbox").prop("checked") === true) {
            $(this).find(".bl_filter__checkbox").prop("checked", false);
        } else {
            $(this).find(".bl_filter__checkbox").prop("checked", true);
        }


        event.preventDefault();

    });


    sliderShowForAllCategories();


////// GRID / LIST view - switch

    var buttonGridView = $(".code_grid"),
        buttonListView = $(".code_list"),

        classGrid = "view_grid__STYLE",
        classList = "view_list__STYLE",

        bl_fullProducts__item = $(".bl_fullProducts__item"),

        code_listView1 = $(".code_listView1"),
        code_listView2 = $(".code_listView2"),
        code_listView3 = $(".code_listView3"),
        code_listView4 = $(".code_listView4"),


        allProducts = $(".bl_products");

    buttonGridView.on("click", function () {
        allProducts.removeClass(classList);
        allProducts.addClass(classGrid);

        bl_fullProducts__item.addClass("col-md-4 col-sm-6 col-xs-12");
        code_listView1.removeClass("col-xs-12");
        code_listView2.removeClass("col-xs-4");
        code_listView3.removeClass("col-xs-8");
        code_listView4.removeClass("bl_fullProducts__listStyle");
    });

    buttonListView.on("click", function () {
        allProducts.removeClass(classGrid);
        allProducts.addClass(classList);

        bl_fullProducts__item.removeClass("col-md-4 col-sm-6 col-xs-12");
        code_listView1.addClass("col-xs-12");
        code_listView2.addClass("col-xs-4");
        code_listView3.addClass("col-xs-8");
        code_listView4.addClass("bl_fullProducts__listStyle");


    });


// Ancor to top

    $(".bl_ancor").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

// FILTER for telephone number

    var telephonseInput = $("input[type='tel']");
    telephonseInput.mask("+38 (0" + "99) 999-99-99", {placeholder: "+38 (0__) ___+__+__"});


/// POPUP BIFORE ADD TO SHOPBAG

    function popupWindowBiforeAddToShopBag() {

        var TESTBUTTON = $(".TEST_BUTTON");

        var popupWindow = $(".popup_likeShopbag"),
            buttonClose = $(".popup_likeShopbag__close"),
            buttonContinueBuying = $(".popup_likeShopbag__continueBuying");


        TESTBUTTON.on("click", function () {

            popupWindow.removeClass("hidden");
            blackWrapper.removeClass("hidden");
            blackWrapper.animate({opacity: 0.6}, 300);
        });

        function closePopupWindow(btn) {
            btn.on("click", function () {
                popupWindow.addClass("hidden");
                blackWrapper.addClass("hidden");
                blackWrapper.animate({opacity: 0}, 400);
            })
        }

        closePopupWindow(buttonClose);
        closePopupWindow(buttonContinueBuying);
        closePopupWindow(blackWrapper);


    }

    popupWindowBiforeAddToShopBag();


/// Success Buying
//  Если пользователю удалось отправить номер своего мобильного продавцу должна отрабатывать эта функция


    function successfulPurchasePassed() {

        var blSuccsess = $(".bl_successBuying"),
            buttonClose = $(".bl_successBuying__close");


        setTimeout(showBlock, 200);

        buttonClose.on("click", hideBlock);
        blackWrapper.on("click", hideBlock);


        function showBlock() {

            blackWrapper.removeClass("hidden");
            blackWrapper.animate({opacity: 0.6}, 300);

            blSuccsess.removeClass("hidden");
            blSuccsess.removeClass("bounceOutUp");
            blSuccsess.addClass("animated bounceInDown");
        }

        function hideBlock() {
            blSuccsess.removeClass("bounceInDown");
            blSuccsess.addClass("bounceOutUp");
            blackWrapper.animate({opacity: 0}, 400);


            setTimeout(function () {
                blackWrapper.addClass("hidden");
                blSuccsess.addClass("hidden");
            }, 1000);


        }


    }


    $(".btn_buy__send").on("click", successfulPurchasePassed); //// Заменить нажатие на кнопку на обработку события


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
            quantityProduct.val(Number(quantityProduct.val()) - 1);
        }
        else {
            quantityProduct.val(1);
        }
    });


})

// Showed ancor only when scrolling > scrineSize

// $(window).scroll(function () {
//
//     var ancorFish = $(".bl_ancor"),
//         windowHeight = $(window).height() / 2;
//
//     if ($(this).scrollTop() > windowHeight) {
//
//         ancorFish.removeClass("hidden");
//
//     } else {
//         ancorFish.addClass("hidden");
//
//     }
//
// });


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
        fieldRubrics.css({"display": "block"});
        fieldCategories.css({"display": "block"});
        fieldInformation.css({"display": "block"});
        fieldContacts.css({"display": "block"});
        fieldAdress.css({"display": "block"});

        // $(".bl_filters").css({"display": "block"});
        // $(".bl_filters__productsFilters").css({"display": "block"});


        return false;


    } else {
        fieldRubrics.css({"display": "none"});
        fieldCategories.css({"display": "none"});
        fieldInformation.css({"display": "none"});
        fieldContacts.css({"display": "none"});
        fieldAdress.css({"display": "none"});


        // $(".bl_filters").css({"display": "none"});
        // $(".bl_filters__productsFilters").css({"display": "none"});

    }


});


$(window).resize();



