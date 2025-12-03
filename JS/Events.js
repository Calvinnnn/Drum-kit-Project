window.addEventListener("keydown",(e)=>{

    const key = e.key.toLocaleLowerCase();

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const button = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio){
        return;
    }
    

    audio.currentTime = 0;

    audio.play();

   if (button) {
        button.classList.add('playing');
        setTimeout(() => {
            button.classList.remove('playing');
        }, 100);
    }
});