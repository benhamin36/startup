function onload() {
    //get the elements we're displaying
    const opponentName = document.querySelector("#opponentName");
    const opponentHP = document.querySelector("#opponentHP");
    const yourHP = document.querySelector("#yourHP");

    //get the values from localStorage
    //yeah these variable names are rough but it's getting late lol
    if (localStorage.getItem("YourHP") === null) localStorage.setItem("YourHP", "65");
    let yHP = localStorage.getItem("YourHP");
    if (localStorage.getItem("YourCurrentHP") === null) localStorage.setItem("YourCurrentHP", "65");
    let yCHP = localStorage.getItem("YourCurrentHP");
    if (localStorage.getItem("Opponent") === null) localStorage.setItem("Opponent", "Mr Knight");
    let opponent = localStorage.getItem("Opponent");
    if (localStorage.getItem("OpponentHP") === null) localStorage.setItem("OpponentHP", "65");
    let oHP = localStorage.getItem("OpponentHP");
    if (localStorage.getItem("OpponentCurrentHP") === null) localStorage.setItem("OpponentCurrentHP", "65");
    let oCHP = localStorage.getItem("OpponentCurrentHP");

    opponentName.textContent = opponent;
    opponentHP.textContent = `HP: ${oCHP}/${oHP}`;
    yourHP.textContent = `HP: ${yCHP}/${yHP}`;
}