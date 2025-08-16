document.getElementById("loginSubmit").addEventListener("click", () => {
  const role = document.getElementById("role").value;
  if (role === "user") window.location.href = "user.html";
  else if (role === "admin") window.location.href = "admin.html";
  else if (role === "delivery") window.location.href = "delivery.html";
  else if (role === "ceo") window.location.href = "ceo.html";
});
