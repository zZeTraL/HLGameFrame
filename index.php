<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript | HLGame </title>   

    <!-- CSS -->
    <link rel="stylesheet" href="css/play.css">

    <!-- FONTAWESOME LIB -->
    <script src="https://kit.fontawesome.com/45e38e596f.js" crossorigin="anonymous"></script>

</head>
<body onload="isUserOnMobile(), isGamePlayable()">
    <main>
        <section id="menu-section" class="h-auto">
            <div id="menu" class="menu-container">
                <div id="setting-menu" class="setting">
                    <div class="setting-logo">
                        <img src="img/logo-game.png" alt="Logo">
                    </div>
                    <div class="setting-volume">
                        <h3>Volume</h3>
                        <div class="slidecontainer">
                            <i class="fas fa-volume-down"></i>
                            <input id="background-video-volume" type="range" min="0" max="100" value="50" class="slider" onchange="updateVolume(this.value);">
                            <i class="fas fa-volume-up"></i>
                        </div>
                    </div>
                </div>
                <div id="menu-setting" class="menu-setting">
                    <!--<svg id="setting-button" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cogs" class="svg-inline--fa fa-cogs fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#FCF0CC" d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"></path></svg>
                    -->
                    <img class="menu-setting-img padr-15" src="img/setting.png" alt="setting" id="setting-button">
                </div>
                <div id="menu-logo" class="menu-logo">
                    <img src="img/logo-game.png" alt="Logo">
                </div>
                <div id="menu-btn" class="menu-bouton">
                    <img id="play" src="img/play.png" alt="play">
                    <img id="story" src="img/story.png" alt="story">
                    <img id="editor" src="img/editor.png" alt="editor">
                </div>
            </div>
            <div class="background-video-container background-video-border">
                <video id="background-video" autoplay loop class="responsive-iframe">
                    <source src="img/video.mp4" type="video/mp4">
                </video>
                <video id="background-video-loading" autoplay loop class="responsive-iframe background-video-loading">
                    <source src="img/loading1.mp4" type="video/mp4">
                </video>
                <div id="game-section" class="game-section">
                    <div id="canvasGame" class="canvas"></div>
                    <aside class="score-display">
                        <h3>Informations</h3>
                    </aside>
                </div>
            </div>
        </section>

        <section class="mobile">
            <h2 class="error-h2">Bip Booop Biiip</h2>
            <hr class="error-line">
            <p>Cette erreur survient si vous êtes sur mobile ou que vous venez de redimensionner votre fenêtre</p>
        </section>

        <section class="debug">
            <p id="nbDeCoups"></p>
            <p id="nbDeMorts"></p>
            <p id="count4"></p>
            <p id="count8"></p>
            <p id="track"></p>
            <p id="demo"></p>
        </section>
    </main>

    <script src="js/Setting.js"></script>
    <script src="js/GameResponsive.js"></script>
    <script src="js/GameListener.js"></script>

    <script src="js/GameSystem.js"></script><!--Contient le jeu en entier-->
    <script src="js/GameMap.js"></script>
    <script src="js/images.js"></script>
    <script src="js/Ninja.js"></script>

</body>
</html>