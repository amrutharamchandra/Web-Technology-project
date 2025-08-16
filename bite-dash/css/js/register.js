document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!username || !email || !password || !address) {
    document.getElementById("message").textContent = "All fields are required!";
    return;
  }

  // Load existing users from JSON (mock logic)
  fetch("assets/data/modules/user/profile.json")
    .then(res => res.json())
    .then(users => {
      // Check if username or email already exists
      const userExists = users.some(user => user.username === username || user.email === email);
      if (userExists) {
        document.getElementById("message").textContent = "User already exists!";
      } else {
        users.push({ username, email, password, address });

        // Simulate saving (in real use, this would be handled by backend)
        localStorage.setItem("users", JSON.stringify(users));
        document.getElementById("message").textContent = "Registered successfully!";
        setTimeout(() => window.location.href = "login.html", 1500);
      }
    })
    .catch(() => {
      // If profile.json is not accessible, use fallback (first time register)
      const newUserList = [{ username, email, password, address }];
      localStorage.setItem("users", JSON.stringify(newUserList));
      document.getElementById("message").textContent = "Registered successfully!";
      setTimeout(() => window.location.href = "login.html", 1500);
    });
});
