const player = { name: "Герой", health: 100, attackPower: 20 };
const monster = { name: "Гоблин", health: 80, attackPower: 15 };
const inventory = ["Меч", "Щит", "Зелье"];

function showStatus() {
    console.log("Игрок: " + player.name + " | Здоровье: " + player.health + " HP");
    console.log("Монстр: " + monster.name + " | Здоровье: " + monster.health + " HP\n");
}

function attack() {
    console.log(player.name + " атакует монстра!");
    monster.health -= player.attackPower;
    if (monster.health < 0) monster.health = 0;
    console.log("Здоровье монстра: " + monster.health + " HP\n");
}

function monsterAttack() {
    console.log(monster.name + " атакует героя!");
    player.health -= monster.attackPower;
    if (player.health < 0) player.health = 0;
    console.log("Здоровье героя: " + player.health + " HP\n");
}

console.log("--- Начало боя ---\n");
showStatus();
let round = 1;

while (player.health > 0 && monster.health > 0) {
    console.log("=== Раунд " + round + " ===");
    attack();
    if (monster.health <= 0) break;
    monsterAttack();
    round++;
}

if (player.health > 0) {
    console.log("🏆 Победа! Герой победил монстра!");
} else {
    console.log("💀 Поражение! Гоблин одолел героя...");
}
