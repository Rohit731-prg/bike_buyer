let manuOpen = 0;
let cartCount = 0;
let wishListCount = 0;
let imgCount = 0;
const manu = document.getElementById('manu');
const rightImgMove = document.getElementById('right-img-arrow');
const leftImgMove = document.getElementById('left-img-arrow');
const cart = document.querySelectorAll('#cart-item');
const wishList = document.querySelectorAll('#wishList');
const sideberManus = document.querySelectorAll('.sideber-manus');
const cartDisplay = document.getElementById('cart-display');
const wishListDisplay = document.getElementById('wishList-display');
const searchBtn = document.getElementById('search-btn');

const MainImgs = {
    0 : './Photos/bikes.jpg',
    1 : './Photos/bikes1.jpg',
    2 : './Photos/bikes2.jpg',
    3 : './Photos/bikes3.jpg',
}
setInterval(() => {
    if(imgCount < 3) {
        imgCount++;
        updateMainImg(imgCount);
    }
    else {
        imgCount = 0;
        updateMainImg(imgCount);
    }
}, 3000)

const updateMainImg = (imgCount) => {
    document.getElementById('main-img').src = MainImgs[imgCount];
}
rightImgMove.addEventListener('click' , function() {
    if(imgCount >= 3) {
        imgCount = 0;
        updateMainImg(imgCount);
    }
    else {
        imgCount++;
        updateMainImg(imgCount);
    }
})
leftImgMove.addEventListener('click' , function() {
    if(imgCount <= 0) {
        imgCount = 3;
        updateMainImg(imgCount);
    }
    else {
        imgCount--;
        updateMainImg(imgCount);
    }
})

manu.addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('unhide');
    if(manuOpen == 0) {
        document.querySelector('.main-content').style.opacity = '0.3';
        manu.innerHTML = '<i class="fa-solid fa-x"></i>';
        manuOpen = 1;
    }
    else {
        document.querySelector('.main-content').style.opacity = '1';
        manu.innerHTML = '<i class="fa-solid fa-bars"></i>';
        manuOpen = 0;
    }
})

const updateCart = (cartCount) => {
    cartDisplay.innerHTML = cartCount;
}

Array.from(cart).forEach((item) => {
    item.addEventListener('click', (e) => {
        if(e.target.style.color == 'blue') {
            e.target.style.color = 'black';
            cartCount--;
        }
        else {
            e.target.style.color = 'blue';
            cartCount++;
        }
        updateCart(cartCount);
    })
})

const updateWishList = (wishListCount) => {
    wishListDisplay.innerHTML = wishListCount;
}

Array.from(wishList).forEach((item) => {
    item.addEventListener('click', (e) => {
        if(e.target.style.color == 'pink') {
            e.target.style.color = 'black';
            wishListCount--;
        }
        else {
            e.target.style.color = 'pink';
            wishListCount++;
        }
        updateWishList(wishListCount);
    })
})