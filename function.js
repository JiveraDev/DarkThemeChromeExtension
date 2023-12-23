
function updateDateTime() {
  const now = new Date();
  const currentDate = now.toLocaleDateString();
  const currentTime = now.toLocaleTimeString([], { hour12: false });

  document.querySelector('#date').textContent =  currentDate;
  document.querySelector('#time').textContent = currentTime;
}

setInterval(updateDateTime, 1000);
