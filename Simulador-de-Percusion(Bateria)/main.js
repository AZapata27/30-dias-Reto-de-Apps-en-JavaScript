
window.addEventListener('keydown',(e)=>{

  const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio);

  if(audio==null) return;
  audio.currentTime=0;
  audio.play();


})





