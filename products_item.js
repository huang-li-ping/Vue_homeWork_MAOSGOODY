
function showLarge(e) {
    document.querySelector(".bigImg").src = e.target.src;
}

function init() {
    let imgs = document.querySelectorAll(".smallImg");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].onclick = showLarge;
    }
}

window.addEventListener("load", init, false);