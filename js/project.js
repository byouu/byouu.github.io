// Bottom page button scroll
var scrollBtn = document.querySelector('.scroll-top-side');

function scrollUp(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

scrollBtn.addEventListener('click', function(){
    scrollUp();
});