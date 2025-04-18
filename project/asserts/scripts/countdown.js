// Set the target date and time (May 10 2025 16:30:00 GMT+2)
const targetDate = new Date("May 10 2025 16:30:00 GMT+2").getTime();

// Function to update the countdown timer every second
function updateCountdown() {
  const now = new Date().getTime(); // Current time
  const distance = targetDate - now; // Calculate the time difference

  // Calculate weeks, days, hours, minutes, and seconds
  const weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the HTML elements with the calculated values
  document.getElementById("weeks").innerText = weeks;
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown").innerHTML = "<p>The match has started!</p>";
  }
}

// Run the countdown function every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();