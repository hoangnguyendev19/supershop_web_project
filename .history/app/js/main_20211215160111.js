window.addEventListener("load", function() {
    const headerBuyIcon = document.querySelector(".header__buy-icon");
    const headerBuyCart = document.querySelector(".header__buy-cart");
    headerBuyIcon.addEventListener("click", function() {
        headerBuyCart.classList.toggle("is-show");
    })
    document.addEventListener("click", function(event) {
        console.log(event.target);
        if(!headerBuyCart.contains(event.target) && !event.target.matches("header__buy-icon")) {
            headerBuyIcon.nextElementSibling.classList.toggle("is-show");
        }
    })
})