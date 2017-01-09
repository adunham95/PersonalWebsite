/**
 * Created by apdun on 1/1/2017.
 */
$( document ).ready(function(){
    $("#aboutMe").load('about.html');
    $("#blog").load('blog.html');
    $("#projects").load('projects.html');
    $("#resume").load('resume.html');
    $("#contactCard").load('contactCard.html');
    $(".button-collapse").sideNav();
    $('.tooltipped').tooltip({delay: 50});
    $('.collapsible').collapsible();

    var myItems;
    $.getJSON('resume.json', function (data) {
        myItems = data.items;
        console.log(myItems);
    });
});



