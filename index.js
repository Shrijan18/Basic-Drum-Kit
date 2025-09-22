

/*
document.querySelector(".w").addEventListener('click', () => {
    new Audio('sounds/tom-1.mp3').play()
});

document.querySelector(".a").addEventListener('click', () => {
    new Audio('sounds/tom-2.mp3').play()
});

document.querySelector(".s").addEventListener('click', () => {
    new Audio('sounds/tom-3.mp3').play()
});

document.querySelector(".d").addEventListener('click', () => {
    new Audio('sounds/tom-4.mp3').play()
});

document.querySelector(".j").addEventListener('click', () => {
    new Audio('sounds/snare.mp3').play()
});

document.querySelector(".k").addEventListener('click', () => {
    new Audio('sounds/crash.mp3').play()
});

document.querySelector(".l").addEventListener('click', () => {
    new Audio('sounds/kick-bass.mp3').play()
});




document.addEventListener("keydown", (e) => {

    if (e.key == "w") {
        play_audio("sounds/tom-1.mp3");
    }
    
    if (e.key == "a") {
        play_audio("sounds/tom-2.mp3");
    }

    if (e.key == "s") {
        play_audio("sounds/tom-3.mp3");
    }

    if (e.key == "d") {
        play_audio("sounds/tom-4.mp3");
    }

    if (e.key == "j") {
        play_audio("sounds/snare.mp3");
    }

    if (e.key == "k") {
        play_audio("sounds/crash.mp3");
    }

    if (e.key == "l") {
        play_audio("sounds/kick-bass.mp3");
    }

})
*/
function play_audio(name) {
    new Audio(name).play()
}

var numberDrumButton = document.querySelectorAll(".drum").length;

function forSwitch(element1) {
    switch (element1) {
        case 'w':
            // document.querySelector(".w").style
            play_audio("sounds/tom-1.mp3");
            break;

        case 'a':
            play_audio("sounds/tom-2.mp3");
            break;

        case 's':
            play_audio("sounds/tom-3.mp3");
            break;

        case 'd':
            play_audio("sounds/tom-4.mp3");
            break;

        case 'j':
            play_audio("sounds/snare.mp3");
            break;

        case 'k':
            play_audio("sounds/crash.mp3");
            break;

        case 'l':
            play_audio("sounds/kick-bass.mp3");
            break;

        default:
            console.log(drumButtonCliked);
            break;
    }


}

for (var i = 0; i < numberDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function () {
        // alert("Clicked");
        var drumButtonCliked = this.innerHTML;

        forSwitch(drumButtonCliked);
        animation(drumButtonCliked);
    })
}

function animation(element2) {
    var activeBtn = document.querySelector("." + element2);
    activeBtn.classList.add("pressed");
    
    setTimeout(() => {
        activeBtn.classList.remove("pressed");
    }, 100);
}

document.addEventListener("keydown", (e) => {
    forSwitch(e.key)
    animation(e.key)
})