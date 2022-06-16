// Banner button scroll
var scrollBtn = document.querySelector('#down-arrow');
// var scrollBtnBottom = document.querySelector('#scroll-btn-bottom');

function scrollDown(){
    document.querySelector('#projects').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

scrollBtn.addEventListener('click', function(){
    scrollDown();
});


// Change colour of side icons
let sideLinks = document.querySelectorAll('.side-icon')

lightMode = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        for(const icon of sideLinks){
            icon.classList.add('light-icon');
        }
      } else {
        for(const icon of sideLinks){
            icon.classList.remove('light-icon');
        }
    }
    // console.log(sideLinks)
}

window.addEventListener('scroll', lightMode)

// Change colour of side icons
let sideLinkLineLong = document.querySelector('.long-line')
let sideLinkLineShort = document.querySelector('.short-line')

showLines = () => {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        sideLinkLineLong.classList.add('show-long-line');
        sideLinkLineShort.classList.add('show-short-line');
      } else {
        sideLinkLineLong.classList.remove('show-long-line');
        sideLinkLineShort.classList.remove('show-short-line');
    }
}

window.addEventListener('scroll', showLines)


// Horizontal archive scroll
let scrollContainer = document.querySelector(".archive-container");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});
  
