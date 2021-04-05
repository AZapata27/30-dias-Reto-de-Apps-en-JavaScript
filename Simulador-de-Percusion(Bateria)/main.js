
/* Funcion playAudio(e) recibe evento de keydown, si existe sonido asociado a la key presionada 
lo reproduce y agrega la classe .playing css para animar la key  */
window.addEventListener('keydown', playAudio );
function playAudio(e){   

    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keyElement= document.querySelector(`.key[data-key="${e.keyCode}"]`);
   
  
    if(audio==null) return; // retorna si no existe audio
    audio.currentTime=0; // rebobina el audio al inicio si es que aun esta reproduciendoce para no esperar a que termine
    audio.play();
    keyElement.classList.add('playing'); 
    setTimeout(()=> keyElement.classList.remove('playing'),100);     
}

// se selecciona todos lo selectores .key

const keys = document.querySelectorAll('.key');

keys.forEach( key=> key.addEventListener('click',playAudioOnClick));

function playAudioOnClick(e){   


    const audio= document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
    const keyElement= document.querySelector(`.key[data-key="${e.target.dataset.key}"]`);
   
  
    if(audio==null) return; // retorna si no existe audio
    audio.currentTime=0; // rebobina el audio al inicio si es que aun esta reproduciendoce para no esperar a que termine
    audio.play();
    keyElement.classList.add('playing');      
    setTimeout(()=> keyElement.classList.remove('playing'),100)
}





