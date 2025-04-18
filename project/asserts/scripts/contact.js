// Target input fields and button
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("sendBtn");

// Check if all fields are filled
function validateForm() {
  const isNameFilled = nameInput.value.trim() !== "";
  const isEmailFilled = emailInput.value.trim() !== "";
  const isMessageFilled = messageInput.value.trim() !== "";

  // Enable or disable the send button
  if (isNameFilled && isEmailFilled && isMessageFilled) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}

// Add event listeners to input fields
[nameInput, emailInput, messageInput].forEach((input) => {
  input.addEventListener("input", validateForm);
});

// Prevent form submission for demo purposes
document.getElementById("messageForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message Sent Successfully!");
});