const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modalClose = document.querySelector('.js-modal-close')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
function showBuyTickets(){
    modal.classList.add('open')
}
function hideBuyTickets(){
    modal.classList.remove('open')
}
const buy= buyBtns.forEach((result)=>{
    result.onclick = showBuyTickets 
})
modalClose.onclick = hideBuyTickets
modal.onclick = hideBuyTickets
modalContainer.onclick = function(e){
    e.stopPropagation()
}

//Mobile
//Đóng mở mobile menu
var header = document.getElementById('header')
const mobileMenu = document.querySelector('.js-menu-btn')
var headerHeight = header.clientHeight
mobileMenu.onclick = function(){
    var isClosed = header.clientHeight === headerHeight
    if(isClosed){
        header.style.height = 'auto'
    }
    else {
        header.style.height = null
    }
}
//Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
const menuItem = menuItems.forEach((item)=>{
    item.onclick = function(e) {
        //Kiểm tra xem thẻ a có a chị e liền kề hay không, thẻ trong a (MORE) có thẻ ul có class là subnav
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if(isParentMenu){
            e.preventDefault()
        }
        else {
            header.style.height = null
        }
    }
}) 

document.addEventListener('DOMContentLoaded',function(){
    var currentIndex = 0
    const sliderItems = document.querySelectorAll("#slider .text-content")
    const slider = document.getElementById('slider')
    slider.style.backgroundImage = `url('assets/img/slider/slider1.jpg')`;
    function showNextImage(){
        sliderItems[currentIndex].style.display = 'none'
        currentIndex = (currentIndex + 1) % sliderItems.length;
        sliderItems[currentIndex].style.display = 'block';
        var currentHeading = sliderItems[currentIndex].querySelector('.text-heading').textContent;
        slider.style.backgroundImage = `url('assets/img/slider/slider${currentIndex + 1}.jpg')`;
    }
    setInterval(showNextImage, 3000);
})