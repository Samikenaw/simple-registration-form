document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    // Clear any previous messages
    message.textContent = "";

    // Basic validation
    if (password !== confirmPassword) {
      message.textContent = "Passwords do not match!";
      return;
    }

    message.textContent = "Registration successful!";
    message.style.color = "green";

    // You can now send the data to a server or process it further
  });
