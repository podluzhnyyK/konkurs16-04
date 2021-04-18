let position = 0;
const slidesToMove = 1;
const slidesToShow = 1;
const container = document.querySelector('.slider__wrap');
const track = document.querySelector('.slider__list');
const btnNext = document.querySelector('.slider__btn--next');
const btnPrev = document.querySelector('.slider__btn--prev');
const itemWidth = container.clientWidth / slidesToShow;
const itemsCount = document.querySelectorAll('.options-item').length;
const movePosition = slidesToMove * itemWidth;

document.querySelectorAll('.item').forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount -
    (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >=
    slidesToMove ? movePosition : itemsLeft * itemWidth;

    setPosition();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >=
    slidesToMove ? movePosition : itemsLeft * itemWidth;

    setPosition();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
    checkBtns();
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();
