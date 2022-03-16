// ==================================================================
// VARIABLES
// ==================================================================

let cb = {
	init: {
		attachListeners: undefined,
		init: undefined,
	},

	elem: {
		webSection: document.querySelector('#website'),
		brandSection: document.querySelector('#branding'),
		threedSection: document.querySelector('#threed'),
		webBtn: document.querySelector('#websiteBtn'),
		brandBtn: document.querySelector('#brandingBtn'),
		threedBtn: document.querySelector('#threedBtn'),
		websiteBtnTitle: document.querySelector('#websiteBtnTitle'),
		brandingBtnTitle: document.querySelector('#brandingBtnTitle'),
		threedBtnTitle: document.querySelector('#threedBtnTitle'),
	},

	event: {
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
	window.addEventListener("scroll", cb.event.showNav);
	cb.elem.webBtn.addEventListener("click", cb.event.showWeb);
	cb.elem.brandBtn.addEventListener("click", cb.event.showBrand);
	cb.elem.threedBtn.addEventListener("click", cb.event.show3D);
};

cb.event.showWeb = () => {
	cb.elem.webSection.className = "content-wrap"
	cb.elem.brandSection.className = "hide"
	cb.elem.threedSection.className = "hide"
	cb.elem.websiteBtnTitle.className = "active"
	cb.elem.brandingBtnTitle.className = "inactive"
	cb.elem.threedBtnTitle.className = "inactive"
	document.documentElement.scrollTop = 0;
};
cb.event.showBrand = () => {
	cb.elem.brandSection.className = "content-wrap"
	cb.elem.webSection.className = "hide"
	cb.elem.threedSection.className = "hide"
	cb.elem.websiteBtnTitle.className = "inactive"
	cb.elem.brandingBtnTitle.className = "active"
	cb.elem.threedBtnTitle.className = "inactive"
	document.documentElement.scrollTop = 0;
};
cb.event.show3D = () => {
	cb.elem.threedSection.className = "content-wrap"
	cb.elem.webSection.className = "hide"
	cb.elem.brandSection.className = "hide"
	cb.elem.websiteBtnTitle.className = "inactive"
	cb.elem.brandingBtnTitle.className = "inactive"
	cb.elem.threedBtnTitle.className = "active"
	document.documentElement.scrollTop = 0;
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