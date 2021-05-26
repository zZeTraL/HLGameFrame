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
                        <img src="img/web/logo-game.png" alt="Logo">
                    </div>
                    <div class="setting-volume">
                        <h3>Sound</h3>
                        <div class="slidecontainer">
                            <i class="fas fa-volume-down"></i>
                            <input id="background-video-volume" type="range" min="0" max="100" value="50" class="slider" onchange="updateVolume(this.value);">
                            <i class="fas fa-volume-up"></i>
                        </div>
                    </div>
                </div>
                <div id="menu-setting" class="menu-setting">
                    <img class="menu-setting-img padr-15" src="img/web/setting.png" alt="setting" id="setting-button">
                </div>
                <div id="menu-logo" class="menu-logo">
                    <img src="img/web/logo-game.png" alt="Logo">
                </div>
                <div id="menu-btn" class="menu-bouton">
                    <img id="play" src="img/web/play.png" alt="play">
                    <img id="story" src="img/web/story.png" alt="story">
                    <img id="editor" src="img/web/editor.png" alt="editor">
                </div>
            </div>
            <div class="background-video-container background-video-border">
                <video id="background-video" autoplay loop class="responsive-iframe">
                    <source src="img/web/video.mp4" type="video/mp4">
                </video>
                <video id="background-video-loading" autoplay loop class="responsive-iframe background-video-loading">
                    <source src="img/web/loading.mp4" type="video/mp4">
                </video>
                <div id="game-section" class="game-section">
                    <div id="canvasGame" class="canvas"></div>
                    <aside class="score-display">
                        <h3>Scoreboard</h3>
                        <div class="info-row">
                            <div class="info-bomb-4">
                                <p class="info-txt" id="count4"></p>
                            </div>
                            <div class="info-bomb-8">
                                <p class="info-txt" id="count8"></p>
                            </div>
                        </div>
                        <div class="info-row">
                            <div class="info-dead">
                                <p class="info-txt" id="nbDeMorts"></p>
                            </div>
                            <div class="info-score">
                                <p class="info-txt" id="nbDeCoups"></p>
                            </div>
                        </div>
                        <div id="menu-help" class="menu-help">
                            <img class="menu-help-img padr-15" src="img/web/help.png" alt="help" id="help-button">
                        </div>
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