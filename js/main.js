/// <reference types="../@types/jquery" />

$("#open").on("click", () => {
  $("#inner-box").animate({ width: "18rem" }, 1000);
  $("#open").addClass("d-none");
});

$("#close").on("click", () => {
  $("#inner-box").animate({ width: "0px" }, 1000, () => {
    $("#open").removeClass("d-none", 500);
  });
});

$('#one').on('click', ()=>{
    $('#one p').slideToggle(500)
})

$('#two').on('click', function () {
    $('#two p').slideToggle(500);
  });
$('#three').on('click', function () {
    $('#three p').slideToggle(500);
  });
$('#four').on('click', function () {
    $('#four p').slideToggle(500);
  });
  

// ! counter 
var countDownDate = new Date("Oct 29, 2024 15:37:25").getTime();

var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    document.getElementById("day").innerHTML = days + ' D'
    document.getElementById("hours").innerHTML = hours + ' h'
    document.getElementById("min").innerHTML = minutes + ' m'
    document.getElementById("sec").innerHTML = seconds +' s'
      
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("day").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("min").innerHTML = "0";
        document.getElementById("sec").innerHTML = "0";
        document.getElementById("details").innerHTML = "EXPIRED";
      }
  }, 1000);
