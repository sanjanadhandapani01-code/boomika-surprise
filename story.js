
function openLetter() {

    const envelope = document.getElementById("envelope");

    envelope.classList.add("open");

    document.getElementById("openBtn").style.display = "none";

    document.querySelector(".hint").innerText =
        "A little reminder: You are special to me! 💙";

    setTimeout(function() {

        document.getElementById("nextBtn").style.display =
            "inline-block";

    }, 1500);

}

function nextPage() {

    window.location.href = "gallery.html";

}