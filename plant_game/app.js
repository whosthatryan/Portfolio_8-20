const player = {
    currentChoice: null
}

const playerChoices = [
    'Water', 
    'Shelter',
    'Sun-Lamp',
    'Do Nothing',
    'Bail'
];

const weather = {
    currentChoice: null
}

const weatherChoices = [
    'Rain',
    'Sun',
    'Snow',
    'Do Nothing'
];

const plant = {
    health: 3,
    day: 1
}

const water = {
    level: 3
}
   
const begin = () => {
    const decision = window.prompt("Look at that handsome, new plant you just got. Ready to try and not kill it? Yes or No.")
    if (decision.toLowerCase().trim() === 'yes') {
        compare();
    } else {
        window.alert(`That's real. Being a plant-parent is a lot of responsibility. Come back when you're ready.`);
        return;
    }
}

const playerChooses = () => {
    const decision = window.prompt(`What would you like to do? Water, Shelter, Sun Lamp, Do Nothing, or Bail.`);
    if (decision.toLowerCase().trim() === 'water') {
        player.currentChoice = playerChoices[0];
    } else if (decision.toLowerCase().trim() ==='shelter') {
        player.currentChoice = playerChoices[1];
    } else if (decision.toLowerCase().trim() === 'sun lamp') {
        player.currentChoice = playerChoices[2];
    } else if (decision.toLowerCase().trim() === 'do nothing') {
        player.currentChoice = playerChoices[3];
    } else if (decision.toLowerCase().trim() === 'bail') {
        player.currentChoice = playerChoices[4];
        window.alert(`Just gonna bail on your lil plant? That's messed up.`);
    } else {
        window.alert(`You have to choose something.`);
        compare();
    }
}

const weatherChooses = () => {
    const randomIndex = Math.floor(Math.random() * weatherChoices.length);
    weather.currentChoice = weatherChoices[randomIndex];
}

const compare = () => {
    playerChooses();
    console.log(player.currentChoice);
    weatherChooses();
    console.log(weather.currentChoice);
    if (player.currentChoice === playerChoices[0] && weather.currentChoice === weatherChoices[0]) {
        window.alert(`You just watered your plant but it also rained. Careful not to over-water!`);
        plant.health--;
        water.level+=2;
        plant.day++;
        showStatus();
    } else if (player.currentChoice === playerChoices[1] && weather.currentChoice === weatherChoices[0]) {
        window.alert(`You just provided your plant with shelter from the rain and kept it from being over-watered.`);
        plant.health++;
        plant.day++;
        showStatus();
    } else if (player.currentChoice === playerChoices[2] && weather.currentChoice === weatherChoices[0]) {
        window.alert(`Your Sun-Lamp was burnt out by the rain!`);
        water.level++;
        plant.day++;
        showStatus();
    } else if (player.currentChoice === playerChoices[3] && weather.currentChoice === weatherChoices[0]) {
        window.alert(`You just let your plant be while is soaked in that good, good rain goodness. Careful not to over-water!`);
        plant.health++;
        water.level++;
        plant.day++;
        showStatus();
    } else if (player.currentChoice === playerChoices[0] && weather.currentChoice === weatherChoices[1]) {
        window.alert(`Watering your plant on a sunny day. Is there anything better?`);
        plant.health++;
        water.level++;
        plant.day++;
        showStatus();
    } else if (player.currentChoice === playerChoices[1] && weather.currentChoice === weatherChoices[1]) {
        window.alert(`Oh no! Your shelter blocked your plant from the sun's sweet, sweet rays. Ooooops!`);
        plant.health--;
        plant.day++;
        showStatus();
    } else if (player.currentChoice === playerChoices[2] && weather.currentChoice === weatherChoices[1]) {
        if (plant.health === 8 && water.level === 6) {
            dismalWin();
        } else {
            window.alert(`Oof! Sun-Lamp on a sunny day is too much for your plant's lil leaves. Careful not to burn it up!`);
            plant.health-=2;
            plant.day++;
            showStatus();
        }
    } else if (player.currentChoice === playerChoices[3] && weather.currentChoice === weatherChoices[1]) {
        window.alert(`You just let your plant be while is soaked in those sweet, sweet sun rays. Nice.`);
        plant.health++;
        plant.day++;
        showStatus();
    } else if (player.currentChoice === playerChoices[0] && weather.currentChoice === weatherChoices[2]) {
        window.alert(`Watering your plant on a snowy day? Kinda irresponsible, no?`);
        plant.health--;
        water.level++;
        plant.day++;
        showStatus();
    } else if (player.currentChoice === playerChoices[1] && weather.currentChoice === weatherChoices[2]) {
        window.alert(`Your shelter blocked your plant from the snow but it wasn't enough to keep it warm. Oops.`);
        plant.health--;
        plant.day++;
        showStatus();
    } else if (player.currentChoice === playerChoices[2] && weather.currentChoice === weatherChoices[2]) {
        window.alert(`The Sun-Lamp kept your plant nice and toasty during the snow. Nice.`);
        plant.health++;
        plant.day++;
        showStatus();
    } else if (player.currentChoice === playerChoices[3] && weather.currentChoice === weatherChoices[2]) {
        window.alert(`You're just gonna sit there while your plant is out in the snow? You're even colder than the snow.`);
        plant.health--;
        plant.day++;
        showStatus();
    } else if (player.currentChoice === playerChoices[0] && weather.currentChoice === weatherChoices[3]) {
        window.alert(`Watering your plant on this calm day. Ahhh...`);
        water.level++;
        plant.day++;
        showStatus();
    } else if (player.currentChoice === playerChoices[1] && weather.currentChoice === weatherChoices[3]) {
        window.alert(`Your shelter would have protected your plant if there was something from which to protect it.`);
        plant.day++;
        showStatus();
    } else if (player.currentChoice === playerChoices[2] && weather.currentChoice === weatherChoices[3]) {
        window.alert(`Oh no! The Sun-Lamp got too hot and dehydrated your plant a bit!`);
        plant.health--;
        water.level--;
        plant.day++;
        showStatus();
    } else if (player.currentChoice === playerChoices[3] && weather.currentChoice === weatherChoices[3]) {
        window.alert(`Not much to do, eh? Nice. Just take a breather. Your plant will probably be fine, right?`);
        plant.day++;
        showStatus();
    }
    checkWin();
}

const showStatus = () => {
    window.alert(`Plant health is ${plant.health} and plant water level is ${water.level}.`)
}

const checkWin = () => {
    if (plant.health === 10 && water.level === 7) {
        window.alert(`Your plant is so healthy that it has now grown to unmanageable size and strengh and has become sentient. It requests that you refer to it as "Horace". Horace chooses you as their right-hand person and together, you quickly take over the world your rule echos through countless future generations. You (and Horace) win.`);
        return;
    } else if (plant.health >= 10 && water.level <= 9) {
        window.alert(`You have what it takes to keep a plant happy and healthy! You win and your plant thanks you!`);
        return;
    } else if (plant.health <= 0 || water.level <= 0 || water.level >= 10) {
        window.alert(`You lack what it takes to even keep a plant alive. You lose and your plant is deader than dead. Way to go.`);
        return;
    } else if (player.currentChoice === playerChoices[4]) {
        end();
    } else {
        compare();
    }
}

const dismalWin = () => {
    window.alert(`Your Sun-Lamp on the sunny day generated too much heat and somehow transferred it to the sun; which then exploded the sun. As a result, everything on the planet is dead(including you), except for your plant. Your Sun-Lamp kept it alive. So, since the game is to keep the plant alive, I guess you win? Not ideal, but congratulations, or something...`);
    return;
}

const end = () => {
    window.alert(`GOOD-BYE`);
}

begin ();