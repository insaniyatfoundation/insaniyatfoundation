document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.querySelector("input[type='text']").value;
        let email = document.querySelector("input[type='email']").value;
        let message = document.querySelector("textarea").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }

        alert("Thank you, " + name + "! Your message has been received.");
        form.reset();
    });
});
