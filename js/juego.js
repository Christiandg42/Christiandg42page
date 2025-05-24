function iniciarEscena(n) {
    document.querySelectorAll('#seccion-juego .escena').forEach(e => e.classList.add('oculta'));
    document.getElementById(`escena${n}`)?.classList.remove('oculta');
    if (n === 1) document.getElementById('intro-juego').classList.add('oculta');
  }
  function comprobarRespuesta(esc, selec) {
    const fb = document.getElementById(`retro${esc}`);
    const btn = document.getElementById(`btnSgte${esc}`);
    const correctas = {1:'D',2:'B',3:'A'};
    if (selec === correctas[esc]) {
      fb.textContent = '✅ ¡Correcto!';
      fb.className = 'mensaje exito';
      btn.classList.remove('oculta');
    } else {
      fb.textContent = '❌ No es la mejor opción.';
      fb.className = 'mensaje error';
      btn.classList.add('oculta');
    }
  }
  function mostrarSospechoso(n) {
    document.querySelectorAll('#seccion-juego .escena').forEach(e => e.classList.add('oculta'));
    document.getElementById(`sospechoso${n}`).classList.remove('oculta');
  }
  function mostrarFinal() {
    document.querySelectorAll('#seccion-juego .escena').forEach(e => e.classList.add('oculta'));
    document.getElementById('final-juego').classList.remove('oculta');
  }
  function respuestaFinal(opcion) {
    const res = document.getElementById('retroFinal');
    if (opcion === 'carlos') {
      res.textContent = '🎉 ¡Correcto! Carlos fue el ladrón.';
      res.className = 'mensaje exito';
    } else {
      res.textContent = '❌ Incorrecto. Ese no fue el culpable.';
      res.className = 'mensaje error';
    }
  }