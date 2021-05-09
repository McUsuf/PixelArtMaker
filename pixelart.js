const height = 18;
const width = 32;

let downedMouse = false;

function createPane(){
    let pane = document.getElementById('pane');

    let rowPixels = [];
    for(let i = 0; i < height; i++){
        let containerDiv = document.createElement("div");
        containerDiv.style.display = "flex";
        
        let rowPixels = [];
        for(let j = 0; j < width; j++){
            let pixel = document.createElement("div");
            pixel.className += ' brick';
            pixel.addEventListener('click', paintPixel);
            pixel.addEventListener('mousedown', mouseDown);
            pixel.addEventListener('mouseenter', enterPaint);
            rowPixels.push(pixel);
        }

        rowPixels.forEach(e => {
            containerDiv.appendChild(e);
        });

        pane.appendChild(containerDiv);
    }
}

function clrCanvas(e){
    let pane = document.getElementById('pane');
    pane.children.forEach(p => {
        p.setProperty("background-color", "white");
    });    
}

function paintPixel(e){
    let color = document.getElementById("brushcolor");
    e.target.style.setProperty("background-color", color.value);
}

function enterPaint(e){
    if(downedMouse){
        paintPixel(e);
    }
}

function mouseDown(e){
    paintPixel(e);
    downedMouse = true;
}

function mouseUp(){
    downedMouse = false;
}

document.addEventListener('mouseup', mouseUp);
createPane();
document.getElementById("clrBtn").addEventListener('click', clrCanvas);
