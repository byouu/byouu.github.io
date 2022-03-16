// ==================================================================
// VARIABLES
// ==================================================================

let cb = {
	init: {
		attachListeners: undefined,
		init: undefined,
	},

	elem: {
		web: document.querySelector('#web'),
		nav: document.querySelector('.nav'),
	},

	event: {
		showNav: undefined,
		showWeb: undefined,
		showPlat: undefined,
		showBrand:  undefined,
		show3D: undefined,
	},
};

// ==================================================================
// FUNCTIONS
// ==================================================================

// @func  cb.initialise
// @desc
cb.init.init = () => {
	cb.init.attachListeners();
};

cb.init.attachListeners = () => {
    cb.elem.scrollBtn.addEventListener("click", cb.event.scrollDown);
    // cb.elem.scrollBtnBottom.addEventListener("click", cb.event.scrollUp);
	window.addEventListener("scroll", cb.event.showNav);
};

cb.event.scrollDown = () => {
    cb.elem.about.scrollIntoView({behavior: "smooth", block: "center"});
}
cb.event.scrollUp = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

cb.event.showNav = () => {
	var y = window.scrollY;
	if (y >= 700) {
	  	cb.elem.nav.className = "nav"
		console.log(scrollY)
	}
	 else {
		cb.elem.nav.className = "hide"
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