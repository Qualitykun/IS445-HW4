var varSize=[3]
const balloonDiv = document.getElementById('balloon')
function balloonInf(event) {
    if (event.key=='KeyI') {
        balloonDiv.style.fontSize=(balloonDiv.style.fontSize+10)+'px';
        varSize+=1;
    } 
}

function balloonDef(event) {
    if (event.key=='KeyD') {
        balloonDiv.style.fontSize=(balloonDiv.style.fontSize-10)+'px';
        varSize-=1;
    }
    
}

function balloonEvent() {
    while (varSize>0 && varSize<6) {
        balloonDiv.addEventListener('keyup', balloonDef);
        balloonDiv.addEventListener('keyup', balloonInf);
    } 
    if (varSize==0) {
        balloonDiv.style.fontSize = "16pt";
        balloonDiv.innerHTML = "Done";
    } else if (varSize==6) {
        balloonDiv.innerHTML = "💥"
    }
    
}

balloonEvent();