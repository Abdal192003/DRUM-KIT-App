let numberOfButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButton ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(lol) {
        var button = this.innerHTML;
        buttonAnimation(button);
        switch (button) {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;

            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;

            case "j":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;

            case "k":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;

            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

            default:
                alert("Invalid");


        }
    });
};
// document.addEventListener("keydown",function());

// function playDrumSound(btn){
//     switch(btn){
//         case "w":
//         var audio=new Audio("sounds/tom-1.mp3");
//         audio.play();
//         break;

//         case "a":
//         var audio=new Audio("sounds/tom-2.mp3");
//         audio.play();
//         break;

//         case "s":
//         var audio=new Audio("sounds/tom-3.mp3");
//         audio.play();
//         break;

//         case "d":
//         var audio=new Audio("sounds/tom-4.mp3");
//         audio.play();
//         break;

//         case "j":
//         var audio=new Audio("sounds/crash.mp3");
//         audio.play();
//         break;

//         case "k":
//         var audio=new Audio("sounds/kick-bass.mp3");
//         audio.play();
//         break;

//         case "l":
//         var audio=new Audio("sounds/snare.mp3");
//         audio.play();
//         break;

//         default:
//             alert("Invalid");
//     }
// }

// // Mouse Clicking
// document.getElementById("btnw").addEventListener("click",function(ev){
//     playDrumSound("w");
//     console.log(ev);
// });
// document.getElementById("btna").addEventListener("click",function(){
//     playDrumSound("a");
// })
// document.getElementById("btns").addEventListener("click",function(){
//     playDrumSound("s");
// })
// document.getElementById("btnd").addEventListener("click",function(){
//     playDrumSound("d");
// })
// document.getElementById("btnj").addEventListener("click",function(){
//     playDrumSound("j");
// })
// document.getElementById("btnk").addEventListener("click",function(){
//     playDrumSound("k");
// })
// document.getElementById("btnl").addEventListener("click",function(){
//     playDrumSound("l");
// })

// // Keyboard Presses
// document.getElementById("btnw").addEventListener("keypress",function(hello){
//     playDrumSound("w");
//     console.log(hello)
// });
// document.getElementById("btna").addEventListener("keydown",function(){
//     playDrumSound("a");
// })
// document.getElementById("btns").addEventListener("keydown",function(){
//     playDrumSound("s");
// })
// document.getElementById("btnd").addEventListener("keydown",function(){
//     playDrumSound("d");
// })
// document.getElementById("btnj").addEventListener("keydown",function(){
//     playDrumSound("j");
// })
// document.getElementById("btnk").addEventListener("keydown",function(){
//     playDrumSound("k");
// })
// document.getElementById("btnl").addEventListener("keydown",function(){
//     playDrumSound("l");
// })

function keySound(keypress) {
    switch (keypress) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        default:
            alert("Invalid");
    }
}

document.addEventListener("keypress",function(event){
     keySound(event.key);
     buttonAnimation(event.key);
});

function buttonAnimation(event){
    var activeBtn=document.querySelector("."+event);
    activeBtn.classList.add("pressed");
    
    setTimeout(() => {
        activeBtn.classList.remove("pressed");
      }, "100");
}