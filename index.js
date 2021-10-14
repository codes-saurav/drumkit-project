
function w(){
    let sound = new Audio('crash.mp3')
    sound.play();
    flash('w');

}
function a(){
    let sound = new Audio('kick-bass.mp3')
    sound.play();
    flash('a');

}
function s(){
    let sound = new Audio('snare.mp3')
    sound.play();
    flash('s');

}
function d(){
    let sound = new Audio('tom-1.mp3')
    sound.play();
    flash('d');

}
function j(){
    let sound = new Audio('tom-2.mp3')
    sound.play();
    flash('j');

}
function k(){
    let sound = new Audio('tom-3.mp3')
    sound.play();
    flash('k');

}
function l(){
    let sound = new Audio('sounds/tom-4.mp3')
    sound.play();
    flash('l');
}

document.addEventListener('keypress',function(event){
    if(event.key=='w'){
        let sound = new Audio('sounds/crash.mp3')
        sound.play();
        flash(event.key);

    }
    if(event.key=='a'){
        let sound = new Audio('sounds/kick-bass.mp3')
        sound.play();
        flash(event.key);

    }
    if(event.key=='s'){
        let sound = new Audio('sounds/snare.mp3')
        sound.play();
        flash(event.key);

    }
    if(event.key=='d'){
        let sound = new Audio('sounds/tom-1.mp3')
        sound.play();
        flash(event.key);

    }
    if(event.key=='j'){
        let sound = new Audio('sounds/tom-2.mp3')
        sound.play();
        flash(event.key);

    }
    if(event.key=='k'){
        let sound = new Audio('sounds/tom-3.mp3')
        sound.play();
        flash(event.key);

    }
    if(event.key=='l'){
        let sound = new Audio('sounds/tom-4.mp3')
        sound.play();
        flash(event.key);

    }
})
function flash(key){
    let flash = document.querySelector(`.${key}`);
    flash.classList.add('pressed')

    setTimeout(function(){flash.classList.remove('pressed');},500)
}