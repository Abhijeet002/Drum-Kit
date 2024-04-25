var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);        
        buttonAnimation(buttonInnerHTML)
    });
};


document.addEventListener("keypress",function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})


function makeSound(key){
    
    switch (key) {
        case "w":
            var crash= new Audio('sounds/crash.mp3')
            crash.play();
            break;
    
        case "a":
            var kickBass = new Audio('sounds/kick-bass.mp3')
            kickBass.play();
            break;
            
        case "s":
            var snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;
        
        case "d":
            var tom_1 = new Audio('sounds/tom-1.mp3')
            tom_1.play();
            break;
    
        case "j":
            var tom_2 = new Audio('sounds/tom-2.mp3')
            tom_2.play();
            break;
    
        case "k":
            var tom_3 = new Audio('sounds/tom-3.mp3')
            tom_3.play();
            break;
    
        case "l":
            var tom_4 = new Audio('sounds/tom-4.mp3')
            tom_4.play();
            break;
        
    
            default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeKey = document.querySelector("."+ currentKey)

    activeKey.classList.add("pressed")

    setTimeout(function() {
        activeKey.classList.remove("pressed")
    },100)
}

