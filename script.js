function tampilkanPesan() {
  const pesan = document.getElementById("pesanRahasia");
  const musik = document.getElementById("musik");

  if (pesan) {
    pesan.style.display = "block";
  }

  if (musik) {
    musik.play().catch(() => {
      console.log("Musik menunggu interaksi pengguna.");
    });
  }

  buatHati();
}

function buatHati() {
  for (let i = 0; i < 15; i++) {
    const hati = document.createElement("div");

    hati.className = "heart";
    hati.innerHTML = "❤️";

    hati.style.left = Math.random() * 100 + "vw";
    hati.style.fontSize = (15 + Math.random() * 20) + "px";
    hati.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(hati);

    setTimeout(() => {
      hati.remove();
    }, 6000);
  }
}
