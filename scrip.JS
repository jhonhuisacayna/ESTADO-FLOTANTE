// script.js
document.addEventListener("contextmenu", e => e.preventDefault());

function startSurprise() {
  console.log("Botón SÍ presionado correctamente");

  // Ocultar la tarjeta
  const card = document.getElementById('card');
  if (card) {
    card.style.display = 'none';
  }

  // Reproducir audio
  const music = document.getElementById('bg-music');
  if (music) {
    music.play().catch(err => console.log("Audio no cargado:", err));
  }

  // Generar animación
  createLights(30);
  createFlowers();
}

function handleNo() {
  alert("¡Tómate tu tiempo para leerlo con calma! 😊");
}

function createLights(amount) {
  for (let i = 0; i < amount; i++) {
    const light = document.createElement('div');
    light.className = 'light';
    light.style.top = Math.random() * 100 + 'vh';
    light.style.left = Math.random() * 100 + 'vw';
    light.style.animationDelay = Math.random() * 3 + 's';
    light.style.animationDuration = (1.5 + Math.random() * 2) + 's';
    document.body.appendChild(light);
  }
}

function createFlowers() {
  const flowerIcons = ['🌸', '🌺', '🌼', '🌻', '🌷'];
  setInterval(() => {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.innerText = flowerIcons[Math.floor(Math.random() * flowerIcons.length)];
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = (5 + Math.random() * 4) + 's';
    flower.style.fontSize = (20 + Math.random() * 20) + 'px';
    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), 9000);
  }, 350);
}

