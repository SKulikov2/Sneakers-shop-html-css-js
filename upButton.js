let upButton = document.querySelector('.up-button')

window.onscroll = () => {
    if (window.pageYOffset > 100) {
        upButton.classList.add('shown')
    } else {
        upButton.classList.remove('shown')
    }
}

upButton.onclick = function () {
    window.scrollTo(0,0)
}