
// WELCOME PAGE ANIMATIONS

document.addEventListener("DOMContentLoaded", function() {

    // Welcome message animation

    const container = document.querySelector(".container");

    if (container) {
        container.style.opacity = "0";

        setTimeout(function() {
            container.style.transition = "opacity 1.5s ease";
            container.style.opacity = "1";
        }, 200);
    }


    // Floating hearts animation

    function createHeart() {

        const heart = document.createElement("div");

        heart.innerHTML = "💙";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize = "20px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "0";
        heart.style.animation = "heartFloat 5s linear forwards";

        document.body.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 5000);

    }

    setInterval(createHeart, 1000);


    // Heart animation CSS

    const style = document.createElement("style");

    style.innerHTML = `
        @keyframes heartFloat {
            from {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }

            20% {
                opacity: 1;
            }

            to {
                transform: translateY(-110vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;

    document.head.appendChild(style);

});


// NEXT PAGE FUNCTION

function nextPage() {

    window.location.href = "story.html";

}