let pBtnRef = document.getElementById("p-button");
let iBtnRef = document.getElementById("img-button");
let pDivRef = document.getElementById("p-div");
let iDivRef = document.getElementById("img-div");
let whichDisplay = 0;

pBtnRef.onclick = function() {
    console.log("P CLICK");
    if (whichDisplay == 1) {
        iDivRef.style = ("Display: none;");
        pDivRef.style = ("Display: block;");
        whichDisplay = 0;
        console.log(whichDisplay);
    }
    let newP = document.createElement("p");
    pDivRef.appendChild(newP);
    newP.innerHTML = ("Baja Blast is S tier");
    newP.style = ("color: white; background-color: black; font-size: 20px;");
}
iBtnRef.onclick = function() {
    console.log("I CLICK");
    if (whichDisplay == 0) {
        pDivRef.style = ("Display: none;");
        iDivRef.style = ("Display: block;");
        whichDisplay = 1;
        console.log(whichDisplay);
    }
    let newImg = document.createElement("img");
    iDivRef.appendChild(newImg);
    newImg.src = "img/565.png";
}