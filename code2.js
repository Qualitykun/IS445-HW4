var varSize=3
const balloonDiv=document.getElementById('balloonDiv')
const ballonPara=document.getElementById('balloonPara')
const balloonSize=ballonPara.style.fontSize

balloonDiv.addEventListener('click', test => {
    console.log('hi');
    console.log(varSize);
})

function balloonhandler(event) {
    if (event.code=='KeyI') {
        inflate()
    }
    if (event.code=='KeyD') {
        deflate()
    }
}

document.addEventListener('keyup', balloonhandler)

function inflate() {
    let fontSizeStr = window.getComputedStyle(ballonPara).getPropertyValue('font-size')
    let numberStr = fontSizeStr.substr(0, fontSizeStr.length - 2)
    let size = parseInt(numberStr, 10)
    if (size > 60) {
        balloonPara.innerHTML = "💥"
        document.removeEventListener('keyup', handleKeyup)
    } else {
        let newFontSize = (size + 10) + 'px'
        balloonPara.style.fontSize= newFontSize;
    }
}

function deflate() {
    let fontSizeStr = window.getComputedStyle(ballonPara).getPropertyValue('font-size')
    let numberStr = fontSizeStr.substr(0, fontSizeStr.length - 2)
    let size = parseInt(numberStr, 10)
    if (size < 10) {
        balloonPara.innerHTML = "💥"
        document.removeEventListener('keyup', handleKeyup)
    } else {
        let newFontSize = (size + 10) + 'px'
        ballonPara.style.fontSize= newFontSize;
    }
}