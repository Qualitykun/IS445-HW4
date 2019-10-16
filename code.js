var varSize=3
const balloonDiv=document.getElementById('balloonDiv')
const ballonPara=document.getElementById('balloonPara')
var balloonSize=ballonPara.style.fontSize

document.addEventListener('keyup', balloonChange)

function balloonChange(event) {
    if (event.code=='KeyD') {
        if (varSize>0) {
            balloonSize=(balloonSize.substring(0,2)-10)+'px';
            varSize-=1;
            console.log(varSize)
        } else {
            balloonSize = "10pt";
            balloonPara.innerHTML = "Done";
            document.removeEventListener('keyup', balloonChange);
        }
    } else if (event.code=='KeyI') {
        if (varSize<6) {
            balloonSize=(toString(parseInt(balloonSize.substring(0,2)))+10)+'px';
            varSize+=1;
            console.log(varSize)
        } else {
            balloonPara.innerHTML = "💥";
            document.removeEventListener('keyup', balloonChange);
        }
    }
}

balloonDiv.addEventListener('click', test => {
    console.log('hi');
    console.log(varSize);
    console.log(balloonSize)
})