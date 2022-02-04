let header = document.getElementById("product-size-buttons");
let btns = document.getElementsByClassName("size-button");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

let countNum = 1;
let minusBtn = document.getElementById("minus-btn");
let count = document.getElementById("count");
let plusBtn = document.getElementById("plus-btn");

count.innerHTML = countNum;

minusBtn.addEventListener("click", () => {
    if(countNum > 1) {
        countNum -= 1;
        count.innerHTML = countNum;      
    }
});

plusBtn.addEventListener("click", () => {
	if(countNum < 3) {
    countNum += 1;
	count.innerHTML = countNum;
    }
});

let countCart = 0;
let countCartClicks = document.getElementById("button-add-cart");
let countBag = document.getElementById("header-bag-counter");

countBag.innerhtml = countCart;


countCartClicks.addEventListener("click", () => {
    if(countCart < 3) {
        countCart++;
        countBag.innerHTML = countCart;
    }
});

let countBuy = 0;
let countBuyClicks = document.getElementById("button-buy");

countBag.innerhtml = countBuy;

countBuyClicks.addEventListener("click", () => {
    if(countBuy < 3) {
        countBuy++;
        countBag.innerHTML = countBuy;
    }
});

$(document).ready(function(){
    $('.js-banner-img').slick();

    $('.js-shelf').slick({
        infinite: true,
        slidesToShow: 6,
      });
      
});
                    
