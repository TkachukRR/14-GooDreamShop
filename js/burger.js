const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation')
const contat = document.querySelector('.header__contacts')

burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    navigation.classList.toggle('navigation_active');
    contat.classList.toggle('header__contats_active');
});