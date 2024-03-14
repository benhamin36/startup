function onload() {
    //get the elements we're displaying
    const opponentName = document.querySelector("#opponentName");
    const opponentHP = document.querySelector("#opponentHP");
    const yourHP = document.querySelector("#yourHP");

    localStorage.setItem("WaitingOnResponse", "False");

    //get the values from localStorage
    //yeah these variable names are rough but it's getting late lol
    if (localStorage.getItem("YourHP") === null) localStorage.setItem("YourHP", "65");
    let yHP = localStorage.getItem("YourHP");
    localStorage.setItem("YourCurrentHP", "65");
    let yCHP = localStorage.getItem("YourCurrentHP");
    if (localStorage.getItem("Opponent") === null) localStorage.setItem("Opponent", "Mr Knight");
    let opponent = localStorage.getItem("Opponent");
    if (localStorage.getItem("OpponentHP") === null) localStorage.setItem("OpponentHP", "65");
    let oHP = localStorage.getItem("OpponentHP");
    localStorage.setItem("OpponentCurrentHP", "65");
    let oCHP = localStorage.getItem("OpponentCurrentHP");

    opponentName.textContent = opponent;
    opponentHP.textContent = `HP: ${oCHP}/${oHP}`;
    yourHP.textContent = `HP: ${yCHP}/${yHP}`;

    const battleLog = document.querySelector("#battleLog");
    var logStart = document.createElement("li");
    logStart.textContent = `${opponent} accepts your challenge! Pick an attack to begin.`
    battleLog.appendChild(logStart);
}

function attack(num) {
    //Seems like localstorage only uses strings, so this is a little janky but it works.
    if (localStorage.getItem("WaitingOnResponse") === "True" || localStorage.getItem("WaitingOnResponse") === "BattleOver") return;

    localStorage.setItem("WaitingOnResponse", "True");

    var itemValue = localStorage.getItem("CurrentBow");
    switch(num) {
        case 1:
            localStorage.setItem("YourChoice", "Bow");
            itemValue = localStorage.getItem("CurrentBow");
            break;
        case 2:
            localStorage.setItem("YourChoice", "Sword");
            itemValue = localStorage.getItem("CurrentSword");
            break;
        case 3:
            localStorage.setItem("YourChoice", "Spear");
            itemValue = localStorage.getItem("CurrentSpear");
            break;
        default:
            //Why not, I guess? I can't forsee ever hitting this but sure.
            localStorage.setItem("YourChoice", "Bow");
            itemValue = localStorage.getItem("CurrentBow");
            break;
    }
    const battleLog = document.querySelector("#battleLog");
    var logStart = document.createElement("li");
    logStart.textContent = `You attack with ${mapValuesToNames(itemValue)}! (waiting on response)`;
    battleLog.appendChild(logStart);
}

function mapValuesToNames(value) {
    switch (value) {
        case "elf-longbow":
            return "Elf Longbow";
        case "hunters-recurve":
            return "Hunter's Recurve";
        case "missile-staff":
            return "Missile Staff";
        case "knights-broadsword":
            return "Knight's Broadsword";
        case "curved-sabre":
            return "Curved Sabre";
        case "enchanted-dagger":
            return "Enchanted Dagger";
        case "jousters-lance":
            return "Jouster's Lance";
        case "steel-pike":
            return "Steel Pike";
        case "flame-barb":
            return "Flame Barb";
        default:
            return "Mystery Weapon";
    }
}

setInterval(async () => {
    if (localStorage.getItem("WaitingOnResponse") === "False" || localStorage.getItem("WaitingOnResponse") === "BattleOver") return;

    localStorage.setItem("WaitingOnResponse", "False");

    //Get the opponent's response
    const opponentItem = await fetch('/api/attack');

    const battleLog = document.querySelector('#battleLog');
    var opponentChoice = document.createElement("li");
    opponentChoice.textContent = `${opponent} attacks with ${opponentItem}!`;
    battleLog.appendChild(opponentChoice);

    //Calculate damage

    //Eventually we'll actually calculate the damage based on what is stored in the db. For now, we'll just make up numbers.
    let yDam = 10;
    let opDam = 12;

    var yourDamage = document.createElement("li");
    yourDamage.textContent = `You take ${yDam} damage!`;
    battleLog.appendChild(yourDamage);

    var opponentDamage = document.createElement("li");
    opponentDamage.textContent = `${opponent} takes ${opDam} damage!`;
    battleLog.appendChild(opponentDamage);

    let yourCurrentHP = localStorage.getItem("YourCurrentHP");
    let oppCurrentHP = localStorage.getItem("OpponentCurrentHP");
    let yourNewHP = parseInt(yourCurrentHP) - yDam;
    let oppNewHP = parseInt(oppCurrentHP) - opDam;
    localStorage.setItem("YourCurrentHP", yourNewHP);
    localStorage.setItem("OpponentCurrentHP", oppNewHP);

    //Update the UI
    const opponentHP = document.querySelector("#opponentHP");
    const yourHP = document.querySelector("#yourHP");
    let yHP = localStorage.getItem("YourHP");
    let oHP = localStorage.getItem("OpponentHP");
    if (oppNewHP < 0) oppNewHP = 0;
    opponentHP.textContent = `HP: ${oppNewHP}/${oHP}`;
    yourHP.textContent = `HP: ${yourNewHP}/${yHP}`;

    if (yourNewHP <= 0) {
        var winMessage = document.createElement("li");
        winMessage.textContent = `You died! ${opponent} wins!`;
        battleLog.appendChild(winMessage);
        localStorage.setItem("WaitingOnResponse", "BattleOver");
    } else if(oppNewHP <= 0) {
        var winMessage = document.createElement("li");
        winMessage.textContent = `${opponent} died! You win!`;
        battleLog.appendChild(winMessage);
        localStorage.setItem("WaitingOnResponse", "BattleOver");
    }

  }, 5000);