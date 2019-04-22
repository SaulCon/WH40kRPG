let player; 

function Player(classType,chapter, health, psychic, strength, agility, speed) {
    this.classType = classType
    this.chapter = chapter;
    this.health = health;
    this.psychic = psychic;
    this.strength = strength;
    this.speed = speed;
    this. agility = agility; 
}

let PlayerMoves = {
    calcAttack: function() {
        //Initiative 
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        //Player Attacks!
     let playerAttack = function() {
        //Psychic attacks
        let calcBaseDamage;
        if (player.psychic > 0) {
            calcBaseDamage = player.strength * player.psychic / 1000;
        } 
        else
        //Base Attacks no Psychic
        {
            calcBaseDamage = player.strength * player.agility / 1000;

        }
        //to OFFSET
        let offsetDamage = Math.floor(Math.random() * Math.floor(10)); 
        // DAMAGE to ENEMY
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        //TO HITS
        let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) /2) + 1;
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;

       
    }
     //Player Attacks!
     let enemyAttack = function() {
        //Psychic attacks
        let calcBaseDamage;
        if (enemy.psychic > 0) {
            calcBaseDamage = enemy.strength * enemy.psychic / 1000;
        } 
        else
        //Base Attacks no Psychic
        {
            calcBaseDamage = enemy.strength * enemy.agility / 1000;

        }
        //to OFFSET
        let offsetDamage = Math.floor(Math.random() * Math.floor(10)); 
        // DAMAGE to Player
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        //TO HITS
        let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) /2) + 1;
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
    }
    //Health Player and Enemy!
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");
    //Initiate Attacks!
    if (getPlayerSpeed >= getEnemySpeed){
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues [1];
        enemy.health = enemy.health - totalDamage;
        alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times!");
        //Victory Coniditons and Health
        if (enemy.health <= 0) {
            alert("You have vanquished the Xenos threat! Ad Victorium Brother! (Refresh the Browser to Play Again!)");
            getPlayerHealth.innerHTML= 'Health: ' + player.health;
            getEnemyHealth.innerHTML= 'Health: 0'
        }
        else
        {
            getEnemyHealth.innerHTML= 'Health: ' + enemy.health;
            
            //Enemy Attacks

            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues [1];
            player.health = player.health - totalDamage;
            alert("Tyranid hit You " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times!");
            //Victory Coniditons and Health
            if (player.health <= 0) {
                alert("You have been slain! Your sacrifice has been in vein! (Refresh the Browser to Play Again)");
                getPlayerHealth.innerHTML= 'Health: 0';
                getEnemyHealth.innerHTML= 'Health: ' + enemy.health;
            } 
            else
            {
                getPlayerHealth.innerHTML = 'Health: ' + player.health; 
            }
        }
    }
    else if (getEnemySpeed >= getPlayerSpeed){
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues [1];
        player.health =  player.health - totalDamage;
        alert("Tyranid hit You " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times!");
        //Victory Coniditons and Health
        if (player.health <= 0) {
            alert("You have been slain! Your sacrifice has been in vein!");
            getEnemyHealth.innerHTML= 'Health: ' + enemy.health;
            getPlayerHealth.innerHTML= 'Health: 0'
        }
        else
        {
            getPlayerHealth.innerHTML= 'Health: ' + player.health;
            //Player Attacks
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues [1];
            enemy.health = enemy.health - totalDamage;
            alert("You Hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times!");
            //Victory Coniditons and Health
            if (enemy.health <= 0) {
                alert("You have vanquished the Xenos threat! Ad Victorium Brother!");
                getEnemyHealth.innerHTML= 'Health: 0';
                getPlayerHealth.innerHTML= 'Health: ' + player.health;
            } 
            else
            {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health; 
            }
        }
    }


    }
    
    
}
