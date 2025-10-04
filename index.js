
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