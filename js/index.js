$(document).ready(function(){
    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav-bar').toggleClass('nav-toggle');
    })
})