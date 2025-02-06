document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    if (email) {
        alert("Thank you for signing up! We'll be in touch soon.");
    } else {
        alert("Please enter a valid email.");
    }
});