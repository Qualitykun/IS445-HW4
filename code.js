var varSize=[3]
const balloonDiv=document.getElementById('balloonDiv')
const ballonPara=document.getElementById('balloonPara')

function balloonChange(event) {
    if (event.code=='KeyD') {
        balloonPara.style.fontSize=(balloonPara.style.fontSize-10)+'px';
        varSize-=1;
    } else if (event.code=='KeyI') {
        balloonPara.style.fontSize=(balloonPara.style.fontSize+10)+'px';
        varSize+=1;
    }  
}

document.getElementById('balloonDiv').addEventListener('keyup', balloonChange)

if (varSize==0) {
    balloonDiv.style.fontSize = "16pt";
    balloonDiv.innerHTML = "Done";
    balloonDiv.removeEventListener('keyup', balloonChange);
} else if (varSize==6) {
    balloonDiv.innerHTML = "💥";
    balloonDiv.removeEventListener('keyup', balloonChange);
}   

document.getElementById('balloonDiv').addEventListener('click', test => {
    console.log('hi')    
})