/* directory.js */

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const membersContainer = document.getElementById('members-container');
const gridViewBtn = document.getElementById('gridView');
const listViewBtn = document.getElementById('listView');

gridViewBtn.addEventListener('click', () => {
    membersContainer.classList.add('grid-view');
    membersContainer.classList.remove('list-view');
});

listViewBtn.addEventListener('click', () => {
    membersContainer.classList.add('list-view');
    membersContainer.classList.remove('grid-view');
});

async function getMembers() {
    const response = await fetch('assets/data/members.json');
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {
    membersContainer.innerHTML = '';
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');
        card.innerHTML = `
            <img src="../assets/images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        membersContainer.appendChild(card);
    });
}

getMembers();
