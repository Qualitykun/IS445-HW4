var varSize=[3]
const balloonDiv=document.getElementById('balloon')

function balloonChange(event) {
    if (event.code=='KeyD') {
        balloonDiv.style.fontSize=(balloonDiv.style.fontSize-10)+'px';
        varSize-=1;
    } else if (event.code=='KeyI') {
        balloonDiv.style.fontSize=(balloonDiv.style.fontSize+10)+'px';
        varSize+=1;
    }  
}

function balloonEvent() {
    balloonDiv.addEventListener('keyup', balloonChange);
    if (varSize==0) {
        balloonDiv.style.fontSize = "16pt";
        balloonDiv.innerHTML = "Done";
        balloonDiv.removeEventListener('keyup', balloonChange);
    } else if (varSize==6) {
        balloonDiv.innerHTML = "💥";
        balloonDiv.removeEventListener('keyup', balloonChange);
    }   
}

balloonEvent();