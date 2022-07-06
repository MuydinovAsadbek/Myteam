const elsDatingItemContent = document.querySelectorAll('.dating__item-content');
const elsDatingMoreBtn = document.querySelectorAll('.dating__more-btn');
const elsDatingHeroMore = document.querySelectorAll('.dating__hero-more');


elsDatingMoreBtn.forEach(function (elMoreBtn, index) {
  elMoreBtn.addEventListener('click', function (evt) {
    evt.preventDefault()
    elsDatingItemContent[index].classList.add('dating__item-content--hidden')

    elsDatingHeroMore[index].classList.add('dating__hero-more--active')

    const elsDatingCloseBtn = document.querySelectorAll('.dating__close-btn');
    elsDatingCloseBtn.forEach(function (elCloseBtn, index) {
      elCloseBtn.addEventListener('click', function (evt) {
        evt.preventDefault()
        elsDatingHeroMore[index].classList.remove('dating__hero-more--active')
        elsDatingItemContent[index].classList.remove('dating__item-content--hidden')
      });
    });
  });
});
