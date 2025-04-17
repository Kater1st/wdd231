document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const menuIcon = document.querySelector('.menu-icon');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });
});


    // Set the target date and time (December 20th, 2020, 9:30 0M GMT+0)
    const targetDate = new Date("December 21 2024 16:30:00 GMT+2").getTime();

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

    
// Blog data array
const blogs = [
    {
      imageUrl: "https://media.istockphoto.com/id/898665168/photo/basketball-players-playing-outdoors-on-court.jpg?s=612x612&w=0&k=20&c=xObvmzzbWQF1-mGFuQzsD46ivVLGRX83CFkPgezHxUQ=",
      topic: "Bond Tigers introduces youngblood to the team",
      description: "Once again more young stars appear in the court as they made their first debue against flames",
      date: "Dec 9, 2024",
    },
    {
      imageUrl: "https://media.istockphoto.com/id/1444386651/photo/tired-depression-or-sad-basketball-player-with-training-gear-after-game-fail-mistake-or.jpg?s=612x612&w=0&k=20&c=mpIb-4ne6ada08qmQAh7AOuUecQ3Ci1sK0ZD6TTJTgI=",
      topic: "Sox gets ejected after a technical foul",
      description: "After getting fruastrated by what he is calling a bad call, he kicked the ball making that tec foul the fifth",
      date: "Dec 11, 2024",
    },
  ];
  
  // dynamically creating blog posts
  function renderBlogs() {
    const blogContainer = document.getElementById("blogContainer");
    blogContainer.innerHTML = ""; 
  
    blogs.forEach((blog) => {
      const blogItem = `
        <div class="blog-item">
          <img src="${blog.imageUrl}" alt="${blog.topic}" class="blog-image" />
          <div class="blog-content">
            <p class="blog-date">${blog.date}</p>
            <h3 class="blog-title">${blog.topic}</h3>
            <p class="blog-description">${blog.description}</p>
            <a href="#" class="read-more">Read more</a>
          </div>
        </div>
      `;
      blogContainer.insertAdjacentHTML("beforeend", blogItem);
    });
  }
  
  
  document.addEventListener("DOMContentLoaded", renderBlogs);


  document.addEventListener("DOMContentLoaded", function () {

    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
  
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;
  });


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

