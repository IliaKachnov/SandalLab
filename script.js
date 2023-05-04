const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

window.addEventListener('load', windowLoad);

function windowLoad() {
  document.body.classList.add('loaded');
  
  if(document.querySelector('.main-slider')){
    new Swiper('.main-slider', {
      speed: 2000,
      effect: 'fade',
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: '.bullets__items',
        type: 'bullets',
        clickable: true,
      },
    })
  }
}

document.addEventListener('click', documentActions);


function documentActions(e) {
  const targetElement = e.target;

  if(targetElement.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open')
  }

  if(targetElement.closest('[data-goto]')) {
    document.documentElement.classList.contains('menu-open') ?
      document.documentElement.classList.remove('menu-open') : null;


    const goTo = targetElement.closest('[data-goto]').dataset.goto;
    const goToElement = document.querySelector(goTo);
    const headerHeight = document.querySelector('.header').offsetHeight;

    if (goToElement) {
      window.scrollTo({
        top: goToElement.offsetTop - (headerHeight + 15),
        behavior: 'smooth'
      })
    }
    e.preventDefault();
  }
}