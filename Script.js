// Example: Simple form validation (optional)
document.querySelector("form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    if (name.trim() === "") {
        alert("Please enter your name.");
        event.preventDefault();
    }
});
