function sounds(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    audio.currentTime = 0;
    audio.play()
    key.classList.add('pressed')
}

function transitionEnd(e) {
    if(e.propertyName !== "transform") {
        return;
    }
    this.classList.remove('pressed')
}

const key = document.querySelectorAll('.key')

key.forEach(transition => {
    transition.addEventListener('transitionend', transitionEnd)
});


window.addEventListener('keydown', sounds)