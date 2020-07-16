

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

$(".design-fill--next").click(function (e) {
  $("#board").addClass("open-design--board");
  $("#board").removeClass("d-none");
  
 })

$("#board .close-btn").click(function (e) {
  $("#board").removeClass("open-design--board");
  $("#board").addClass("d-none");
  
 })


$(".chk").click(function (e){
  $(this).toggleClass("chked")
});



$(".card-1 i.fa-bars").click(function (e) {
  
$( ".card-1 .theme-card-info--modal").toggleClass("slid-out");
  
})
$(".card-2 i.fa-bars").click(function (e) {
  
$( ".card-2 .theme-card-info--modal").toggleClass("slid-out");
  
})
$(".card-3 i.fa-bars").click(function (e) {
  
$( ".card-3 .theme-card-info--modal").toggleClass("slid-out");
  
})
 

$("button.acpt").click(function (e) {
  
  $(".chk-box").addClass("check");
  $(".theme-card-info--modal").removeClass("slid-out");
   
})
 

$("button.ignor").click(function (e) {
  
  $(".chk-box").removeClass("check");
  $(".theme-card-info--modal").removeClass("slid-out");
  
 })

$(".el").click(function (e) {
  $(".info-each-theme-sec").removeClass("d-none");
  
  
 })

$(".close-btn").click(function (e) {
  $(".info-each-theme-sec").addClass("d-none");
  
  
 })

$("#drop-filter").click(function (e) {
  $(".drop-1").toggleClass("hide-nav");
  if ($(".drop-1").hasClass("hide-nav")) {
    $("i.arrow-1").removeClass("up");
  }
  else {
    $("i.arrow-1").addClass("up");
  }
  
 })

$("#drop-assign").click(function (e) {
  $(".drop-2").toggleClass("hide-nav");
  if ($(".drop-2").hasClass("hide-nav")) {
    $("i.arrow-2").removeClass("up");
  }
  else {
    $("i.arrow-2").addClass("up");
  }
  
 })




$("i.fa-bars").click(function (e) {
  $(".sidebar-menu").addClass("sidebar-close");
  $("i.fa-bars").addClass("hide-bar");
  $("i.fa-times").removeClass("hide");
  
 })
$("i.fa-times").click(function (e) {
  $(".sidebar-menu").removeClass("sidebar-close");
  $("i.fa-bars").removeClass("hide-bar");
  $("i.fa-times").addClass("hide");
  
})
 
 $(".chkbox").click(function (e){
  $(this).toggleClass("chked")
});

 $(document).ready(function() {
$(".covid-19-btn button").click(function () {
    $(".covid-19-btn button").removeClass("active-btn");
    $(this).addClass("active-btn");        
});
});
 
$(document).ready(function () {
$(".design-tools div").click(function () {
    $(".design-tools div").removeClass("active-tool");
  $(this).addClass("active-tool");   
 
});
});

$("#question").on("focusin", function () {
  $(".query .camra").addClass("open");
}).on("focusout", function () {
  
  $(".query .camra").removeClass("open");
})
