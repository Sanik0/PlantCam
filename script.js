document.querySelectorAll(".cam").forEach(button => {
    button.addEventListener("click", function() {
        document.getElementById("cameraInput").click();
    });
});
