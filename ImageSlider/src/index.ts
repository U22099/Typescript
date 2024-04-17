let container = document.getElementById("container") as HTMLDivElement;
let imageSlider = document.getElementById("imageSlide") as HTMLDivElement;
let images = document.getElementsByTagName("img")
let popUp = document.getElementById("popup") as HTMLDivElement
let audio = document.getElementById("audio") as HTMLAudioElement
let interval: number
let autoscroll: boolean = false

//sets the audio play on and sets an interval to loop through all images and set them as the container's background
function startAutoScroll(i:number): void{
    autoscroll = true
    audio.play()
    interval = setInterval(()=>{
        if(i >= images.length){
            i = 0
        }
        container.style.backgroundImage = `url(${images[i].src})`
        for(let q=0; q < images.length; q++){
            images[q].style.border = "none"
            images[q].style.transform = "scale(0.9)"
        }
        images[i].style.border = "2px solid blue"
        images[i].style.transform = "scale(1)"
        images[i].scrollIntoView({behavior: "smooth", inline: "center"})
        i++
    }, 3000)
}
//clears interval and stops music
function disableAutoScroll(): void{
    audio.pause()
    clearInterval(interval)
}
//show popup message
function showPopUp(msg: string): void{
    popUp.classList.remove("popup")
    void popUp.offsetWidth
    popUp.classList.add("popup")
    popUp.innerHTML = msg
}
// loop through all images and add an event listener for each of them
for(let i=0; i < images.length; i++){
    images[i].addEventListener("dblclick", ()=>{
        if(!autoscroll){
            showPopUp("AutoScroll Enabled, Double click to trigger music")
            startAutoScroll(i)
        }
    })
    images[i].addEventListener("click",()=>{
        if(autoscroll){
            showPopUp("AutoScroll Disabled")
            disableAutoScroll()
            autoscroll = false
        }
        container.style.backgroundImage = `url(${images[i].src})`
        for(let q=0; q<images.length; q++){
            images[q].style.border = "none"
            images[q].style.transform = "scale(0.9)"
        }
        images[i].style.border = "2px solid blue"
        images[i].style.transform = "scale(1)"
        images[i].scrollIntoView({behavior: "smooth", inline: "center"})
    })
}