let projTitle = document.querySelector("#projTitle");
let navHeight = document.querySelector("nav").offsetHeight;
window.addEventListener("scroll", showProjTitle);

function showProjTitle(){
    // console.log(window.scrollY);
    // console.log(projTitle.getBoundingClientRect().top + navHeight);
    if(window.scrollY >= (projTitle.getBoundingClientRect().top + navHeight)){
        // console.log("visible");
        projTitle.style.visibility = "visible";
    }else{
        // console.log("hidden");
        projTitle.style.visibility = "hidden";
    }
}