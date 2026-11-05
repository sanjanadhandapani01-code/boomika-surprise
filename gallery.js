const gallery = document.getElementById("gallery");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

// CREATE 25 PHOTOS

for (let i = 1; i <= 25; i++) {

    const photo = document.createElement("div");
    photo.className = "photo";

    const img = document.createElement("img");

    img.src = "photo" + i + ".jpeg";
    img.alt = "Memory " + i;

    photo.appendChild(img);
    gallery.appendChild(photo);
}


// BUTTON CLICK

startBtn.addEventListener("click", function() {

    startBtn.disabled = true;
    startBtn.innerText = "CREATING OUR MEMORIES 💙";

    // MUSIC

    music.play().catch(error => {
        console.log("Music error:", error);
    });

    // PHOTOS ONE BY ONE

    const photos = document.querySelectorAll(".photo");

    photos.forEach(function(photo, index) {

        setTimeout(function() {
            photo.classList.add("show");
        }, index * 300);

    });

    // VIDEOS AFTER PHOTOS

    setTimeout(function() {

        const section = document.getElementById("videoSection");

        section.style.display = "block";

        const videos = document.querySelectorAll(".video-card");

        videos.forEach(function(video, index) {

            setTimeout(function() {
                video.classList.add("show");
            }, index * 800);

        });

        document.getElementById("message").innerText =
            "25 Memories, One Beautiful Friendship! 💙";

        setTimeout(function() {
            document.getElementById("nextBtn").style.display = "inline-block";
        }, 3500);

    }, 8500);

});


// NEXT PAGE

document.getElementById("nextBtn").addEventListener("click", function() {
    window.location.href = "birthday.html";
});
