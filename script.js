//(element.style.<parameter_name> = "<value>"
let layers = document.querySelector(".layers");
let base = document.querySelector(".base");

/*
function getAngles (x, y, offsetX, offsetY) {
    let angleX = Math.atan2(y - offsetY, x - offsetX) * (180 / Math.PI)
    let angleY = Math.atan2(x - offsetX, y - offsetY) * (180 / Math.PI)
    return { angleX, angleY}
}

window.addEventListener('mousemove', (event) => {
    let screenCenterX = window.innerWidth / 2;
    let screenCenterY = window.innerHeight / 2;

    let angles = getAngles(event.pageX, event.pageY, screenCenterX, screenCenterY);

    //layers.style.transform = "translate(-50%, -50%) rotateX(" + angles.angleX + "deg) rotateY(" + angles.angleY + "deg)"
    let rotateYangle = angles.angleY/2
    if (rotateYangle > 30)
        rotateYangle = 30
    else if (rotateYangle < -30)
        rotateYangle = -30
    
    
    layers.style.transform = "rotateX(" +  angles.angleX/50 + "deg) rotateY(" + rotateYangle + "deg)"
})
*/

window.addEventListener('mousemove', (event) => {
    let screenCenterX = window.innerWidth / 2;
    let screenCenterY = window.innerHeight / 2;

    let mousePosRelX = event.pageX - screenCenterX;
    let mousePosRelY = event.pageY - screenCenterY;

    let normalizedX = mousePosRelX / window.innerWidth
    let normalizedY = mousePosRelY / window.innerHeight

    layers.style.transform = "translate3d(-50%, -60%, 0) rotate3D(" + -normalizedY + ", " + normalizedX + ", 0, 5.7deg) scale(0.8)"
    base.style.transform = "rotate3D(" + -normalizedY + ", " + normalizedX + ", 0, 3.5deg) scale(1.1)"
})