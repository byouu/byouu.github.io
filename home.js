window.onbeforeunload = function () { window.scrollTo(0,0); };

(function (){
    var wrap = document.querySelector('.no-overflow');
    var loading = document.querySelectorAll('.load');
    setTimeout(function(){
        wrap.classList.remove('no-overflow')
    }, 2900);
    setTimeout(function(){
        wrap.classList.remove('no-overflow')
        for (let i = 0; i < loading.length; i++) {
            loading[i].classList.remove('load');
            loading[i].classList.add('hide');
        }
    }, 3500);
}());

// Banner button scroll
var scrollBtn = document.querySelector('#scroll-btn');
var scrollBtnBottom = document.querySelector('#scroll-btn-bottom');

function scrollDown(){
    document.querySelector('.intro').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

scrollBtn.addEventListener('click', function(){
    scrollDown();
});

// Bottom page button scroll
var scrollBtn = document.querySelector('#scroll-btn-bottom');

function scrollUp(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

scrollBtnBottom.addEventListener('click', function(){
    scrollUp();
});



