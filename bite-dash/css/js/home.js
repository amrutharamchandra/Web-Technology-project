async function loadRestaurants() {
  const res = await fetch('assets/data/restaurants.json');
  const restaurants = await res.json();
  const container = document.getElementById('restaurantList');
  container.innerHTML = '';

  // Show only first 6 initially
  restaurants.slice(0, 6).forEach(rest => {
    const card = document.createElement('div');
    card.className = 'restaurant';
    card.innerHTML = `
      <img src="${rest.image}" alt="${rest.name}">
      <h3>${rest.name}</h3>
      <p>${rest.description}</p>
    `;
    card.onclick = () => loadDishes(rest.id);
    container.appendChild(card);
  });
}

async function loadDishes(restaurantId) {
  const res = await fetch('assets/data/foodData.json');
  const foods = await res.json();
  const dishList = document.getElementById('dishList');
  dishList.innerHTML = '';

  const filtered = foods.filter(f => f.restaurantId === restaurantId);
  filtered.forEach(dish => {
    const div = document.createElement('div');
    div.className = 'dish';
    div.innerHTML = `
      <img src="${dish.image}" alt="${dish.name}">
      <h4>${dish.name}</h4>
      <p>₹${dish.price}</p>
    `;
    dishList.appendChild(div);
  });
}

function toggleLoginModal() {
  const modal = document.getElementById('loginModal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // Add logic to verify credentials from JSON
  alert(`Logging in as ${username}`);
}
function showRegister() {
  alert("Redirect to Register Page or Open Register Modal");
  // Optional: Implement inline register form here
}

window.onload = loadRestaurants;
