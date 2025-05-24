// ─── Menú hamburguesa ───────────────────────────
const toggle = document.querySelector('.menu-toggle');
const menuNav = document.querySelector('.navegacion .menu');
if (toggle && menuNav) {
  toggle.addEventListener('click', () => {
    menuNav.classList.toggle('active');
  });
}

// ─── Simulador de compra ───────────────────────────
function evaluarCompra(respuesta) {
  const mensaje = document.getElementById("respuestaCompra1");
  if (respuesta === "A") {
    mensaje.textContent = "¡Correcto! Revisa siempre opiniones y el sitio.";
    mensaje.style.color = "green";
    document.getElementById("pasoFinalCompra").classList.remove("oculta");
  } else if (respuesta === "C") {
    mensaje.textContent = "Bien, buscar otra web oficial es inteligente.";
    mensaje.style.color = "orange";
    document.getElementById("pasoFinalCompra").classList.remove("oculta");
  } else {
    mensaje.textContent = "¡Cuidado! Nunca compres sin comprobar el sitio.";
    mensaje.style.color = "red";
  }
}

function validarFormularioCompra() {
  const nombre  = document.getElementById("nombreCompra")?.value.trim() || "";
  const tarjeta = document.getElementById("tarjetaCompra")?.value.trim() || "";
  const email   = document.getElementById("emailCompra")?.value.trim() || "";
  const mensaje = document.getElementById("mensajeFinalCompra");

  if (!nombre || !tarjeta || !email) {
    mensaje.textContent = "Rellena todos los campos, por favor.";
    mensaje.style.color = "red";
    return false;
  }

  mensaje.textContent = "¡Simulación completada! Nunca compres sin comprobar el sitio.";
  mensaje.style.color = "green";
  return false;
}

// ─── Favoritos y animación ───────────────────────────
let favoritos = [];

function marcarFavorito(btn, producto) {
  const icon  = btn.querySelector('i');
  const label = btn.querySelector('.etiqueta-gusto');
  const activo = btn.classList.toggle('activo');

  if (activo) {
    favoritos.push(producto);
    if (label) label.style.display = 'block';
  } else {
    favoritos = favoritos.filter(item => item !== producto);
    if (label) label.style.display = 'none';
  }

  // Actualizar contador
  const contador = document.getElementById("favoritos-num");
  if (contador) contador.textContent = favoritos.length;

  // Animación de latido
  const heartIcon = document.getElementById("icono-favoritos");
  if (heartIcon) {
    heartIcon.classList.add("highlight-heart");
    setTimeout(() => heartIcon.classList.remove("highlight-heart"), 600);
  }
}

// ─── Modal de consejo y guía ───────────────────────────
// Función para mostrar el modal con el consejo de ciberseguridad
function mostrarConsejoCompra(producto) {
  const consejos = [
    '<i class="fi fi-rr-lock"></i> Asegúrate de que la web tenga HTTPS antes de comprar.',
    '<i class="fi fi-rr-shopping-bag"></i> Compara precios en varias tiendas antes de pagar.',
    '<i class="fi fi-rr-package"></i> Verifica siempre la reputación del vendedor.',
    '<i class="fi fi-rr-credit-card"></i> Nunca guardes tu tarjeta en sitios desconocidos.',
    '<i class="fi fi-rr-envelope"></i> Cuidado con correos falsos de confirmación de compra.'
  ];

  const aleatorio = consejos[Math.floor(Math.random() * consejos.length)];

  const modal = document.getElementById("modal-consejo");
  modal.querySelector(".modal-contenido").innerHTML = `
    <span class="modal-cerrar" onclick="cerrarModal()">×</span>
    <h3><i class="fi fi-sr-lock"></i> Consejo de Ciberseguridad</h3>
    <p>${aleatorio}</p>
  `;
  modal.style.display = "flex";
}


function cerrarModal() {
  const modal = document.getElementById("modal-consejo");
  if (modal) modal.style.display = "none";
}

// ─── Navegación estilo TikTok ───────────────────────────
const feed = document.getElementById('tiktok-feed');
if (feed) {
  const cards = Array.from(feed.querySelectorAll('.tiktok-card'));
  let current = 0;

  function showCard(idx) {
    current = Math.max(0, Math.min(cards.length - 1, idx));
    feed.scrollTo({ top: cards[current].offsetTop, behavior: 'smooth' });
  }

  document.getElementById('prev-card')?.addEventListener('click', () => showCard(current - 1));
  document.getElementById('next-card')?.addEventListener('click', () => showCard(current + 1));

  let startY = null;
  feed.addEventListener('touchstart', e => startY = e.touches[0].clientY);
  feed.addEventListener('touchend', e => {
    if (startY === null) return;
    const dy = startY - e.changedTouches[0].clientY;
    if (dy > 30) showCard(current + 1);
    if (dy < -30) showCard(current - 1);
    startY = null;
  });
}
