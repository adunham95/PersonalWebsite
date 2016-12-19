<head xmlns="http://www.w3.org/1999/html">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Custom Style Sheets-->
    <link rel="stylesheet" href="cards.css">
    <link rel="stylesheet" href="links.css">
    <link rel="stylesheet" href="overall.css">

    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>

    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <!--Materialize-->
    <!-- Compiled and minified CSS -->
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css">
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.js"></script>


    <!--Icon Stuff-->
    <link rel="apple-touch-icon" sizes="57x57" href="photos/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="photos/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="photos/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="photos/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="photos/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="photos/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="photos/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="photos/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="photos/icons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="photos/icons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="photos/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="photos/icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="photos/icons/favicon-16x16.png">
    <link rel="manifest" href="photos/icons/manifest.json">
    <meta name="msapplication-TileColor" content="#3F51B5">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#3F51B5">

    <title>Adrian Dunham</title>

    <!--Font Awesome--->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">


</head>
<body>
<?php include("nav-class.html");?>
<div class="row">
    <div class="col s12 m0 l3">
        <!--Left Sidebar-->
    </div>

    <div class="col s12 m8 l6">
        <!--Middle-->
        <div class="card horizontal web-height">
            <div class="card-image">
                <img class="web-picture" src="photos/webdev/logo_javascript.png">
            </div>
            <div class="card-stacked">
                <div class="card-content valign-wrapper">
                    <h2 class="header valign">Javascript</h2>
                    <p></p>
                </div>
            </div>
        </div>
        <div class="card horizontal web-height">
            <div class="card-image">
                <img class="web-picture" src="photos/webdev/html5.png">
            </div>
            <div class="card-stacked">
                <div class="card-content valign-wrapper">
                    <h2 class="header valign">HTML</h2>
                    <p></p>
                </div>
            </div>
        </div>
        <div class="card horizontal web-height">
            <div class="card-image">
                <img class="web-picture" src="photos/webdev/CSS3.png">
            </div>
            <div class="card-stacked">
                <div class="card-content valign-wrapper">
                    <h2 class="header valign">CSS</h2>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
    <div class="col s12 m4 l3">
        <!--Right Sidebar-->
        <!--Side Cards-->
        <?php include("contact-card.html");?>
    </div>
</div>
</div>
</body>
