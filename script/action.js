

$('.second--nav .nav-link').click(function (e) {
  $('.second--nav .nav-link').removeClass('current');
  let havclass = $(e.target).hasClass('.current');
  if (havclass == false) {
    $(e.target).addClass('current');
  }
});
$('#navbarNav .nav-link').click(function (e) {
  $('#navbarNav .nav-link').removeClass('activ');
  let havclass = $(e.target).hasClass('.activ');
  if (havclass == false) {
    $(e.target).addClass('activ');
  }
});
  event.preventDefault()