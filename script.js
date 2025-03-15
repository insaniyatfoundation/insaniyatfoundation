document.addEventListener("DOMContentLoaded", function () {
    let popup = document.getElementById("popup");
    let mainContent = document.getElementById("main-content");
    let submitBtn = document.getElementById("submitPopup");

    submitBtn.addEventListener("click", function () {
        let name = document.getElementById("popup-name").value.trim();
        let email = document.getElementById("popup-email").value.trim();

        if (name === "" || email === "") {
            alert("Please enter your Name and Email.");
            return;
        }

        // Hide popup and show main content
        popup.style.display = "none";
        mainContent.classList.remove("hidden");
    });
});
