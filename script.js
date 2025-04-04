document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", async function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        if (name && email && message) {
            try {
                const response = await fetch("https://your-api.onrender.com/send", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, message })
                });
                
                const result = await response.json();
                if (result.success) {
                    alert("Thank you! Your message has been sent successfully.");
                    form.reset();
                } else {
                    alert("Failed to send message. Please try again later.");
                }
            } catch (error) {
                alert("An error occurred. Please try again.");
                console.error("Error:", error);
            }
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });
});
