// Load top 6 restaurants
fetch("assets/data/modules/admin/restaurants.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("restaurantList");
    data.slice(0, 6).forEach(r => {
      const div = document.createElement("div");
      div.className = "restaurant";
      div.innerHTML = `
        <h3>${r.name}</h3>
        <p>${r.location}</p>
      `;
      container.appendChild(div);
    });
  });

document.getElementById("loginBtn").addEventListener("click", () => {
  window.location.href = "login.html";
});
