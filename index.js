// con el querySelectorAll selecciono todos los contenedores con la clase ".panel"
// con un forEach a cada panel le agrego un evento que se escuche cuando le haga click
// este evento llama a una funcion que remueve las clases "active" a todos los paneles
// luego de ejecutar esa funcion le agrego la clase "active" al panel clickeado

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
