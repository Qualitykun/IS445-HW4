var varSize=[3]
const balloonDiv=document.getElementById('balloonDiv')
const ballonPara=document.getElementById('balloonPara')
const balloonSize=ballonPara.style.fontSize

function balloonChange(event) {
    while (varSize>0 && varSize<6) {
        if (event.code=='KeyD') {
            balloonSize=(balloonSize-10)+'px';
            varSize-=1;
        } else if (event.code=='KeyI') {
            balloonSize=(balloonSize+10)+'px';
            varSize+=1;
        }
    }
    if (varSize==0) {
        balloonSize = "16pt";
        balloonPara.innerHTML = "Done";
        balloonDiv.removeEventListener('keyup', balloonChange);
    } else if (varSize==6) {
        balloonPara.innerHTML = "💥";
        balloonDiv.removeEventListener('keyup', balloonChange);
    }   
    
}

document.getElementById('balloonDiv').addEventListener('keyup', balloonChange)


document.getElementById('balloonDiv').addEventListener('click', test => {
    console.log('hi')    
})