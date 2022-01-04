window.addEventListener("load", function() {
    const headerBuyIcon = document.querySelector(".header__buy-icon");
    // const headerBuyCart = document.querySelector(".header__buy-cart")
    headerBuyIcon.addEventListener("click", function(event) {
        headerBuyIcon.nextElementSibling.classList.toggle("is-show");
        console.log(event.target);
        // if(event.targer.contains(event.target)) {
        //     headerBuyIcon.nextElementSibling.classList.remove("is-show");
        // }
    })
})