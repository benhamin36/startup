const ItemTypes = {
	Armor: Symbol("armor"),
	Bow: Symbol("bow"),
	Sword: Symbol("sword"),
	Spear: Symbol("spear")
}

//Represents any kind of item. Type is an ItemType, value is its internal name, name is external name, and power is the amount of damage it does
class Item {
    constructor(type, value, name, power) {
        this.type = type;
        this.value = value;
        this.name = name;
        this.power = power;
    }
}

function setEquipped() {
    let armor = localStorage.getItem("CurrentArmor");
    let bow = localStorage.getItem("CurrentBow");
    let sword = localStorage.getItem("CurrentSword");
    let spear = localStorage.getItem("CurrentSpear");

    const armorSelect = document.querySelector("#armors");
    const bowSelect = document.querySelector("#bows");
    const swordSelect = document.querySelector("#swords");
    const spearSelect = document.querySelector("#spears");

    armorSelect.value = armor;
    bowSelect.value = bow;
    swordSelect.value = sword;
    spearSelect.value = spear;
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