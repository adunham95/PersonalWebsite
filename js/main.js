/**
 * Created by apdun on 1/1/2017.
 */
$( document ).ready(function(){
    $("#mainContent").load('about.html');
    $("#contactCard").load('contactCard.html');
    $(".button-collapse").sideNav();
    $('.tooltipped').tooltip({delay: 50});
});
