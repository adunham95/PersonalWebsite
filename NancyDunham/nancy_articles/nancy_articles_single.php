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
    <script>
    </script>
</head>

<body>
<?php include "nancy_get_articles.php";?>
        <div class="card">
            <div class="card-image">
                <img src="nancy_articles/Bute_Park,_Cardiff.jpg" id="articlePicture" style="max-width: inherit; max-height: inherit">
                <span class="card-title" id="articleTitle">Card Title</span>
            </div>
            <div class="card-content">
                <p id="articleText">I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
                <a href="#">Read More</a>
            </div>
        </div>
</body>
</html>