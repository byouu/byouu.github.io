// window.onbeforeunload = function () { window.scrollTo(0,0); };

// Banner button scroll
var scrollBtn = document.querySelector('#down-arrow');
var scrollBtnBottom = document.querySelector('#up-arrow');

function scrollDown(){
    document.querySelector('.portfolio').scrollIntoView({behavior: "smooth", block: "center"});
}

scrollBtn.addEventListener('click', function(){
    scrollDown();
});

function scrollUp(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

scrollBtnBottom.addEventListener('click', function(){
    scrollUp();
});

// Nav menu

// let scrollpos = window.scrollY
// const header = document.querySelector(".nav")
// const header_height = header.offsetHeight
// const navItem = document.querySelectorAll(".nav-item")

// function add_class_on_scroll(){
//     document.querySelector('.portfolio').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

//     header.querySelector('.nav-item').classList.add('active')
// }

// function remove_class_on_scroll(){
//     document.querySelector('.portfolio').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

//     header.querySelector('.nav-item').classList.contains('active').remove('active')
// }

// window.addEventListener('scroll', function() { 
//   scrollpos = window.scrollY;

//   if (scrollpos >= header_height) { add_class_on_scroll() }
//   else { remove_class_on_scroll() }

//   console.log(scrollpos)
// })

// let scrollpos = window.scrollY
// const header = document.querySelector(".nav")
// const header_height = header.offsetHeight

// const add_class_on_scroll = () => header.classList.add("fade-in")
// const remove_class_on_scroll = () => header.classList.remove("fade-in")

// window.addEventListener('scroll', function() { 
//   scrollpos = window.scrollY;

//   if (scrollpos >= header_height) { add_class_on_scroll() }
//   else { remove_class_on_scroll() }

//   console.log(scrollpos)
// })

var position = document.querySelector('.portfolio').scrollTop;
console.log(position)

