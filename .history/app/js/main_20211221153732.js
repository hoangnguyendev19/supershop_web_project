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
    $(document).ready(function(){
        $('.banner__slider').slick({
            // dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-chevron-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-chevron-right' aria-hidden='true'></i></button>"
        });
    });
    // Modal Zoom
    const templateZoom = `
    <div class="modal">
        <div class="modal__content">
            <i class="fa fa-times modal__close"></i>
            <img class="modal__image" src="./app/images/img-arrivals-model-1.jpg" alt="">
        </div>
    </div>
    `;
    const arrivals = document.querySelector(".arrivals");
    const modalZoom = document.querySelectorAll(".modal__zoom");
    modalZoom.forEach(item => item.addEventListener("click", function() {
        arrivals.insertAdjacentHTML("beforeend", templateZoom);
    }));
    document.body.addEventListener("click", function(event) {
        if(event.target.matches(".modal__close")) {
            const modal = event.target.parentNode.parentNode;
            modal.parentNode.removeChild(modal);
        } else if(event.target.matches(".modal")) {
            event.target.parentNode.removeChild(event.target);
        }
    })

})