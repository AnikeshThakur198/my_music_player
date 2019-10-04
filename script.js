var sounds = document.querySelectorAll('.song');

for(var i = 0; i < sounds.length; i++){
    sounds[i].addEventListener('click', function(){
        sounds[i].style.transform = 'scale(1.0)';
    });
}