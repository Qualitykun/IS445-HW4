var varSize=3
const balloonDiv=document.getElementById('balloonDiv')
const ballonPara=document.getElementById('balloonPara')
/*var balloonSize=ballonPara.style.fontSize*/

document.addEventListener('keyup', balloonChange)

function balloonChange(event) {
    if (event.code=='KeyD') {
        if (varSize>0) {
            let fontSizeStr = window.getComputedStyle(balloonPara).getPropertyValue('font-size');
            let numberStr = fontSizeStr.substr(0, fontSizeStr.length - 2);
            let size = parseInt(numberStr, 10);
            let newFontSize = (size - 10) + 'px';
            balloonPara.style.fontSize= newFontSize;
            varSize-=1;
            console.log(varSize)
        } else {
            balloonPara.style.fontSize = "10pt";
            balloonPara.innerHTML = "Done";
            document.removeEventListener('keyup', balloonChange);
        }
    } else if (event.code=='KeyI') {
        if (varSize<6) {
            let fontSizeStr = window.getComputedStyle(balloonPara).getPropertyValue('font-size');
            let numberStr = fontSizeStr.substr(0, fontSizeStr.length - 2);
            let size = parseInt(numberStr, 10);
            let newFontSize = (size + 10) + 'px';
            balloonPara.style.fontSize= newFontSize;
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
    console.log(document.getElementById('balloonPara').style.fontSize)
})