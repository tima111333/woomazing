   let tabs1 = document.querySelector(".tabs1"),
    tabs2 = document.querySelector(".tabs2"),
    tabs3 = document.querySelector(".tabs3"),
    h1 = document.querySelector(".section__div-h1"),
    p = document.querySelector(".section__div-p"),
    dots1 = document.querySelector('.dots1'),
    dots2 = document.querySelector('.dots2'),
    dots3 = document.querySelector('.dots3'),
    burger = document.querySelector('.burger-menu'),
    nav = document.querySelector('.navigation');


burger.addEventListener('click',function(){
 nav.classList.toggle('navigation-active')
})

tabs2.addEventListener('click', function () {
    tabs2.style.backgroundColor = "#000000";
    tabs1.style.backgroundColor = "#D1D1D1";
    tabs3.style.backgroundColor = "#D1D1D1";
    h1.innerHTML = "Включай новый сезон с WOMAZING";
    p.innerHTML = `Мы обновили ассортимент - легендарные коллекции и новинки от  отечественных дизайнеров`;
    h1.classList.add("animat");
    p.classList.add('animat');
    setTimeout(function () {
        h1.classList.remove('animat')
        p.classList.remove('animat')
    }, 1000)
});
tabs1.addEventListener('click', function () {
    tabs1.style.backgroundColor = "#000000";
    tabs2.style.backgroundColor = "#D1D1D1";
    tabs3.style.backgroundColor = "#D1D1D1";
    h1.innerHTML = "Новые поступления в этом сезоне";
    p.innerHTML = `Утонченные сочетания и бархатные оттенки - вот то,что вы искали в этом сезоне.Время следовать.`;
    h1.classList.add("animat");
    p.classList.add('animat');
    setTimeout(function () {
        h1.classList.remove('animat')
        p.classList.remove('animat')
    }, 1000)
});
tabs3.addEventListener('click', function () {
    tabs3.style.backgroundColor = "#000000";
    tabs2.style.backgroundColor = "#D1D1D1";
    tabs1.style.backgroundColor = "#D1D1D1";
    h1.innerHTML = "Что-то новенькое. Мы заждались тебя.";
    p.innerHTML = `Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!`;
    h1.classList.add("animat");
    p.classList.add('animat');
    setTimeout(function () {
        h1.classList.remove('animat')
        p.classList.remove('animat')
    }, 1000)
});
const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init(){
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width*images.length + "px";
    images.forEach(item=>{
        item.style.width = width  + "px";
        item.style.height = "auto";
    });
    rollSlider();
}
window.addEventListener('resize', init);
init();

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if(count <0){
        count = images.length -1;
    }
    TabsColor();
    rollSlider();
});
document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if(count >= images.length){
        count = 0;
    }
    TabsColor();
    rollSlider();
});
function rollSlider(){
    
    sliderLine.style.transform = 'translateX(-' +count * width + 'px)';
}
function TabsColor(){
    if(count == 0 ){
        dots1.style.backgroundColor = "#fff";
        dots2.style.backgroundColor = 'rgba(255, 255, 255, 0.36)';
        dots3.style.backgroundColor = 'rgba(255, 255, 255, 0.36)';
       }else if( count == 1 ){
       dots2.style.backgroundColor = '#fff';
       dots1.style.backgroundColor = 'rgba(255, 255, 255, 0.36)'
       dots3.style.backgroundColor = 'rgba(255, 255, 255, 0.36)'
       }else if(count == 2 ){
           dots3.style.backgroundColor = '#fff';
           dots2.style.backgroundColor = 'rgba(255, 255, 255, 0.36)'
           dots1.style.backgroundColor = 'rgba(255, 255, 255, 0.36)'
       }
       
}

