const boom = new Audio('../sounds/boom.wav');
const clap = new Audio('../sounds/clap.wav');
const hit = new Audio('../sounds/hihat.wav');
const kick = new Audio('../sounds/kick.wav');
const openhat = new Audio('../sounds/openhat.wav');
const ride = new Audio('../sounds/ride.wav');
const snare= new Audio('../sounds/snare.wav');
const tink = new Audio('../sounds/tink.wav');
const tom = new Audio('../sounds/tom.wav');

// ----------------------play sound on click-----------------------------
const cymbal= document.querySelector('.ride-cymbal');
cymbal.addEventListener('click', () =>{
       ride.pause();
       ride.currentTime = 0;
       ride.play();
       
})

const floorDrum= document.querySelector('.floor-drum');
floorDrum.addEventListener('click', () =>{
    boom.pause();
    boom.currentTime = 0;
    boom.play();
})

const cymbal2= document.querySelector('.ride-cymbal-2');
cymbal2.addEventListener('click', () =>{
       hit.pause();
       hit.currentTime = 0;
       hit.play();
})

// function animate() {
//        document.querySelector('.tom-rack-left-lid').className = ('.animate')

// }





const tomRackLeft= document.querySelector('.tom-rack-left');

tomRackLeft.addEventListener('click', () =>{
       kick.pause();
       kick.currentTime = 0;
       kick.play();
       // let lid=document.querySelector('#try')
       // lid.className = "animate" ;




})





const tomRackRight= document.querySelector('.tom-rack-right');
tomRackRight.addEventListener('click', () =>{
       snare.pause();
       snare.currentTime = 0;
       snare.play();
})
const sideDrum= document.querySelector('.side-drum');
sideDrum.addEventListener('click', () =>{
       tink.pause();
       tink.currentTime = 0;
       tink.play();
})
const bassDrum= document.querySelector('.bass-drum');
bassDrum.addEventListener('click', () =>{
       tom.pause();
       tom.currentTime = 0;
       tom.play();
})


const hihat= document.querySelector('.hihat-top');
hihat.addEventListener('click', () =>{
       openhat.pause();
       openhat.currentTime = 0;
       openhat.play();
})
const hihatbottom= document.querySelector('.hihat-bottom');
hihatbottom.addEventListener('click', () =>{
       openhat.pause();
       openhat.currentTime = 0;
       openhat.play();
})
// leftRackLid= document.querySelector('.left-rack-lid');
















// --------------------------play sound on clicking the display box------------------
const keyBoxes= document.getElementsByTagName('li');
const sound = [boom, clap, hit, kick, openhat, ride, snare, tink, tom];
for (let i=0; i<keyBoxes.length; i++){
    keyBoxes[i].addEventListener('click', () =>{
        sound[i].pause();
        sound[i].currentTime = 0;
        sound[i].play();
    })}


// -------------------------------play sound on key board hit------------------
const keyHit =['b','c','h','k','o','r','s','t','m'];
window.addEventListener('keydown', (event) =>{
    let key = event.key;
    let kCode= event.code;

    for (let i=0; i<keyBoxes.length; i++){
        if (key === keyHit[i]){
            sound[i].pause();
            sound[i].currentTime = 0;
            sound[i].play();
        }

}});


   