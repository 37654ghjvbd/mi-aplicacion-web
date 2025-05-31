document.getElementById('consulta-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Consulta enviada con éxito. Nos pondremos en contacto contigo pronto.');
});
// Inicializar el carrusel
const myCarousel = document.querySelector('#carouselMain');
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  touch: true
});
