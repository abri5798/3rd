document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  const message = document.getElementById("message");

  if (password !== confirm) {
    message.textContent = "Passwords do not match.";
    return;
  }

  message.textContent = "Registration successful!";
});