var navToggle = document.querySelector('.page-header__nav-toggle');

navToggle.classList.remove('page-header__nav-toggle--nojs');
navToggle.classList.remove('page-header__nav-toggle--opened');
navToggle.classList.add('page-header__nav-toggle--closed');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('page-header__nav-toggle--closed')) {
    navToggle.classList.remove('page-header__nav-toggle--closed');
    navToggle.classList.add('page-header__nav-toggle--opened');
  } else {
    navToggle.classList.add('page-header__nav-toggle--closed');
    navToggle.classList.remove('page-header__nav-toggle--opened');
  }
});
