var varSize=3
const balloonDiv=document.getElementById('balloonDiv')
const ballonPara=document.getElementById('balloonPara')
var balloonSize=ballonPara.style.fontSize

/*function balloonChange(event) {
    while (varSize>0 && varSize<6) {
        if (event.code=='KeyD') {
            balloonSize=(balloonSize-10)+'px';
            varSize-=1;
            console.log(varSize)
        } else if (event.code=='KeyI') {
            balloonSize=(balloonSize+10)+'px';
            varSize+=1;
            console.log(varSize)
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
}*/

document.addEventListener('keyup', balloonChange => {
    if (event.code=='KeyD') {
        if (varSize>0) {
            balloonSize=(balloonSize-10)+'px';
            varSize-=1;
            console.log(varSize)
        } else {
            balloonSize = "10pt";
            balloonPara.innerHTML = "Done";
            document.removeEventListener('keyup', balloonChange);
        }
    } else if (event.code=='KeyI') {
        if (varSize<6) {
            balloonSize=(balloonSize+10)+'px';
            varSize+=1;
            console.log(varSize)
        } else {
            balloonPara.innerHTML = "💥";
            document.removeEventListener('keyup', balloonChange);
        }
    }
})

balloonDiv.addEventListener('click', test => {
    console.log('hi');
    console.log(varSize);
})