window.addEventListener("load", function() {
    // Toggle-Cart
    const headerBuyIcon = document.querySelector(".header__buy-icon");
    const headerBuyCart = document.querySelector(".header__buy-cart");
    headerBuyIcon.addEventListener("click", function() {
        headerBuyCart.classList.toggle("is-show");
    })
    document.addEventListener("click", function(event) {
        console.log(event.target);
        if(!headerBuyCart.contains(event.target) && !event.target.matches(".header__buy-icon")) {
            headerBuyCart.classList.remove("is-show");
        }
    })
    // Toggle-Menu
    const headerBarNav = document.querySelector(".header__bar-nav");
    const headerBarMenu = document.querySelector(".header__bar-menu");
    const headerBarClosed = document.querySelector(".header__bar-closed");
    headerBarNav.addEventListener("click", function() {
        headerBarMenu.classList.add("is-active");
    })
    headerBarClosed.addEventListener("click", function() {
        headerBarMenu.classList.remove("is-active");
    })
    document.addEventListener("click", function(event) {
        if(!headerBarMenu.contains(event.target) && !event.target.matches(".header__bar-nav")) {
            headerBarMenu.classList.remove("is-active");
        }
    })
    // Slick Slider
    $(".banner__slider").ready(function(){
        $('.banner__item').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    });
})