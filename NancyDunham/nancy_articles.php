<!DOCTYPE html>
<html>
<head>
    <!--Import Google Icon Font-->
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="../materialize/css/materialize.css" media="screen,projection" />
    <link href="../CustomCss.css" rel="stylesheet" />
    <link href="nancy_css.css" rel="'stylesheet" />

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Nancy Dunham Entertainment Journalist</title>
    <style>
    </style>
</head>

<body>

<!--Import jQuery before materialize.js-->
<script type="text/javascript" src="../https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="../materialize/js/materialize.min.js"></script>
<script type="text/javascript" src="../materialize/js/inti.js"></script>

<?php include('nancy_header.html');?>

<main style="background-image: url(notebook-hero-workspace-minimal-medium.jpg)">
    <div class="container">

        <div class="row">
            <div class="col s12 m6 l4"><?php include('nancy_articles/nancy_articles_single.html');?></div>
            <div class="col s12 m6 l4"><?php include('nancy_articles/nancy_articles_single.html');?></div>
            <div class="col s12 m6 l4"><?php include('nancy_articles/nancy_articles_single.html');?></div>
        </div>

    </div>
</main>


<?php include("nancy_footer.html");?>

</body>
</html>