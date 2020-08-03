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

const healthWater = () => {

    $('.healthwater').text(`Plant Health: ${plant.health} Water Level: ${water.level} Day: ${plant.day}`)

    }

const $p0w0 = () => {
    $('.output').text(`You just watered your plant but it also rained. Careful not to over-water!`)
}

const $p1w0 = () => {
    $('.output').text(`You just provided your plant with shelter from the rain and kept it from being over-watered.`)
}

const $p2w0 = () => {
    $('.output').text(`Your Sun-Lamp was burnt out by the rain!`)
}

const $p3w0 = () => {
    $('.output').text(`You just let your plant be while is soaked in that good, good rain goodness. Careful not to over-water!`)
}

const $p0w1 = () => {
    $('.output').text(`Watering your plant on a sunny day. Is there anything better?`)
}

const $p1w1 = () => {
    $('.output').text(`Oh no! Your shelter blocked your plant from the sun's sweet, sweet rays. Ooooops!`)
}

const $p2w1 = () => {
    $('.output').text(`Oof! Sun-Lamp on a sunny day is too much for your plant's lil leaves. Careful not to burn it up!`)
}

const $p3w1 = () => {
    $('.output').text(`You just let your plant be while is soaked in those sweet, sweet sun rays. Nice.`)
}

const $p0w2 = () => {
    $('.output').text(`Watering your plant on a snowy day? Kinda irresponsible, no?`)
}

const $p1w2 = () => {
    $('.output').text(`Your shelter blocked your plant from the snow but it wasn't enough to keep it warm. Oops.`)
}

const $p2w2 = () => {
    $('.output').text(`The Sun-Lamp kept your plant nice and toasty during the snow. Nice.`)
}

const $p3w2 = () => {
    $('.output').text(`You're just gonna sit there while your plant is out in the snow? You're even colder than the snow.`)
}

const $p0w3 = () => {
    $('.output').text(`Watering your plant on this calm day. Ahhh...`)
}

const $p1w3 = () => {
    $('.output').text(`Your shelter would have protected your plant if there was something from which to protect it.`)
}

const $p2w3 = () => {
    $('.output').text(`Oh no! The Sun-Lamp got too hot and dehydrated your plant a bit!`)
}

const $p3w3 = () => {
    $('.output').text(`Not much to do, eh? Nice. Just take a breather. Your plant will probably be fine, right?`)
}
   
const begin = () => {
    const decision = window.prompt("Look at that handsome, new plant you just got. Ready to try and not kill it? Yes or No.")
    if (decision.toLowerCase().trim() === 'yes') {
    } else {
        window.alert(`That's real. Being a plant-parent is a lot of responsibility. Come back when you're ready.`);
        return;
    }
}

const playerChooses = (decision) => {
    // const decision = window.prompt(`What would you like to do? Water, Shelter, Sun Lamp, Do Nothing, or Bail.`);
    if (decision.toLowerCase().trim() === 'water') {
        player.currentChoice = playerChoices[0];
        compare();
    } else if (decision.toLowerCase().trim() ==='shelter') {
        player.currentChoice = playerChoices[1];
        compare();
    } else if (decision.toLowerCase().trim() === 'sun lamp') {
        player.currentChoice = playerChoices[2];
        compare();
    } else if (decision.toLowerCase().trim() === 'do nothing') {
        player.currentChoice = playerChoices[3];
        compare();
    } else if (decision.toLowerCase().trim() === 'bail') {
        player.currentChoice = playerChoices[4];
        window.alert(`Just gonna bail on your lil plant? That's messed up.`);
    }
}

const weatherChooses = () => {
    const randomIndex = Math.floor(Math.random() * weatherChoices.length);
    weather.currentChoice = weatherChoices[randomIndex];
}

const compare = () => {
    console.log(player.currentChoice);
    weatherChooses();
    console.log(weather.currentChoice);
    if (player.currentChoice === playerChoices[0] && weather.currentChoice === weatherChoices[0]) {
        $p0w0();
        plant.health--;
        water.level+=2;
        plant.day++;
        // showStatus();
        healthWater();
    } else if (player.currentChoice === playerChoices[1] && weather.currentChoice === weatherChoices[0]) {
        $p1w0();
        plant.health++;
        plant.day++;
        // showStatus();
        healthWater();
    } else if (player.currentChoice === playerChoices[2] && weather.currentChoice === weatherChoices[0]) {
        $p2w0();
        water.level++;
        plant.day++;
        // showStatus();
        healthWater();
    } else if (player.currentChoice === playerChoices[3] && weather.currentChoice === weatherChoices[0]) {
        $p3w0();
        plant.health++;
        water.level++;
        plant.day++;
        // showStatus();
        healthWater();
    } else if (player.currentChoice === playerChoices[0] && weather.currentChoice === weatherChoices[1]) {
        $p0w1();
        plant.health++;
        water.level++;
        plant.day++;
        // showStatus();
        healthWater();
    } else if (player.currentChoice === playerChoices[1] && weather.currentChoice === weatherChoices[1]) {
        $p1w1();
        plant.health--;
        plant.day++;
        // showStatus();
        healthWater();
    } else if (player.currentChoice === playerChoices[2] && weather.currentChoice === weatherChoices[1]) {
        if (plant.health === 8 && water.level === 6) {
            dismalWin();
        } else {
            $p2w1();
            plant.health-=2;
            water.level-=1;
            plant.day++;
            // showStatus();
            healthWater();
        }
    } else if (player.currentChoice === playerChoices[3] && weather.currentChoice === weatherChoices[1]) {
        $p3w1();
        plant.health++;
        plant.day++;
        // showStatus();
        healthWater();
    } else if (player.currentChoice === playerChoices[0] && weather.currentChoice === weatherChoices[2]) {
        $p1w2();
        plant.health--;
        water.level++;
        plant.day++;
        // showStatus();
        healthWater();
    } else if (player.currentChoice === playerChoices[1] && weather.currentChoice === weatherChoices[2]) {
        $p1w2();
        plant.health--;
        plant.day++;
        // showStatus();
        healthWater();
    } else if (player.currentChoice === playerChoices[2] && weather.currentChoice === weatherChoices[2]) {
        $p2w2();
        plant.health++;
        plant.day++;
        // showStatus();
        healthWater();
    } else if (player.currentChoice === playerChoices[3] && weather.currentChoice === weatherChoices[2]) {
        $p3w2();
        plant.health--;
        plant.day++;
        // showStatus();
        healthWater();
    } else if (player.currentChoice === playerChoices[0] && weather.currentChoice === weatherChoices[3]) {
        $p0w3();
        water.level++;
        plant.day++;
        // showStatus();
        healthWater();
    } else if (player.currentChoice === playerChoices[1] && weather.currentChoice === weatherChoices[3]) {
        $p1w3();
        plant.day++;
        // showStatus();
        healthWater();
    } else if (player.currentChoice === playerChoices[2] && weather.currentChoice === weatherChoices[3]) {
        $p2w3();
        plant.health--;
        water.level--;
        plant.day++;
        // showStatus();
        healthWater();
    } else if (player.currentChoice === playerChoices[3] && weather.currentChoice === weatherChoices[3]) {
        $p3w3();
        plant.day++;
        // showStatus();
        healthWater();
    }
    checkWin();
}

const showStatus = () => {
    // window.alert(`Plant health is ${plant.health} and plant water level is ${water.level}.`)
}

const checkWin = () => {
    if (plant.health === 10 && water.level === 7) {
        window.alert(`Your plant is so healthy that it has now grown to unmanageable size and strengh and has become sentient. It requests that you refer to it as "Horace". Horace chooses you as their right-hand person and together, you quickly take over the world your rule echos through countless future generations. You (and Horace) win.`);
        setTimeout(() => {
            window.location.reload()
        }, 10000);
    } else if (plant.health >= 10 && water.level <= 9) {
        window.alert(`You have what it takes to keep a plant happy and healthy! You win and your plant thanks you!`);
        setTimeout(() => {
            window.location.reload()
        }, 10000);
    } else if (plant.health <= 0 || water.level <= 0 || water.level >= 10) {
        window.alert(`You lack what it takes to even keep a plant alive. You lose and your plant is deader than dead. Way to go.`);
        setTimeout(() => {
            window.location.reload()
        }, 10000);
    } else if (player.currentChoice === playerChoices[4]) {
        end();
    } 
}

const dismalWin = () => {
    window.alert(`Your Sun-Lamp on the sunny day generated too much heat and somehow transferred it to the sun; which then exploded the sun. As a result, everything on the planet is dead(including you), except for your plant. Your Sun-Lamp kept it alive. So, since the game is to keep the plant alive, I guess you win? Not ideal, but congratulations, or something...`);
    setTimeout(() => {
        window.location.reload()
    }, 10000);

    
}

const end = () => {
    window.alert(`GOOD-BYE`);
    setTimeout(() => {
        window.location.reload()
    }, 10000);
}

$ (() => {

    const $begin = $('#begin');

    $begin.on('click', begin);

    const $water = $('#waterBtn');

    $water.on('click', (event)=> {
        playerChooses($(event.currentTarget).text())
    })

    const $shelter = $('#shelterBtn');

    $shelter.on('click', (event)=> {
        playerChooses($(event.currentTarget).text())
    })

    const $lamp = $('#lampBtn');

    $lamp.on('click', (event)=> {
        playerChooses($(event.currentTarget).text())
    })

    const $nothing = $('#nothingBtn');

    $nothing.on('click', (event)=> {
        playerChooses($(event.currentTarget).text())
    })

    const $bail = $('#bailBtn');

    $bail.on('click', (event)=> {
        playerChooses($(event.currentTarget).text())
    })



});