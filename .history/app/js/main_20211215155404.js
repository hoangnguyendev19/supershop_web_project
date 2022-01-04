window.addEventListener("load", function() {
    const headerBuyIcon = document.querySelector(".header__buy-icon");
    // const headerBuyCart = document.querySelector(".header__buy-cart")
    headerBuyIcon.addEventListener("click", function() {
        headerBuyIcon.nextElementSibling.classList.toggle("is-show");
    })
    document.addEventListener("click", function(event) {
        console.log(event.target);
        if(!event.targer.matches("header__buy-icon")) {
            headerBuyIcon.nextElementSibling.classList.remove("is-show");
        }
    })
})