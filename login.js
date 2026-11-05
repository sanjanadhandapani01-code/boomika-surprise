function login() {

    let name = document.getElementById("username")
        .value.trim().toLowerCase();

    let pass = document.getElementById("password").value;

    let message = document.getElementById("message");

    if (name === "boomika" && pass === "bs") {

        message.style.color = "#8dffbd";

        message.innerHTML =
            "😂 OMG!! It's actually Boomika!!<br>" +
            "Identity confirmed! 💙<br>" +
            "Sanjana's official headache detected! 🤣";

        setTimeout(function() {
            window.location.href = "welcome.html";
        }, 2500);

    } else {

        let funnyMessages = [
            "🤣 Wrong! Even Google doesn't know you!",
            "🚨 Suspicious person detected!",
            "😂 Bestie certificate rejected!",
            "🙄 Try again, genius!",
            "💀 Access denied! Who are you?"
        ];

        let random = Math.floor(
            Math.random() * funnyMessages.length
        );

        message.style.color = "#ffb6c1";
        message.innerHTML = funnyMessages[random];
    }
}