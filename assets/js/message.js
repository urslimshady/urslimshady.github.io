document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        
        // Send data to server (server-side script will handle email sending)
        fetch("send_email.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Message sent successfully!");
                form.reset();
            } else {
                alert("Error sending message. Please try again later.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error sending message. Please try again later.");
        });
    });
});
