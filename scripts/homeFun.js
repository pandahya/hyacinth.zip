let folderBtns = document.querySelectorAll(".folder-icon");
folderBtns.forEach(function (folder) {
    folder.addEventListener("click", function () {
        openFolder(folder);
    });
});
// folderBtns.forEach(dragElement);
//need to remove folder-icon element from <main> (grid) so css position change applies!!!!!!
//also, add if statement to appendChild in dragElement function so they stay in their own containers

let closeFolderBtns = document.querySelectorAll(".close-folder-btn");
closeFolderBtns.forEach(function (element) {
    element.addEventListener("click", function () {
        let btnId = element.id;
        let closeBtn = btnId.slice(6);
        closeFolder(closeBtn);
    });
});

function openFolder(element) {
    let folderId = element.id;
    let folder = folderId.slice(4);
    // console.log(folder);
    let thisFolder = document.getElementById(folder);
    let thisFolderBtn = document.getElementById(`btn-${folder}`);
    let thisFolderDisplay = window
        .getComputedStyle(thisFolder)
        .getPropertyValue("display");

    let rect = thisFolderBtn.getBoundingClientRect();
    let x = rect.left + rect.width / 2;
    let y = rect.top + rect.height / 2;

    // console.log(x, y);
    if (thisFolder.style.display == "none" || thisFolderDisplay == "none") {
        thisFolder.style.display = "block";
        thisFolder.style.left = `${x}px`;
        thisFolder.style.top = `${y}px`;
        // console.log("display is block");
    } else if (thisFolder.style.display == "block") {
        thisFolder.style.display = "none";
        // console.log("display is none");
    }
}
function closeFolder(folder) {
    let thisFolder = document.getElementById(folder);
    thisFolder.style.display = "none";
}

let folders = document.querySelectorAll(".folder");
folders.forEach(dragElement);
let foldersSpace = document.getElementById("folders-space");

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "-header")) {
        document.getElementById(elmnt.id + "-header").onmousedown =
            dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }
    // console.log(elmnt);
    function dragMouseDown(e) {
        e = e || window.e;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        foldersSpace.appendChild(elmnt);
    }

    function elementDrag(e) {
        e = e || window.e;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        console.log("is dragging");
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
