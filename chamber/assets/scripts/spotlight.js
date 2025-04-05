async function fetchSpotlights() {
    try {
        const response = await fetch('assets/data/members.json');
        const data = await response.json();

        // Filter gold and silver members
        const goldSilverMembers = data.members.filter(
            member => member.membership === 3 || member.membership === 2 // 3 = Gold, 2 = Silver
        );

        // Randomly select 2-3 members
        const randomMembers = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        // Populate spotlight section
        const spotlightContainer = document.getElementById('spotlight-container');
        spotlightContainer.innerHTML = randomMembers
            .map(
                member => `
                <div class="member-card">
                    <img src="assets/images/${member.image}" alt="${member.name}" loading="lazy">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>Phone: ${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                    <p><strong>Membership Level:</strong> ${member.membership === 3 ? 'Gold' : 'Silver'}</p>
                </div>
            `
            )
            .join('');
    } catch (error) {
        console.error('Error fetching spotlight data:', error);
    }
}

fetchSpotlights();