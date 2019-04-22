let GameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType) {
        switch (classType) {
            case "Karlaen":
                player = new Player (classType,"BloodAngels",100,200,100,100,100,)
                break;
                case "Captain Astoric":
                player = new Player (classType,"DarkAngels",150,0,150,150,100,)
                break;
                case "Kraton":
                player = new Player (classType,"ImperialFists",200,0,200,50,50,)
                break;
                case "Saul Invictus":
                player = new Player (classType,"Ultramarines",150,0,150,100,50,)
                break;
                case "Arturus":
                player = new Player (classType,"GreyKnights",150,150,100,100,100,)
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="assets/img/spacemarines/git ad' + classType.toLowerCase() + '.jpg" class="img-spacemarine"><div><h3>' + classType + '</h3><p class= "health-player">Health: ' + player.health + '</p></h3><p>Psychic: ' + player.psychic + '</p></h3><p>Strength: ' + player.strength + '</p></h3><p>Agility: ' + player.agility + '</p></h3><p>Speed: ' + player.speed + '</p></h3><p>Chapter: ' + player.chapter + '</p></div>';

    },
    setPreFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Misson: Elimante the Tyranid Threat!';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Purge the Xenos!</a>';
        getArena.style.visilbility = "visible";
    },
    setFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getTyranids = document.querySelector(".tyranids");
        // Hive Fleet Behemoth!
        let tyranid00 = new Enemy("Genestealers",100,0,100,200,200);
        let tyranid01 = new Enemy("Trygon",300,0,300,50,50);
        let tyranid02 = new Enemy("Hormagaunts",50,0,50,100,150);
        let tyranid03 = new Enemy("Carnifex",200,0,250,50,50);
        let tyranid04 = new Enemy("Swarmlord",200,100,150,100,150);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(5));
        //console.log(chooseRandomEnemy);
        switch (chooseRandomEnemy) {
            case 0:
                enemy = tyranid00;
                break;
                case 1:
                enemy = tyranid01;
                break;
                case 2:
                enemy = tyranid02;
                break;
                case 3:
                enemy = tyranid03;
                break;
                case 4:
                enemy = tyranid04;
                break;
        
        }
        getHeader.innerHTML = '<p>Stand and Fight! For the Emperor!'
        
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getTyranids.innerHTML = '<img src="assets/img/tyranids/' + enemy.tyranids.toLowerCase() + '.jpg" alt="' + enemy.tyranids + '"class=img-tyranids"><div><h3>' + enemy.tyranids + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Psychic: ' + enemy.psychic + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>'; 
    }
}