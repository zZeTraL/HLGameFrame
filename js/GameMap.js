var taille = 20;//taille de la map
if(activateLineAndColHelp == true){
    var tileSizeInPx = 500/(taille+1);//Taille d'un carré de texture en pixel
}
else{
    var tileSizeInPx = 500/taille;//Taille d'un carré de texture en pixel
}

//La taille max (pris par rapport à l'écran 14" de l'ISEN est de 20x20 pour 25px par case = 500px*500px)


var randomNumber;//Variable qui va contenir le nombre aléatoire généré

function generateMap(taille,taille){//Fonction qui génère une carte
    for(i = 0;i<taille*taille;i++){//Pour toutes les cases
        randomNumber = Math.floor(Math.random()*100) + 1;//On génère un nombre aléatoire entre 1 et 100
        if (randomNumber % 6 == 0) {// 1/6
            mapTab.push("B");//Bombe
        }
        else if (randomNumber % 9 == 0) {// 1/9
            mapTab.push("W");//Wall
        }
        else{
            mapTab.push("S");//Safe
        }
    }
    //On fait un système pour avoir une plateforme d'apparition "safe" qui permet de prendre des informations.
    mapTab[0] = "A";
    mapTab[1] = "Z";
    mapTab[taille] = "E";
    mapTab[taille+1] = "R";
    //On fait un système pour définir une plateforme de fin, l'objectif du jeu est de l'atteindre. 
    //Pas encore programmé la "fin" (genre que ca affiche qu'on a gagné)
    mapTab[mapTab.length-1] = "T";
    mapTab[mapTab.length-2] = "Y";
    mapTab[mapTab.length-taille-1] = "U";
    mapTab[mapTab.length-taille-2] = "I";
}


//Tableau qui contient les textures des cases
var gameMapGraph = [];

function linkTabToGraph(){//Fonction qui lie le tableau de caractères et d'images
    //On mets les deux axes à 0
    var xAxis = 0, yAxis = 0;
    let alignement = true;
    let nbCases = -1;
    for (let i = 0; i < mapTab.length; i++) {
        nbCases += 1;
        //Système pour mettre les bonnes textures afin de faire le quadrillage
        if (taille % 2 == 0) {
            if(nbCases % taille == 0){
                alignement = !alignement;
            }
            if (alignement == true) {
                if(nbCases % 2 == 0){
                    if (mapTab[i] == "S") {//Safe
                        gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[1], xAxis, yAxis);
                    }
                    else if(mapTab[i] == "B"){//Bomb
                        gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[1], xAxis, yAxis);
                    }
                    else if(mapTab[i] == "W"){//Wall
                        gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[3], xAxis, yAxis);
                    }
                }
                else{
                    if (mapTab[i] == "S") {//Safe
                        gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[0], xAxis, yAxis);
                    }
                    else if(mapTab[i] == "B"){//Bomb
                        gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[0], xAxis, yAxis);
                    }
                    else if(mapTab[i] == "W"){//Wall
                        gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[2], xAxis, yAxis);
                    }
                }
            }
            else{
                if(nbCases % 2 == 1){
                    if (mapTab[i] == "S") {//Safe
                        gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[1], xAxis, yAxis);
                    }
                    else if(mapTab[i] == "B"){//Bomb
                        gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[1], xAxis, yAxis);
                    }
                    else if(mapTab[i] == "W"){//Wall
                        gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[3], xAxis, yAxis);
                    }
                }
                else{
                    if (mapTab[i] == "S") {//Safe
                        gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[0], xAxis, yAxis);
                    }
                    else if(mapTab[i] == "B"){//Bomb
                        gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[0], xAxis, yAxis);
                    }
                    else if(mapTab[i] == "W"){//Wall
                        gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[2], xAxis, yAxis);
                    }
                }
            }
        }
        else{
            if(nbCases % 2 == 0){
                if (mapTab[i] == "S") {//Safe
                    gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[0], xAxis, yAxis);
                }
                else if(mapTab[i] == "B"){//Bomb
                    gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[0], xAxis, yAxis);
                }
                else if(mapTab[i] == "W"){//Wall
                    gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[2], xAxis, yAxis);
                }
            }
            else{
                if (mapTab[i] == "S") {//Safe
                    gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[1], xAxis, yAxis);
                }
                else if(mapTab[i] == "B"){//Bomb
                    gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[1], xAxis, yAxis);
                }
                else if(mapTab[i] == "W"){//Wall
                    gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[3], xAxis, yAxis);
                }
            }
        }
        if(mapTab[i] == "A"){//Spawn
            gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[44], xAxis, yAxis);
        }
        if(mapTab[i] == "Z"){//Spawn
            gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[45], xAxis, yAxis);
        }
        if(mapTab[i] == "E"){//Spawn
            gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[46], xAxis, yAxis);
        }
        if(mapTab[i] == "R"){//Spawn
            gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[47], xAxis, yAxis);
        }
        if(mapTab[i] == "T"){//End
            gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[7], xAxis, yAxis);
        }
        if(mapTab[i] == "Y"){//End
            gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[7], xAxis, yAxis);
        }
        if(mapTab[i] == "U"){//End
            gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[7], xAxis, yAxis);
        }
        if(mapTab[i] == "I"){//End
            gameMapGraph[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[7], xAxis, yAxis);
        }
        xAxis +=tileSizeInPx;
        if(xAxis >= ((taille - 1)*tileSizeInPx) + 1){
        xAxis = 0;
        yAxis += tileSizeInPx;
        }
        console.log(gameMapGraph);  

    } 
}

//Tableau qui va contenir le nombre de bombes dans les 8 cases autour d'une case d'indice i
var BombsAroundArray = [];
var compteurPourSwitch = 0;//variable temporaire qui permet de compter à chaque fois pour le switch case
function numberBombsAroundTileGraph(){

    //On mets les deux axes à 0
    var xAxis = 0, yAxis = 0;

    for (let i = 0; i < mapTab.length; i++) {
        BombsAroundArray[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[10], xAxis, yAxis);
        compteurPourSwitch = findCaseBomb8(i);
        switch (compteurPourSwitch) {//On affiche le bon numéro (pour le moment, ne marche que pour 8 max)
            case 8:
                BombsAroundArray[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[20], xAxis, yAxis);
                break;
            case 7:
                BombsAroundArray[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[19], xAxis, yAxis);
                break;
            case 6:
                BombsAroundArray[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[18], xAxis, yAxis);
                break;
            case 5:
                BombsAroundArray[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[17], xAxis, yAxis);
                break;
            case 4:
                BombsAroundArray[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[16], xAxis, yAxis);
                break;
            case 3:
                BombsAroundArray[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[15], xAxis, yAxis);
                break;
            case 2:
                BombsAroundArray[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[14], xAxis, yAxis);
                break;
            case 1:
                BombsAroundArray[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[13], xAxis, yAxis);
                break;
            case 0:
                BombsAroundArray[i] = new component(tileSizeInPx, tileSizeInPx, imagesTab[12], xAxis, yAxis);
                break;
        
            default:
                break;
        }
        //Fonction qui s'occupe du retour à la ligne, permet de créer une carte en 2D
        xAxis +=tileSizeInPx;
        if(xAxis >= ((taille - 1)*tileSizeInPx) + 1){
        xAxis = 0;
        yAxis += tileSizeInPx;
        }
    }
}