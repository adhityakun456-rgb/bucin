document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".sticker-container");

  // Kalau container belum ada, bikin otomatis
  const area = container || document.body;

  // 20 stiker
  for (let i = 1; i <= 20; i++) {
    const img = document.createElement("img");

    img.src = `stiker_${String(i).padStart(2, "0")}.png`;
    img.className = "stiker";
    img.alt = `Stiker ${i}`;

    // Animasi muncul satu-satu
    img.style.animationDelay = `${i * 0.15}s`;

    area.appendChild(img);
  }
const music = new Audio("musik.mp3");
  

  music.loop = true;
  music.volume = 0.5;

  // Mulai musik setelah user menyentuh halaman
  document.body.addEventListener(
    "click",
    () => {
      music.play().catch(() => {});
    },
    { once: true }
  );
});
