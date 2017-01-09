/**
 * Created by apdun on 1/1/2017.
 */
$( document ).ready(function(){
    $(".aboutMe").load('about.html');
    $(".blog").load('blog.html');
    $(".projects").load('projects.html');
    $(".resume").load('resume.html');
    $("#contactCard").load('contactCard.html');
    $(".tooltipped").tooltip({delay: 50});
    $(".collapsible").collapsible();
    $('.scrollspy').scrollSpy();
    console.log(data);
});

 function setResume() {
     console.log("In setResume()");
     document.getElementById('resumeCard').innerText("Name");
     $("#resume").append("Name");
 }
