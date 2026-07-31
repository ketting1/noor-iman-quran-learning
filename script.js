alert("script.js is working!");
function startLesson() {
    window.location.href = "lessons/alphabet.html";

}



function startLearning() {
    window.location.href = "lessons/alphabet.html";
}


    audio.play().catch(function(error) {
        console.log("Error playing audio:", error);
        alert("Could not play: " + letter + ".mp3");
    });
}
