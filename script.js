function toggleInfo(card) {
  card.classList.toggle("active");
}


  function mostrarInfo(card) {
    card.classList.toggle("ativo");
  }


$(document).ready(function () {
  $('#tema-toggle').change(function () {
    $('body').toggleClass('tema-claro tema-escuro');
  });
});

