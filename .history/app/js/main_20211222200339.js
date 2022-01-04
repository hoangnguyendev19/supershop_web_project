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
    const modalZoom = document.querySelectorAll(".arrivals__zoom");
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
    // Modal View
    const templateView = `
    <div class="view">
        <div class="view__content">
            <i class="fa fa-times view__close"></i>
            <div class="view__box">
                <div class="view__image">
                    <div class="view__image-top">
                        <img src="./app/images/img-arrivals-model-1.jpg" alt="">
                    </div>
                    <div class="view__image-bottom">
                        <img class="view__image-img" src="./app/images/img-arrivals-model-3.jpg" alt="">
                        <img class="view__image-img" src="./app/images/img-arrivals-model-4.jpg" alt="">
                        <img class="view__image-img" src="./app/images/img-arrivals-model-5.jpg" alt="">
                    </div>
                </div>
                <div class="view__info">
                    <h2 class="view__info-title">Cool Green Dress With Red Bell</h2>
                    <div class="view__info-cost">
                        <span class="view__info-sale">$47.00</span>
                        <strike class="view__info-price">$62.00</strike>
                        <span class="view__info-stock">Availability : In Stock</span>
                    </div>
                    <p class="view__info-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, omnis quaerat saepe iure ut itaque quidem dolore temporibus consequuntur repellat.</p>
                    <div class="view__info-setup">
                        <div class="view__info-size">
                            <span class="view__info-name">Size:</span>
                            <div class="view__info-option">
                                <span>L</span>
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <div class="view__info-size">
                            <span class="view__info-name">Color:</span>
                            <div class="view__info-option">
                                <span>Red</span>
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                    <div class="view__info-bottom">
                        <div class="view__info-count">
                            <div class="view__info-number">0</div>
                            <div class="view__info-change">
                                <i class="view__info-increase fas fa-angle-up"></i>
                                <i class="view__info-decrease fas fa-angle-down"></i>
                            </div>
                        </div>
                        <a href="#" class="view__info-cart">add to cart</a>
                        <a href="#" class="view__info-more">More details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    const modalView = document.querySelectorAll(".modal__view");
    modalView.forEach(item => item.addEventListener("click", function() {
        arrivals.insertAdjacentHTML("beforeend", templateView);
    }));
    document.body.addEventListener("click", function(event) {
        // console.log(event.target);
        if(event.target.matches(".view__close")) {
            arrivals.classList.remove("view");
        }
    })
})
