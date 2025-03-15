document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("Ir86_eqa03bO-GmsH"); // Tumhara EmailJS Public Key

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        let templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        emailjs.send("service_7l3883f", "template_6dhgboi", templateParams)
            .then(response => {
                alert("✅ Message Sent Successfully!");
                document.getElementById("contact-form").reset(); // Reset Form
            }, error => {
                alert("❌ Failed to Send Message. Try Again!");
            });
    });
});

// QR Code Popup Functions
function showScanner() {
    document.getElementById("qr-popup").style.display = "flex";
}

function hideScanner() {
    document.getElementById("qr-popup").style.display = "none";
}
