let nav = document.querySelector('.nav');

fixedNav = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        nav.classList.add('fixed-nav');
      } else {
        nav.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixedNav)