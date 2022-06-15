// window.onbeforeunload = function () { window.scrollTo(0,0); };

// (function (){
//     var wrap = document.querySelector('.no-overflow');
//     var loading = document.querySelectorAll('.load');
//     setTimeout(function(){
//         wrap.classList.remove('no-overflow')
//     }, 2900);
//     setTimeout(function(){
//         wrap.classList.remove('no-overflow')
//         for (let i = 0; i < loading.length; i++) {
//             loading[i].classList.remove('load');
//             loading[i].classList.add('hide');
//         }
//     }, 3500);
// }());

// Banner button scroll
var scrollBtn = document.querySelector('#down-arrow');
// var scrollBtnBottom = document.querySelector('#scroll-btn-bottom');

function scrollDown(){
    document.querySelector('#projects').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

scrollBtn.addEventListener('click', function(){
    scrollDown();
});

// // Bottom page button scroll
// var scrollBtn = document.querySelector('#scroll-btn-bottom');

// function scrollUp(){
//     window.scrollTo({top: 0, behavior: 'smooth'});
// }

// scrollBtnBottom.addEventListener('click', function(){
//     scrollUp();
// });


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

// VARIABLES ================================================

// let releaseNotes = {
//     init: undefined,
//     populateData: undefined,
  
//     elem: {
//       releaseNoteSection: document.querySelector(".notes-content"),
//       versionListContainer: document.querySelector(".release-menu-container"),
//       lastUpdated: document.querySelector(".last-updated"),
//     },
//   };
  
  // FUNCTIONS ================================================
  
//   releaseNotes.init = async function () {
//     // Fetch the content data
//     let content;
//     try {
//       content = (await axios.get("/fetch-release-notes"))["data"];
//     } catch (error) {
//       window.alert("Encountered an error!");
//     }
//     releaseNotes.populateData(content.releaseNotes);
//     releaseNotes.updateTime(content.date);
//   };
  
//   releaseNotes.updateTime = (date) => {
//     console.log(new Date(date).toDateString());
//     releaseNotes.elem.lastUpdated.innerHTML = `Last updated: ${new Date(
//       date
//     ).toString()}`;
//   };
  
//   releaseNotes.populateData = (content) => {
//     // Display note content on page
//     console.log("og", content);
  
//     // Version number list
//     var versionList = document.createElement("div");
//     versionList.className = "release-menu";
  
//     // Reverse order (most recent first)
//     for (let i = content.length - 1; i >= 0; i--) {
//       const contentArray = content[i];
//       const subcontentArray = contentArray["content"];
  
//       // Add versions to menu list
//       versionMenuItem = document.createElement("a");
//       versionMenuItem.href = `#${contentArray["version"]}`;
//       versionList.appendChild(versionMenuItem).className = "version-menu-item";
//       versionMenuItem.innerHTML = "Version" + " " + contentArray["version"];
  
//       releaseNotes.elem.versionListContainer.appendChild(versionList);
  
//       // Create release note post
//       var NewReleaseNote = document.createElement("div");
//       NewReleaseNote.className = "note";
//       NewReleaseNote.id = contentArray["version"];
//       versionNumber = document.createElement("h2");
//       NewReleaseNote.appendChild(versionNumber).className = "version-number";
//       versionNumber.innerHTML = "Version" + " " + contentArray["version"];
//       let notePointList;
//       for (let i = 0; i < subcontentArray.length; i++) {
//         const element = subcontentArray[i];
//         if (i > 0) {
//           if (
//             subcontentArray[i]["type"] === "point" &&
//             subcontentArray[i - 1]["type"] !== "point"
//           ) {
//             // List of bullet points
//             notePointList = document.createElement("ul");
//             NewReleaseNote.appendChild(notePointList).className = "point-list";
//           }
//         }
//         if (element["type"] === "heading") {
//           const noteTitle = document.createElement("h3");
//           NewReleaseNote.appendChild(noteTitle).className = "note-title";
//           noteTitle.innerHTML = element["html"];
//         } else if (element["type"] === "image") {
//           const noteImg = document.createElement("img");
//           NewReleaseNote.appendChild(noteImg).className = "note-img";
//           noteImg.src = element["url"];
//         } else if (element["type"] === "text") {
//           const noteText = document.createElement("p");
//           noteText.innerHTML = element["html"];
//           NewReleaseNote.appendChild(noteText).className = "note-text";
//         } else if (element["type"] === "point") {
//           const notePoint = document.createElement("li");
//           notePointList.appendChild(notePoint).className = "point";
//           // TODO add forEach if point is array of points
//           notePoint.innerHTML = element["html"];
//         }
//       }
  
//       releaseNotes.elem.releaseNoteSection.appendChild(NewReleaseNote);
//     }
//   };
  
//   // END ======================================================
  
