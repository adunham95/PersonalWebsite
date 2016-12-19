<head xmlns="http://www.w3.org/1999/html">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Custom Style Sheets-->
    <link rel="stylesheet" href="cards.css">
    <link rel="stylesheet" href="links.css">
    <link rel="stylesheet" href="overall.css">

    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.indigo-orange.min.css" />
    <script defer src="https://code.getmdl.io/1.1.3/material.min.js"></script>

    <!--FAB Stuff-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.1/normalize.min.css">
    <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <link href='http://fonts.googleapis.com/css?family=Raleway:100,200,300,400' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="material-floating-button-master/dist/mfb.css">
    <script src="material-floating-button-master/dist/lib/modernizr.touch.js"></script>
    <script src="material-floating-button-master/dist/mfb.js"></script>
    <link href="http://www.bebzcozzy.com/css/ResponsiveElement.css" rel="stylesheet">

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

    <!--Easter Egg-->
    <link rel="stylesheet" href="../Custom%20Css/starwarsintro.css">

</head>
<body>
<div class="star-wars-intro">

    <!-- Blue Intro Text -->
    <p class="intro-text">
        A few days ago, during...
    </p>

    <!-- Logo Image or Text goes in here -->
    <h2 class="main-logo">
        <img src="photos/waterfall.jpg">
    </h2>

    <!-- All Scrolling Content Goes in here -->
    <div class="main-content">

        <div class="title-content">
            <p class="content-header">EPISODES IV-VI<br/>A Movie Marathon</p>

            <br>

            <p class="content-body">
                After years of galactic silence, civilization is on the brink of a new Star Wars release.
                Now, with the Force preparing to awaken, the people of Earth seek solace in films of old.
                With nowhere to turn, they gather in great numbers and watch the original trilogy without
                rest. Three films. 6 hours. 24 minutes. Popcorn. Slushies. Total elation.
            </p>

            <!-- button or link or whatever -->
<!--            <a href="#" class="space-button">Download The Code Now!</a>a-->

        </div>
    </div>
</div>
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <?php include("nav-class.html");?>
    <main class="mdl-layout__content">
        <div class="OnlyforHandheld">
            <?php include("contact-fab.html");?>
        </div>
        <div class="page-content">
            <div class="mdl-grid">
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet mdl-cell--12-col-phone OnlyforWeb">
                <!--Right Sidebar-->

                <!--Side Cards-->
                <?php include("contact-card.html");?>
            </div>
        </div>
</div>
</main>
</div>
</body>
