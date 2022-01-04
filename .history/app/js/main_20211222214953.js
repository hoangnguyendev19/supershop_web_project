window.addEventListener("load", function() {
    // Toggle-Cart
    const headerBuyIcon = document.querySelector(".header__buy-icon");
    const headerBuyCart = document.querySelector(".header__buy-cart");
    headerBuyIcon.addEventListener("click", function() {
        headerBuyCart.classList.toggle("is-show");
    })
    document.addEventListener("click", function(event) {
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
                                <span class="view__name">L</span>
                                <i class="fas fa-angle-down"></i>
                                <ul class="view__info-list view__size">
                                    <li class="view__info-item">M</li>
                                    <li class="view__info-item">X</li>
                                    <li class="view__info-item">XL</li>
                                    <li class="view__info-item">XXL</li>
                                </ul>
                            </div>
                        </div>
                        <div class="view__info-size">
                            <span class="view__info-name">Color:</span>
                            <div class="view__info-option">
                                <span class="view__name">Red</span>
                                <i class="fas fa-angle-down"></i>
                                <ul class="view__info-list view__color">
                                    <li class="view__info-item">Black</li>
                                    <li class="view__info-item">Blue</li>
                                    <li class="view__info-item">Yellow</li>
                                    <li class="view__info-item">Orange</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="view__info-count">
                        <div class="view__info-number">0</div>
                        <div class="view__info-change">
                            <i class="view__info-increase fas fa-angle-up"></i>
                            <i class="view__info-decrease fas fa-angle-down"></i>
                        </div>
                    </div>
                    <div class="view__info-bottom">
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
        // Counter
        const viewInfoIncrease = document.querySelector(".view__info-increase");
        const viewInfoDecrease = document.querySelector(".view__info-decrease");
        const viewInfoNumber = document.querySelector(".view__info-number");
        let countValue = parseInt(viewInfoNumber.textContent);
        viewInfoIncrease.addEventListener("click", function() {
            if (countValue == 20) return 20;
            countValue++;
            viewInfoNumber.textContent = countValue;
        })
        viewInfoDecrease.addEventListener("click", function() {
            if(countValue == 0) return 0;
            countValue--;
            viewInfoNumber.textContent = countValue;
        })
        // Dropdown
        const viewInfoList = document.querySelectorAll(".view__info-list");
        const viewInfoOption = document.querySelectorAll(".view__info-option");
        const viewSize = document.querySelector(".view__size");
        const viewColor = document.querySelector(".view__color");
        viewSize.forEach(item => item.addEventListener("click", function(event) {
            // console.log(event.target);
            viewInfoList.forEach(item => item.classList.toggle("is-appear"));
        }));
    }));
    document.body.addEventListener("click", function(event) {
        const view = document.querySelector(".view");
        if(event.target.matches(".view__close")) {
            view.parentNode.removeChild(view);
        } else if(event.target.matches(".view")) {
            view.parentNode.removeChild(view);
        }
    })
})
