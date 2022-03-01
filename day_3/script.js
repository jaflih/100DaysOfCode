setInterval(() => {
  const h = new Date().getHours();
  document.querySelector('.n-hour').style.transform = `rotate(${((h * 30) % 360) + 90}deg)`;

  const m = new Date().getMinutes();
  document.querySelector('.n-minute').style.transform = `rotate(${((m * 6) % 360) + 90}deg)`;

  const s = new Date().getSeconds();
  document.querySelector('.n-second').style.transform = `rotate(${((s * 6) % 360) + 90}deg)`;
}, 1000);
