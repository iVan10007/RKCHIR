pictures.addEventListener("click", function(event) {
    let thumbnail = event.target.closest('a');
    if (!thumbnail) return;
    largeImg.src = thumbnail.href;
    event.preventDefault();
});