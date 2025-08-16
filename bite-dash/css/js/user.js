// js/user.js
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const [profile, orders, favorites] = await Promise.all([
      fetch("assets/data/modules/user/profile.json").then(res => res.json()),
      fetch("assets/data/modules/user/orders.json").then(res => res.json()),
      fetch("assets/data/modules/user/favorites.json").then(res => res.json())
    ]);

    renderUserProfile(profile);
    renderUserOrders(orders);
    renderUserFavorites(favorites);
  } catch (err) {
    console.error("User Data Load Error:", err);
  }
});

function renderUserProfile(data) {
  const profileEl = document.getElementById("profile");
  profileEl.innerHTML = `
    <h2>👤 ${data.name}</h2>
    <p>📧 ${data.email}</p>
    <p>📍 ${data.address}</p>
  `;
}

function renderUserOrders(orders) {
  const orderList = document.getElementById("orders");
  orderList.innerHTML = orders.map(order => `
    <li>
      <b>Order #${order.id}</b> — ${order.items.length} items —
      <span>Status: ${order.status}</span>
    </li>
  `).join("");
}

function renderUserFavorites(favorites) {
  const favList = document.getElementById("favorites");
  favList.innerHTML = favorites.map(fav => `
    <div class="card">
      <img src="${fav.image}" alt="${fav.name}" />
      <h4>${fav.name}</h4>
      <p>⭐ ${fav.rating}</p>
    </div>
  `).join("");
}
