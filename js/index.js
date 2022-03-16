// ==================================================================
// VARIABLES
// ==================================================================

let home = {
	init: {
		attachListeners: undefined,
		init: undefined,
	},

	elem: {
        scrollBtn: document.querySelector('#down-arrow'),
        scrollBtnBottom: document.querySelector('#up-arrow'),
        about: document.querySelector('.about'),
        portfolioPreview: document.querySelector('.portfolio'),
		nav: document.querySelector('.nav'),
	},

	event: {
        // Scroll Buttons
		scrollDown: undefined,
		scrollUp: undefined,
		showNav: undefined,
	},
};

// ==================================================================
// FUNCTIONS
// ==================================================================

// @func  home.initialise
// @desc
home.init.init = () => {
	home.init.attachListeners();
	// home.sections.forEach((section) => {
	// 	home.sectionPos.push(section.offsetTop);
	// });
};

home.init.attachListeners = () => {
    home.elem.scrollBtn.addEventListener("click", home.event.scrollDown);
    // home.elem.scrollBtnBottom.addEventListener("click", home.event.scrollUp);
	window.addEventListener("scroll", home.event.showNav);
};

home.event.scrollDown = () => {
    home.elem.about.scrollIntoView({behavior: "smooth", block: "center"});
}
home.event.scrollUp = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

home.event.showNav = () => {
	var y = window.scrollY;
	if (y >= 700) {
	  	home.elem.nav.className = "nav"
		console.log(scrollY)
	}
	 else {
		home.elem.nav.className = "hide"
	}
};

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