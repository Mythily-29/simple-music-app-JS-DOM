let audio = document.getElementById('audio');
let allbtn=document.querySelectorAll('button');
let temp=0;
let seconds;
let musicObj = ["Why-this-kolaveri-di.mp3", "Vaathi-Coming-MassTamilan.io.mp3","Rowdy-Baby-MassTamilan.org.mp3",'Enjoy-Enjaami-MassTamilan.io.mp3','Arabic-Kuthu---Halamithi-Habibo-MassTamilan.so.mp3']

function togglefunction(){
  if(audio.paused){
   $('#play-icon').attr('class','fa-solid fa-pause')
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

setInterval(()=>{
  $('#total-time').text(`${Math.floor(audio.duration/60)}:${Math.floor(audio.duration%60)}`)
  $('#progress-bar').attr('max',Math.floor(audio.duration))
  $('#progress-bar').val(Math.floor(audio.currentTime));
  seconds=Math.floor(audio.currentTime);
  document.getElementById('current-time').textContent = `${Math.floor(seconds/60).toString().padStart(2, '0')}:${Math.floor(seconds%60).toString().padStart(2, '0')}`;
},1000)

function musicrange(){
  audio.currentTime=$('#progress-bar').val()
}


