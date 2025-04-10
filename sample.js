let audio = document.getElementById('audio');
let allbtn=document.querySelectorAll('button');
let temp=0
let musicObj = ["Why-this-kolaveri-di.mp3", "Vaathi-Coming-MassTamilan.io.mp3","Rowdy-Baby-MassTamilan.org.mp3",'Enjoy-Enjaami-MassTamilan.io.mp3','Arabic-Kuthu---Halamithi-Habibo-MassTamilan.so.mp3']

function togglefunction(){
  if(audio.paused){
    timing(audio.duration);$('#play-icon').attr('class','fa-solid fa-pause')
    audio.play()
  }
  else{
    $('#play-icon').attr('class','fa-solid fa-play')
    audio.pause()
  }
}

allbtn.forEach(btn=>{
  btn.addEventListener('click',()=>{
    if(btn.classList.contains('previous')){
      temp--
      if(temp < 0){temp=musicObj.length}previousNext(temp)}
    else if(btn.classList.contains('next')){
      temp++
      if(temp>musicObj.length){temp=0}
      previousNext(temp)
    }
    else if (btn.classList.contains('shuffle')) {
      musicObj = musicObj.sort(() => 0.5 - Math.random())
      console.log(musicObj)
    }
  })
})

function previousNext(index){  
audio.src=musicObj[index]
$('#songname').text(musicObj[index])
}

function volumehandle(){
  audio.volume=$('#volume').val() / 100
}

let interval;

function timing(duration){

  clearInterval(interval);$('#progress-bar').attr('max',Math.floor(duration))
  $('#total-time').text(`${Math.floor(duration/60)}:${Math.floor(duration%60)}`)
  interval=setInterval(()=>{
  if (audio.paused) return; if(audio.ended) return;
  $('#progress-bar').val(Math.floor(audio.currentTime));
 
  let minutes=Math.floor(audio.currentTime/60);
  let seconds=Math.floor(audio.currentTime%60);
  document.getElementById('current-time').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
},1000)
}


