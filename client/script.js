async function fetchBookClubs() {
    const res = await fetch('http://localhost:5000/api/books');
    const data = await res.json();
    const container = document.getElementById('book-club-list');
    container.innerHTML = data.map(club => `<div>${club.name}</div>`).join('');
}
fetchBookClubs();
