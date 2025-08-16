// ✅ Toggle modal open/close
document.getElementById('openLoginBtn').onclick = () => {
  document.getElementById('loginModal').classList.remove('hidden');
};

document.getElementById('closeModal').onclick = () => {
  document.getElementById('loginModal').classList.add('hidden');
};

// ✅ Toggle Register <-> Login
document.getElementById('showRegister').onclick = (e) => {
  e.preventDefault();
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('registerForm').classList.remove('hidden');
};

document.getElementById('showLogin').onclick = (e) => {
  e.preventDefault();
  document.getElementById('registerForm').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
};

// ✅ Fake login
document.getElementById('loginForm').onsubmit = (e) => {
  e.preventDefault();
  document.getElementById('loginModal').classList.add('hidden');
  document.getElementById('restaurantList').classList.remove('hidden');
  loadRestaurants(); // <- triggers restaurant list
};

document.getElementById('registerForm').onsubmit = (e) => {
  e.preventDefault();
  alert('Registered successfully!');
  document.getElementById('showLogin').click();
};



document.getElementById('closeModal').onclick = () => {
  document.getElementById('loginModal').classList.add('hidden');
};

document.getElementById('showRegister').onclick = () => {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('registerForm').classList.remove('hidden');
};

document.getElementById('showLogin').onclick = () => {
  document.getElementById('registerForm').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
};

document.getElementById('loginForm').onsubmit = (e) => {
  e.preventDefault();
  // Validate user from JSON or localStorage (mock)
  alert('Login Successful!');
  document.getElementById('loginModal').classList.add('hidden');
  document.getElementById('restaurantList').classList.remove('hidden');
};

document.getElementById('registerForm').onsubmit = (e) => {
  e.preventDefault();
  alert('User registered!');
  document.getElementById('showLogin').click();
};
