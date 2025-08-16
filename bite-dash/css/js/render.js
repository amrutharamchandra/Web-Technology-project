async function loadRestaurants() {
  const container = document.getElementById('restaurantList');
  container.innerHTML = ''; // Clear before rendering

  try {
    const res = await fetch('data/restaurants.json');
    const restaurants = await res.json();
    const sliced = restaurants.slice(0, 6); // Only 6 to display

    sliced.forEach(r => {
      const card = document.createElement('div');
      card.className = 'restaurant-card';
      card.innerHTML = `
        <h3>${r.name}</h3>
        <p>${r.cuisine}</p>
        <button onclick="loadDishes('${r.id}')">View Dishes</button>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML = '<p>Error loading restaurants.</p>';
    console.error(err);
  }
}

async function loadDishes(restId) {
  const container = document.getElementById('restaurantList');
  try {
    const res = await fetch('data/fooddata.json');
    const food = await res.json();
    const dishes = food.filter(item => item.restaurantId === restId);

    container.innerHTML = `<h2>Dishes</h2>`;
    dishes.forEach(d => {
      const dish = document.createElement('div');
      dish.className = 'dish-card';
      dish.innerHTML = `
        <h4>${d.name}</h4>
        <p>${d.description}</p>
        <strong>₹${d.price}</strong>
      `;
      container.appendChild(dish);
    });
  } catch (err) {
    container.innerHTML = '<p>Error loading dishes.</p>';
  }
}
