// Script para el menú hamburguesa
document.getElementById('navbar-toggle').addEventListener('click', function() {
    const menu = document.getElementById('navbar-menu');
    menu.classList.toggle('active'); // Alternar la clase 'active' en el menú
});
