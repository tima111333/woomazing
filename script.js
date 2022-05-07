let tabs1 = document.querySelector(".tabs1"),
    tabs2 = document.querySelector(".tabs2"),
    tabs3 = document.querySelector(".tabs3"),
    h1 = document.querySelector(".section__div-h1"),
    p = document.querySelector(".section__div-p");




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
