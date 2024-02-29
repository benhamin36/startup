const ItemTypes = {
	Armor: Symbol("armor"),
	Bow: Symbol("bow"),
	Sword: Symbol("sword"),
	Spear: Symbol("spear")
}

function setEquipped() {
    let armor = localStorage.getItem("CurrentArmor");
    let bow = localStorage.getItem("CurrentBow");
    let sword = localStorage.getItem("CurrentSword");
    let spear = localStorage.getItem("CurrentSpear");
    let username = localStorage.getItem("userName");

    const armorSelect = document.querySelector("#armors");
    const bowSelect = document.querySelector("#bows");
    const swordSelect = document.querySelector("#swords");
    const spearSelect = document.querySelector("#spears");
    const name = document.querySelector("#username");

    armorSelect.value = armor;
    bowSelect.value = bow;
    swordSelect.value = sword;
    spearSelect.value = spear;

    name.textContent = username;
}

function equipArmor() {
    let choice = document.querySelector("#armors");
    localStorage.setItem("CurrentArmor", choice.value);
}

function equipBow() {
    let choice = document.querySelector("#bows");
    localStorage.setItem("CurrentBow", choice.value);
}

function equipSword() {
    let choice = document.querySelector("#swords");
    localStorage.setItem("CurrentSword", choice.value);
}

function equipSpear() {
    let choice = document.querySelector("#spears");
    localStorage.setItem("CurrentSpear", choice.value);
}