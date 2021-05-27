function startDesigner() {
        designerMap.start();
        document.getElementById('canvasDesigner').appendChild(designerMap.canvas);
        initializeDesignerMapGraph();
        initializeDesignerMapTab();
        createButtons();
}


var mapTabDesigner = [];
var tailleDesigner = 10;
var tileSizeInPxDesigner = 500/tailleDesigner;
var xOnClick = 0;
var yOnClick = 0;
var designerGraph = [];
var designerMap = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateDesignerArea, 20);
        this.canvas.addEventListener('mousedown', function (e) {
            
            getMousePosition(designerMap.canvas, e);
            getTileOnClick();
            newElement();
            syncClickAndTab();
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

var xOnClick = 100;
var yOnClick = 100;
function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    xOnClick = event.clientX - rect.left;
    yOnClick = event.clientY - rect.top;
}

var contenutabDesigner = 1;
function updateDesignerArea() {
    designerMap.clear();
    for (let i = 0; i < designerGraph.length; i++) {
        designerGraph[i].update();
    }
    tileSizeinPxDesigner = 500/tailleDesigner;
}   

function designerTile(width, height, imgsrc, x, y) {
    this.gamearea = designerMap;
    this.width = width;//Largeur
    this.height = height;//Hauteur
    this.x = x;//Coordonnées en X
    this.y = y;//Coordonnées en Y
    this.update = function() {
        ctx = designerMap.context;
        ctx.drawImage(imgsrc, this.x, this.y, this.width, this.height);
    }
}

//Créer l'alignement des cases initial pour l'initialisation de la carte
var alignementDesigner = true;
function initializeDesignerMapGraph(){
    let nbTilesPlaced = 0;
    let xAxisInitialize = 0;
    let yAxisInitialize = 0;
    for (let i = 0; i < tailleDesigner*tailleDesigner; i++) {
        if (tailleDesigner % 2 == 0){
            if(nbTilesPlaced % tailleDesigner == 0){
                alignementDesigner = !alignementDesigner;
            }
            if (alignementDesigner == true) {
                if (nbTilesPlaced % 2 == 0) {
                    designerGraph[i] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[1], xAxisInitialize, yAxisInitialize);
                }
                else{
                    designerGraph[i] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[0], xAxisInitialize, yAxisInitialize);
                }
            }
            else{
                if (nbTilesPlaced % 2 == 0) {
                    designerGraph[i] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[0], xAxisInitialize, yAxisInitialize);
                }
                else{
                    designerGraph[i] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[1], xAxisInitialize, yAxisInitialize);
                }
            }
        }
        else{
            if (nbTilesPlaced % 2 == 0) {
                designerGraph[i] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[0], xAxisInitialize, yAxisInitialize);
            }
            else{
                designerGraph[i] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[1], xAxisInitialize, yAxisInitialize);
            }
        }
        nbTilesPlaced++;
        xAxisInitialize += tileSizeInPxDesigner;
        if(xAxisInitialize >= ((tailleDesigner - 1)*tileSizeInPxDesigner) + 1){
            xAxisInitialize = 0;
            yAxisInitialize += tileSizeInPxDesigner;
            }
    }
    //Spawn
    designerGraph[0] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[44], 0, 0);
    designerGraph[1] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[45], tileSizeInPxDesigner, 0);
    designerGraph[tailleDesigner] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[46], 0, tileSizeInPxDesigner);
    designerGraph[tailleDesigner+1] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[47], tileSizeInPxDesigner, tileSizeInPxDesigner);
    //End
    designerGraph[designerGraph.length-tailleDesigner-2] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[7], (tailleDesigner-2)*tileSizeInPxDesigner, (tailleDesigner-2)*tileSizeInPxDesigner);
    designerGraph[designerGraph.length-tailleDesigner-1] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[7], (tailleDesigner-1)*tileSizeInPxDesigner, (tailleDesigner-2)*tileSizeInPxDesigner);
    designerGraph[designerGraph.length-2] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[7], (tailleDesigner-2)*tileSizeInPxDesigner, (tailleDesigner-1)*tileSizeInPxDesigner);
    designerGraph[designerGraph.length-1] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[7], (tailleDesigner-1)*tileSizeInPxDesigner, (tailleDesigner-1)*tileSizeInPxDesigner);
}

function initializeDesignerMapTab(){
    for (let i = 0; i < tailleDesigner*tailleDesigner; i++) {
        mapTabDesigner[i] = "S";
    }
    //On fait un système pour avoir une plateforme d'apparition "safe" qui permet de prendre des informations.
    mapTabDesigner[0] = "Spawn";
    mapTabDesigner[1] = "Spawn";
    mapTabDesigner[tailleDesigner] = "Spawn";
    mapTabDesigner[tailleDesigner+1] = "Spawn";
    //On fait un système pour définir une plateforme de fin, l'objectif du jeu est de l'atteindre. 
    //Pas encore programmé la "fin" (genre que ca affiche qu'on a gagné)
    mapTabDesigner[mapTabDesigner.length-1] = "End";
    mapTabDesigner[mapTabDesigner.length-2] = "End";
    mapTabDesigner[mapTabDesigner.length-tailleDesigner-1] = "End";
    mapTabDesigner[mapTabDesigner.length-tailleDesigner-2] = "End";
}

var tileX = 10;
var tileY = 10;
var tileClickedOn = 10;
function getTileOnClick() {
    tileX = Math.trunc(xOnClick/tileSizeInPxDesigner);
    tileY = Math.trunc(yOnClick/tileSizeInPxDesigner);
    tileClickedOn = tileX + (tailleDesigner*tileY);
}

function newElement(){
    if (tileClickedOn != 0 && tileClickedOn != 1 && tileClickedOn != tailleDesigner && tileClickedOn != tailleDesigner+1 && tileClickedOn != mapTabDesigner.length-tailleDesigner-2 && tileClickedOn != mapTabDesigner.length-tailleDesigner-1 && tileClickedOn != mapTabDesigner.length-2 && tileClickedOn != mapTabDesigner.length-1 ) {
        if (tailleDesigner % 2 == 0) {
            if(Math.trunc(tileClickedOn/tailleDesigner) % 2 == 0){
                if(placeSafeSpace == true){
                    if (tileClickedOn % 2 == 0 ) {
                        designerGraph[tileClickedOn] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[0], tileX*tileSizeInPxDesigner, tileY*tileSizeInPxDesigner);
                    }
                    else{
                        designerGraph[tileClickedOn] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[1], tileX*tileSizeInPxDesigner, tileY*tileSizeInPxDesigner);
                    }
                }
                else if(placeBomb == true){
                    if (tileClickedOn % 2 == 0 ) {
                        designerGraph[tileClickedOn] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[4], tileX*tileSizeInPxDesigner, tileY*tileSizeInPxDesigner);
                    }
                    else{
                        designerGraph[tileClickedOn] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[5], tileX*tileSizeInPxDesigner, tileY*tileSizeInPxDesigner);
                    }
                }
                else if(placeWall == true){
                    if (tileClickedOn % 2 == 0 ) {
                        designerGraph[tileClickedOn] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[2], tileX*tileSizeInPxDesigner, tileY*tileSizeInPxDesigner);
                    }
                    else{
                        designerGraph[tileClickedOn] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[3], tileX*tileSizeInPxDesigner, tileY*tileSizeInPxDesigner);
                    }
                }
            }
            else{
                if(placeSafeSpace == true){
                    if (tileClickedOn % 2 == 0 ) {
                        designerGraph[tileClickedOn] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[1], tileX*tileSizeInPxDesigner, tileY*tileSizeInPxDesigner);
                    }
                    else{
                        designerGraph[tileClickedOn] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[0], tileX*tileSizeInPxDesigner, tileY*tileSizeInPxDesigner);
                    }
                }
                else if(placeBomb == true){
                    if (tileClickedOn % 2 == 0 ) {
                        designerGraph[tileClickedOn] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[5], tileX*tileSizeInPxDesigner, tileY*tileSizeInPxDesigner);
                    }
                    else{
                        designerGraph[tileClickedOn] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[4], tileX*tileSizeInPxDesigner, tileY*tileSizeInPxDesigner);
                    }
                }
                else if(placeWall == true){
                    if (tileClickedOn % 2 == 0 ) {
                        designerGraph[tileClickedOn] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[3], tileX*tileSizeInPxDesigner, tileY*tileSizeInPxDesigner);
                    }
                    else{
                        designerGraph[tileClickedOn] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[2], tileX*tileSizeInPxDesigner, tileY*tileSizeInPxDesigner);
                    }
                }
            }
        }
        else{
            if(placeSafeSpace == true){
                if (tileClickedOn % 2 == 0 ) {
                    designerGraph[tileClickedOn] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[0], tileX*tileSizeInPxDesigner, tileY*tileSizeInPxDesigner);
                }
                else{
                    designerGraph[tileClickedOn] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[1], tileX*tileSizeInPxDesigner, tileY*tileSizeInPxDesigner);
                }
            }
            else if(placeBomb == true){
                if (tileClickedOn % 2 == 0 ) {
                    designerGraph[tileClickedOn] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[4], tileX*tileSizeInPxDesigner, tileY*tileSizeInPxDesigner);
                }
                else{
                    designerGraph[tileClickedOn] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[5], tileX*tileSizeInPxDesigner, tileY*tileSizeInPxDesigner);
                }
            }
            else if(placeWall == true){
                if (tileClickedOn % 2 == 0 ) {
                    designerGraph[tileClickedOn] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[2], tileX*tileSizeInPxDesigner, tileY*tileSizeInPxDesigner);
                }
                else{
                    designerGraph[tileClickedOn] = new designerTile(tileSizeInPxDesigner, tileSizeInPxDesigner, imagesTab[3], tileX*tileSizeInPxDesigner, tileY*tileSizeInPxDesigner);
                }
            }
        }
    }
    
}

function syncClickAndTab(){
    if (tileClickedOn != 0 && tileClickedOn != 1 && tileClickedOn != tailleDesigner && tileClickedOn != tailleDesigner+1 && tileClickedOn != mapTabDesigner.length-tailleDesigner-2 && tileClickedOn != mapTabDesigner.length-tailleDesigner-1 && tileClickedOn != mapTabDesigner.length-2 && tileClickedOn != mapTabDesigner.length-1 ){
        mapTabDesigner[tileClickedOn] = elementToPlace;
    }
}

function emptyArray(array){
    for (let i = 0; i < array.length; i++) {
        array.pop()
    }
}

var elementToPlace = "S";
var textureToPlaceDesigner = 0;
var placeSafeSpace = false;
var placeBomb = false;
var placeWall = false;
var nbInputGenerated = 0;
function createButtons(){
    textureToPlaceDesigner = imagesTab[5];
    //Démo avec le bouton Wall
    // 1. Création du bouton
    //var wallButton = document.createElement("button");//On créé un élément HTML de type <button>
    //wallButton.innerHTML = "Wall";//On écrit Wall à l'intérieur du bouton
    // 2. On attache ce bouton à un élément de l'HTML
    //document.getElementById('wallButtonDiv').appendChild(wallButton);//On attache ce bouton à son parent (ici qui a pour id wallButtonDiv)
    // 3. On ajoute l'évènement produit lorsqu'on clic sur ce bouton
    //On créé un élément HTML de type <img>
    var wallButton = document.createElement("img");
    wallButton.setAttribute("src", "img/web/wall.png");
    wallButton.setAttribute("class", "editor-img hvr-shrink");

    // 3. On ajoute l'évènement produit lorsqu'on clic sur ce bouton
    document.getElementById('wallButtonDiv').appendChild(wallButton);
    wallButton.addEventListener ("click", function() {//Fonction qui va être exécutée
        elementToPlace = "W";       textureToPlaceDesigner = imagesTab[3];
        placeSafeSpace = false;
        placeBomb = false;
        placeWall = true;
    });

    //Bomb
    /*var bombButton = document.createElement("button");
    bombButton.innerHTML = "Bomb";
    document.getElementById('bombButtonDiv').appendChild(bombButton);*/
    var bombButton = document.createElement("img");
    bombButton.setAttribute("src", "img/web/bomb.png");
    bombButton.setAttribute("class", "editor-img hvr-shrink");
    document.getElementById('bombButtonDiv').appendChild(bombButton);
    bombButton.addEventListener ("click", function() {
    elementToPlace = "B";
    textureToPlaceDesigner = imagesTab[5];
    placeSafeSpace = false;
    placeBomb = true;
    placeWall = false;
    });

    //Safe
    /*var safeButton = document.createElement("button");
    safeButton.innerHTML = "Safe";
    document.getElementById('safeButtonDiv').appendChild(safeButton);*/
    var safeButton = document.createElement("img");
    safeButton.setAttribute("src", "img/web/safe.png");
    safeButton.setAttribute("class", "editor-img hvr-shrink");
    document.getElementById('safeButtonDiv').appendChild(safeButton);
    safeButton.addEventListener ("click", function() {
    elementToPlace = "S";
    placeSafeSpace = true;
    placeBomb = false;
    placeWall = false;
    });

    //GenerateMap
    /*var generateMapButton = document.createElement("button");
    generateMapButton.innerHTML = "Generate the map";*/
    var generateMapButton = document.createElement("img");
    generateMapButton.setAttribute("src", "img/web/build.png");
    generateMapButton.setAttribute("class", "editor-img hvr-shrink");
    document.getElementById('generateMapDiv').appendChild(generateMapButton);

    generateMapButton.addEventListener ("click", function() {
        if(nbInputGenerated < 1){
            var inputMapTab = document.createElement("input");
            inputMapTab.setAttribute("class", "")
            //var buttonCopyMapTab = document.createElement("button");
            //buttonCopyMapTab.innerHTML = "Click to copy";*/
            var buttonCopyMapTab = document.createElement("img");
            buttonCopyMapTab.setAttribute("src", "img/web/copy.png");
            buttonCopyMapTab.setAttribute("class", "editor-img hvr-shrink");

            document.getElementById('generateMapDiv').appendChild(buttonCopyMapTab);

            buttonCopyMapTab.addEventListener("click", function() {
                var copyText = document.getElementById("mapTabInput");
                copyText.select();
                copyText.setSelectionRange(0, 99999);//Pour mobile ? à supprimer ? 
                document.execCommand("copy");
            })

            inputMapTab.type = "text";
            document.getElementById('textToCopy').appendChild(inputMapTab);
            contenutabDesigner = mapTabDesigner.toString();//Useless
            inputMapTab.value = contenutabDesigner;
            inputMapTab.id = 'mapTabInput';
        } else {
            contenutabDesigner = mapTabDesigner.toString();//Useless
            document.getElementById("mapTabInput").value = contenutabDesigner;
        }
        
        nbInputGenerated++;
    });

    //IL Y A UN BUG QUI FAIT QUE SI ON CHANGE LA VALEUR DE TAILLEDESIGNER DANS LA CONSOLE PUIS ON CLIC SUR LE BOUTON - CA PROVOQUE UN BUG GRAPHIQUE
    //Bouton - (diminue la taille de la carte de 1)
    /*var minusButton = document.createElement("button");
    minusButton.innerHTML = "-";*/
    var minusButton = document.createElement("img");
    minusButton.setAttribute("src", "img/web/-.png");
    minusButton.setAttribute("class", "hvr-shrink");
    document.getElementById('selectSize').appendChild(minusButton);
    
    minusButton.addEventListener ("click", function() {
        tailleDesigner--;
        if(tailleDesigner > 20){tailleDesigner = 20}
        if(tailleDesigner <= 6){tailleDesigner = 5}
        tileSizeInPxDesigner = 500/tailleDesigner;
        emptyArray(mapTabDesigner);
        emptyArray(designerGraph);
        initializeDesignerMapGraph();
        initializeDesignerMapTab();
        displayCurrentSize.innerHTML = tailleDesigner;
    });

    //Affichage taille actuelle (j'ai utilisé un bouton qui ne fera au final rien car c'était beaucoup plus simple pour moi à faire et pour que ca garde le même style)
    var displayCurrentSize = document.createElement("p");
    var currentSizeImg = document.createElement("img");
    
    // attribute of currentSizeImg
    currentSizeImg.setAttribute("src", "img/web/size1.png");
    currentSizeImg.setAttribute("class", "editor-img");

    // attribute of displayCurrentSize
    displayCurrentSize.innerHTML = tailleDesigner;
    displayCurrentSize.setAttribute("class", "info-size-txt");

    // append elements
    document.getElementById("selectSize").appendChild(currentSizeImg);
    document.getElementById('selectSize').appendChild(displayCurrentSize);
    
    displayCurrentSize.addEventListener ("click", function() {
        displayCurrentSize.innerHTML = tailleDesigner;
    });

    //Bouton + (augmente la taille de la carte de 1)
    /*var plusButton = document.createElement("button");
    plusButton.innerHTML = "+";*/
    var plusButton = document.createElement("img");
    plusButton.setAttribute("src", "img/web/+.png");
    plusButton.setAttribute("class", "hvr-shrink");
    document.getElementById('selectSize').appendChild(plusButton);
    
    plusButton.addEventListener ("click", function() {
        tailleDesigner++;
        if(tailleDesigner > 20){tailleDesigner = 20}
        if(tailleDesigner <= 5){tailleDesigner = 5}
        tileSizeInPxDesigner = 500/tailleDesigner;
        initializeDesignerMapGraph();
        initializeDesignerMapTab();
        displayCurrentSize.innerHTML = tailleDesigner;
    });
}