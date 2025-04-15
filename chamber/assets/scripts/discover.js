document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector(".grid-container");
    const visitorMessage = document.getElementById("visitor-message");

    // Fetch JSON data and generate cards
    fetch("assets/data/discover.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            data.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <h2>${item.title}</h2>
                    <figure>
                        <img src="${item.image}" alt="${item.title}">
                    </figure>
                    <address>${item.address}</address>
                    <p>${item.description}</p>
                    <button onclick="window.location.href='${item.link}'">Learn More</button>
                `;

                gridContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            gridContainer.innerHTML = `<p>Failed to load data. Please try again later.</p>`;
        });

    // Visitor message logic
    const lastVisit = localStorage.getItem("lastVisit");
    const currentVisit = Date.now();

    if (!lastVisit) {
        visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const timeDifference = currentVisit - parseInt(lastVisit, 10);
        const daysSinceLastVisit = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysSinceLastVisit < 1) {
            visitorMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitorMessage.textContent = `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit > 1 ? "s" : ""} ago.`;
        }
    }

    localStorage.setItem("lastVisit", currentVisit);
});