let image = document.querySelector("#page");
let more = document.querySelector("#more");
let slider = document.querySelector("#pageSlider");
let numText = document.querySelector("#pageNumber");
let pageNum = 0;
let maxPage = slider.max;

function prevPage(){
    if(pageNum > 0){
        pageNum--;
        image.src = `./assets/notebook_${pageNum}.jpg`;
        numText.innerHTML = "Page "+ pageNum;
        slider.value = pageNum;
    }
    
}

function nextPage(){
    if(pageNum < maxPage){
        pageNum++;
        image.src = `./assets/notebook_${pageNum}.jpg`;
        numText.innerHTML = "Page "+ pageNum;
        slider.value = pageNum;
    }
    
}

function toggleMore(){
    if(more.style.visibility == "visible"){
        more.style.visibility = "hidden";
    }else{
        more.style.visibility = "visible";
    }
}

slider.oninput = function(){
    pageNum = this.value;
    image.src = `./assets/notebook_${pageNum}.jpg`;
    numText.innerHTML = "Page "+ this.value;
}