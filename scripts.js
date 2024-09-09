onload = function() {
    /*const mealImg = document.querySelectorAll(".prod-list__img");
    const mealImgTab = document.querySelectorAll(".prod-list__img-tab");
    const mealImgMob = document.querySelectorAll(".prod-list__img-mob");
    const addCart = document.querySelectorAll(".prod-list__cart-button");
    const quant = document.querySelectorAll(".prod-list__quant-button");
    const category = document.querySelectorAll(".prod-list__category");
    const name = document.querySelectorAll(".prod-list__name");
    const price = document.querySelectorAll(".prod-list__price-num");
    const count = document.querySelector(".prod-list__cart-count");
    const total = document.querySelector(".prod-list__total-price");
    const totalWrap = document.querySelector(".prod-list__total-wrap");
    const confirmWrap = document.querySelector(".prod-list__confirm-wrap");
    const cart = document.querySelector(".prod-list__cart");
    const cartHalf = document.querySelector(".prod-list__cart-half");
    const confirmButton = document.querySelector(".prod-list__confirm");
    const cartImage = document.querySelector(".prod-list__cart-image");
    const note = document.querySelector(".prod-list__items-note");
    const cartHeader = document.querySelector(".prod-list__cart-header");
    const prodIncrease = document.querySelectorAll(".prod-list__increase");
    const prodDecrease = document.querySelectorAll(".prod-list__decrease");
    const prodInner = document.querySelector(".prod-list__prod-inner");
    const listItem = document.querySelectorAll(".prod-list__item-list");
    const listName = document.querySelectorAll(".prod-list__item-h3");
    const listPrice = document.querySelectorAll(".prod-list__item-price-number");
    const listQuant = document.querySelectorAll(".prod-list__item-quant");
    const listTotal = document.querySelectorAll(".prod-list__item-price-total");
    const removeItem = document.querySelectorAll(".prod-list__remove-item");*/

    const tester = document.querySelector(".prod-list__head-h1");
    const thumb = document.querySelector(".prod-list__thumbnail");

    const count = document.querySelector(".prod-list__cart-count");
    let countNum = 0;
    const total = document.querySelector(".prod-list__total-price");
    let totalNum = 0;

    //arrays to access created elements
    let incArr = [];
    let decArr = [];
    let addArr = [];
    let buttQuantArr = [];
    let cartDivArr = [];
    let removeArr = [];
    let itemQuantArr = [];
    let itemTotArr = [];

    let incArr2 = []; ///////////////////////////test


    //generate products and styling
    const generateProducts = () => {
        for (let i = 0; i < itemStyles.length; i++) {

            //adding the main product container div
            let prodCont = document.createElement("div");
            prodCont.classList.add("prod-list__prod-cont");
            document.querySelector(".prod-list__prod-inner").appendChild(prodCont);

            //creating the add to cart button div
            let cartButton = document.createElement("div");
            cartButton.classList.add("prod-list__cart-button", "prod-list__cart-button--top");
            cartButton.setAttribute("role", "button");
            cartButton.setAttribute("data-index", i);
            addArr.push(cartButton);
            prodCont.appendChild(cartButton);

            let cartButtonImg = document.createElement("img");
            cartButtonImg.src = 'assets/images/icon-add-to-cart.svg';
            cartButtonImg.setAttribute("alt", "add to cart");
            cartButtonImg.classList.add("prod-list__add-cart");
            cartButton.appendChild(cartButtonImg);

            let cartButtonH2 = document.createElement("h2");
            cartButtonH2.classList.add("prod-list__cart-h2");
            cartButtonH2.innerHTML = 'Add to Cart';
            cartButton.appendChild(cartButtonH2);

            //creating the increase/decrease button div
            let quantButton = document.createElement("div");
            quantButton.classList.add("prod-list__quant-button", "prod-list__quant-button--top");
            prodCont.appendChild(quantButton);

            //creating the decrease button
            let quantWrap = document.createElement("div");
            quantWrap.classList.add("prod-list__quant-wrap");
            quantButton.appendChild(quantWrap);

        
            let decQuant = document.createElement("img");
            decQuant.src = 'assets/images/icon-decrement-quantity.svg';
            decQuant.classList.add("prod-list__decrease");
            decQuant.setAttribute("alt", "decrease quantity");
            decQuant.setAttribute("role", "button");
            decQuant.setAttribute("data-index", i);
            decArr.push(decQuant);
            quantWrap.appendChild(decQuant);

            decQuant.addEventListener("mousedown", function() {
                decQuant.src = 'assets/images/icon-decrement-quantity-active.svg';
            })

            decQuant.addEventListener("mouseup", function() {
                decQuant.src = 'assets/images/icon-decrement-quantity.svg';
            })

            //creating the quantity number in the quantity button
            let buttonQuant = document.createElement("SPAN");
            buttonQuant.classList.add("prod-list__quant");
            buttonQuant.innerHTML = 5;
            buttonQuant.setAttribute("data-index", i);
            buttQuantArr.push(buttonQuant);
            quantButton.appendChild(buttonQuant);

            //creating the increase button
            let quantWrapRight = document.createElement("div");
            quantWrapRight.classList.add("prod-list__quant-wrap", "prod-list__quant-wrap--right");
            quantButton.appendChild(quantWrapRight);

            let incQuant = document.createElement("img");
            incQuant.src = 'assets/images/icon-increment-quantity.svg';
            incQuant.classList.add("prod-list__increase");
            incQuant.setAttribute("alt", "increase quantity");
            incQuant.setAttribute("role", "button");
            incQuant.setAttribute("data-index", i);
            incArr.push(incQuant);
            quantWrapRight.appendChild(incQuant);

            incQuant.addEventListener("mousedown", function() {
                incQuant.src = 'assets/images/icon-increment-quantity-active.svg';
            })

            incQuant.addEventListener("mouseup", function() {
                incQuant.src = 'assets/images/icon-increment-quantity.svg';
            })

            //adding the product images
            let imgWrap = document.createElement("div");
            imgWrap.classList.add("prod-list__img-wrap");
            prodCont.appendChild(imgWrap);

            let imageReg = document.createElement("img");
            imageReg.classList.add("prod-list__img");
            imageReg.src = itemStyles[i].image.desktop;
            imageReg.setAttribute("alt", itemStyles[i].name);
            imgWrap.appendChild(imageReg);

            let imageTab = document.createElement("img");
            imageTab.classList.add("prod-list__img-tab");
            imageTab.src = itemStyles[i].image.tablet;
            imageTab.setAttribute("alt", itemStyles[i].name);
            imgWrap.appendChild(imageTab);

            let imageMob = document.createElement("img");
            imageMob.classList.add("prod-list__img-mob");
            imageMob.src = itemStyles[i].image.mobile;
            imageMob.setAttribute("alt", itemStyles[i].name);
            imgWrap.appendChild(imageMob);

            //adding product descriptions
            let prodDesc = document.createElement("div");
            prodDesc.classList.add("prod-list__desc");
            prodCont.appendChild(prodDesc);

            let prodCat = document.createElement("p");
            prodCat.classList.add("prod-list__category");
            prodCat.innerHTML = itemStyles[i].category;
            prodDesc.appendChild(prodCat);

            let prodName = document.createElement("h2");
            prodName.classList.add("prod-list__name");
            prodName.innerHTML = itemStyles[i].name;
            prodDesc.appendChild(prodName);

            let prodPrice = document.createElement("h2");
            prodPrice.classList.add("prod-list__price");
            prodPrice.innerHTML = itemStyles[i].price.toFixed(2);
            prodDesc.appendChild(prodPrice);
        } 
    }

    generateProducts();

    const addToCart = () => {
        for (let i = 0; i < addArr.length; i++) {
            addArr[i].addEventListener("click", function() {

                document.querySelector(".prod-list__cart-image").style.display = 'none';
                document.querySelector(".prod-list__items-note").style.display = 'none';
                document.querySelector(".prod-list__total-wrap").style.display = 'flex';
                document.querySelector(".prod-list__confirm-wrap").style.display = 'flex';
                document.querySelectorAll(".prod-list__cart-button")[i].style.display = 'none';
                document.querySelectorAll(".prod-list__quant-button")[i].style.display = 'flex';

                //add to cart total quantity
                countNum ++;
                count.innerHTML = countNum;
                totalNum += itemStyles[addArr[i].dataset.index].price;
                total.innerHTML = totalNum.toFixed(2);

                //create cart item 
                let cartItem = document.createElement("div");
                cartItem.classList.add("prod-list__item-list");
                cartItem.setAttribute("data-index", i);
                cartDivArr.push(cartItem);
                document.querySelector(".prod-list__cart").appendChild(cartItem);

                let cartLeft = document.createElement("div");
                cartLeft.classList.add("prod-list__item-left");
                cartItem.appendChild(cartLeft);

                let itemName = document.createElement("h3");
                itemName.classList.add("prod-list__item-h3");
                itemName.innerHTML = itemStyles[i].name;
                cartLeft.appendChild(itemName);

                let leftBottom = document.createElement("div");
                leftBottom.classList.add("prod-list__item-left-bottom");
                cartLeft.appendChild(leftBottom);

                let itemQuant = document.createElement("p");
                itemQuant.classList.add("prod-list__item-quant");
                itemQuant.innerHTML = 1;
                itemQuant.setAttribute("data-index", i);
                itemQuantArr.push(itemQuant);
                leftBottom.appendChild(itemQuant);

                let itemPrice = document.createElement("p");
                itemPrice.classList.add("prod-list__item-price");
                itemPrice.innerHTML = itemStyles[i].price.toFixed(2);
                leftBottom.appendChild(itemPrice);

                let itemPriceTotal = document.createElement("p");
                itemPriceTotal.classList.add("prod-list__item-price-total");
                itemPriceTotal.innerHTML = itemStyles[i].price.toFixed(2);
                itemPriceTotal.setAttribute("data-index", i);
                itemTotArr.push(itemPriceTotal);
                leftBottom.appendChild(itemPriceTotal);

                let itemRight = document.createElement("div");
                itemRight.classList.add("prod-list__item-right");
                cartItem.appendChild(itemRight);

                let removeItem = document.createElement("img");
                removeItem.classList.add("prod-list__remove-item");
                removeItem.setAttribute("alt", "remove from cart");
                removeItem.setAttribute("data-index", i);
                removeItem.src = src='assets/images/icon-remove-item.svg';
                removeArr.push(removeItem);
                itemRight.appendChild(removeItem);

                removeItem.addEventListener("mousedown", function() {
                    removeItem.src = 'assets/images/icon-remove-item-active.svg';
                })

                removeItem.addEventListener("mouseup", function() {
                    removeItem.src = 'assets/images/icon-remove-item.svg';
                })
            })
        }
    }

   addToCart();

   

   const changeQuantity = () => {
    for (let i = 0; i < incArr.length; i++) {
        let quantNum = 1;
        incArr[i].addEventListener("click", function() {
            let index = incArr[i].dataset.index;
            let item = itemQuantArr.find(item => item.dataset.index === index);
            let price = itemTotArr.find(price => price.dataset.index === index);
            if (item) {
                quantNum ++;
                item.innerHTML = quantNum;
            }
            if (price) {
                let priceNum = itemStyles[index].price;
                priceNum *= quantNum;
                price.innerHTML = priceNum.toFixed(2);
            }
            countNum ++;
            count.innerHTML = countNum;
            totalNum += itemStyles[index].price;
            total.innerHTML = totalNum.toFixed(2);
        });

        decArr[i].addEventListener("click", function() {
            let index = decArr[i].dataset.index;
            let item = itemQuantArr.find(item => item.dataset.index === index);
            let price = itemTotArr.find(price => price.dataset.index === index);
            if (item && quantNum > 1) {
                quantNum --;
                item.innerHTML = quantNum;
                countNum --;
                count.innerHTML = countNum;
                totalNum -= itemStyles[index].price;
                total.innerHTML = totalNum.toFixed(2);
            }
            if (price) {
                let priceNum = itemStyles[index].price * quantNum;
                price.innerHTML = priceNum.toFixed(2);
            }
            
        });
    }
    
};

changeQuantity();

const removeItems = () => {
    if (removeArr.length > 0) { // Check if removeArr has elements
        removeArr[0].addEventListener("click", function() {
            tester.innerHTML = 'hey';
        });
    }
 };

removeItems();




   




    

    


    



   


























}