


const key_A = document.getElementById('key_A');
const key_S = document.getElementById('key_S');
const key_D = document.getElementById('key_D');
const key_F = document.getElementById('key_F');
const key_G = document.getElementById('key_G');
const key_H = document.getElementById('key_H');
const key_J = document.getElementById('key_J');
const key_K = document.getElementById('key_K');
const key_L = document.getElementById('key_L');


const audio_A = document.getElementById('audio_A');
const audio_S = document.getElementById('audio_S');
const audio_D = document.getElementById('audio_D');
const audio_F = document.getElementById('audio_F');
const audio_G = document.getElementById('audio_G');
const audio_H = document.getElementById('audio_H');
const audio_J = document.getElementById('audio_J');
const audio_K = document.getElementById('audio_K');
const audio_L = document.getElementById('audio_L');



const onClick = (key)=>{

    switch (key) {
        case 'A':
            audio_A.play();
            break;
    
        default:
            break;
    }
    


}

key_A.addEventListener('click',()=>onClick('A'))











