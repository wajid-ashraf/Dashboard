

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
 
$("#mymodal .btn-client-name").click(function (e) {
  $(".form-one").addClass("d-none");
  $(".form-two").removeClass("d-none");
 })
$("#mymodal .btn-project-name").click(function (e) {
  $(".form-two").addClass("d-none");
  $(".form-three").removeClass("d-none");
 })

$(".design-fill").click(function (e) {
  $("#board").addClass("open-design--board");
  $("#board").removeClass("d-none");
  
 })

$("#board .close-btn").click(function (e) {
  $("#board").removeClass("open-design--board");
  $("#board").addClass("d-none");
  
 })
