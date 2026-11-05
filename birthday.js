const cake = document.getElementById("cake");
const flames = document.querySelectorAll(".flame");

let clicked = false;

// Cake click function

cake.addEventListener("click", function() {

    if (clicked) return;

    clicked = true;

    // Blow out candles

    flames.forEach(function(flame) {
        flame.style.display = "none";
    });

    document.getElementById("instruction").innerText =
        "YAYYYY! HAPPY BIRTHDAY BOOMIKA! 🥳";

    // Show birthday message

    document.getElementById("birthdayMessage").style.display =
        "block";

    // Confetti celebration

    for (let i = 0; i < 60; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.innerText = ["🎉", "✨", "💙", "🎊"][
            Math.floor(Math.random() * 4)
        ];

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.animationDelay = Math.random() * 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(function() {
            confetti.remove();
        }, 5000);
    }

    // Show gift button

    document.getElementById("giftBtn").style.display =
        "inline-block";

});

// Gift click

document.getElementById("giftBtn").addEventListener("click", function() {

    document.getElementById("giftMessage").style.display =
        "block";

    this.style.display = "none";

});