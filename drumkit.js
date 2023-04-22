
for(var i =0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var x=this.innerHTML;
        clicked(x);
    });


}

document.addEventListener("keypress", function(event){
    clicked(event.key);
});

function clicked(key){
    
    switch (key) {
        case "w":
            var crash= new Audio("sounds/crash.mp3");
            crash.play()
            break;
    
        case "a":
            var aud= new Audio("sounds/kick-bass.mp3");
            aud.play()
            break;
    
        case "s":
            var aud= new Audio("sounds/snare.mp3");
            aud.play()
            break;
    
        case "d":
            var aud= new Audio("sounds/tom-1.mp3");
            aud.play()
            break;
    
        case "j":
            var aud= new Audio("sounds/tom-2.mp3");
            aud.play()
            break;
    
        case "k":
            var aud= new Audio("sounds/tom-3.mp3");
            aud.play()
            break;
    
        case "l":
            var aud= new Audio("sounds/tom-4.mp3");
            aud.play()
            break;
    
        default:
            break;
    }
}