var html = document.querySelector('html')
const zoomBtn = document.querySelector('#zoom');
zoomBtn.onclick = (e) =>{
    e.stopPropagation()
    var isFullScreen = document.fullscreenElement
    if(isFullScreen === null){
        html.requestFullscreen()
    }
    else{
        document.exitFullscreen()
    }
}




document.querySelector('#tutorial').onclick = function(e){
    e.stopPropagation()
}
document.querySelector(".navlink:nth-child(1)").onclick = function(){
    topFilter.style.display = "flex"
    document.querySelector('#tutorial').style.display ="unset"

}
const nextTutorialBtn = document.querySelector('#next-slide')
let counter = 1;
let sliderButton = document.querySelectorAll(".slider-button")

function slide(){
    if(counter==5){
        document.querySelector('#tutorial').style.display ="none"
        document.querySelector('#sign-up-board').style.display ="block"
    }
    if(counter <5){
        if(counter==0) {counter =1}
        document.querySelector('.slider').style.transform = `translateX(${-450*counter}px)`
        document.querySelector('.slider-text').style.transform = `translateX(${-450*counter}px)`
        counter++;
        document.querySelector('.slider-button.slider-button--active').classList.remove('slider-button--active')
        sliderButton[counter-1].classList.add('slider-button--active')
    }
}
sliderButton.forEach(function(slide){
    slide.onclick = function(){
        document.querySelector('.slider-button.slider-button--active').classList.remove('slider-button--active')
        slide.classList.add('slider-button--active')
        position = slide.getAttribute('data-slide')-1
        counter = slide.getAttribute('data-slide')
        document.querySelector('.slider').style.transform = `translateX(${-450*position}px)`
        document.querySelector('.slider-text').style.transform = `translateX(${-450*position}px)`
    }
})