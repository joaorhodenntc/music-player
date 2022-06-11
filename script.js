const buttonPlay = document.getElementById('play')
const buttonPause = document.getElementById('pause')
const buttonReset = document.getElementById('reset')
const buttonNext = document.getElementById('next')
const audio = document.querySelector('audio')
const video = document.querySelector('video')
const imagem = document.getElementById('imagem')

var videos = ['/videos/clipe.mp4','/videos/tommy.mp4','/videos/post.mp4','/videos/chosen.mp4'];
console.log (videos.length)
            
buttonPlay.addEventListener('click', ()=>{
    video.play()
    imagem.style.display = 'none'
    video.style.display = 'block'
    buttonPause.style.display = 'block'
    buttonReset.style.display = 'block'
    buttonNext.style.display = 'block'
})

buttonPause.addEventListener('click', ()=>{
    video.pause()
    buttonPlay.innerHTML = "Continue"
})

buttonReset.addEventListener('click', ()=> {
   location.reload()
})

buttonNext.addEventListener('click', ()=>{
    video.setAttribute('src',videos[1])
    video.play()
    buttonNext.addEventListener('click',()=>{
        video.setAttribute('src', videos[2])
        video.play()
        buttonNext.addEventListener('click',()=>{
            video.setAttribute ('src', videos[3])
            video.play()
        })
    })
})
