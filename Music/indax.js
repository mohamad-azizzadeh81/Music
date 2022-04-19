var container = document.getElementById("container");
        
container.addEventListener("click", amalkard);

function amalkard() {
    container.classList.toggle("open");
};



$('.icon-head').click(function(){
    $('.menu').slideToggle()
})

$('#open').click(function(){
    $('.p-section1').slideToggle(1000)
})

$('#days').click(function(){
    $("body").toggleClass("bg-dark text-light");
})

$('#no').click(function(){
    alert('صفحه مورد نظر در دسترس نیست')
})
$('#no2').click(function(){
    alert('صفحه مورد نظر در دسترس نیست')
})