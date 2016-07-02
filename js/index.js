[].forEach.call(document.querySelectorAll('.steklo'), (e) => {
    var t = [Math.floor(Math.random() * 220), Math.floor(Math.random() * 220), Math.floor(Math.random() * 220)];
    e.style.backgroundColor = `rgba(${t[0]},${t[1]},${t[2]},0.30)`;
});

BG.addEventListener('click', function() {
    if (BG.style.backgroundImage === "") {
        BG.style.backgroundImage = "url('../land.png')";
    } else {
        BG.style.backgroundImage = "";
    };
})