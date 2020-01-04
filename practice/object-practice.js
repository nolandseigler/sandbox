let spaceship = {
    passengers: null,
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        'back-up': {
            battery: "Lithium",
            terabytes: 50
        }
    }
};

const capFave = spaceship['crew']['captain']['favorite foods'][0];

spaceship['passengers'] = [{diplomat: {
        name: 'Lisa',
        degree: 'Political Science',
        makePolicy() {console.log('We should make a policy for this.')},
        'favorite foods': ['salad', 'apples']}},
    {model: {
            name: 'Bobby',
            degree: 'Biology',
            tryOnClothes() {console.log('How does this look?')},
            'favorite foods': ['cake', 'pudding']
        }}];

const firstPassenger = spaceship['passengers'][0];

//more practice reassigning and adding key/value pairs

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};

// Write your code below
const greenEnergy = objParam => {
    objParam['Fuel Type'] = 'avocado oil';
};

const remotelyDisable = objParam => {
    objParam['disabled'] = true;
};

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);

//avoid using arrow functions when using this in a method!
//use this when using a method that references variables within the obj
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
    }
};
console.log(robot.provideInfo());
//use a getter method when 'getting' data that should be immutable (notice the _) ref the _ seems to work best with . notation
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
        if (typeof this._energyLevel === 'number') {
            return `My current energy level is ${this._energyLevel}`
        } else {
            return `System malfunction: cannot retrieve energy level`
        };
    }
};

console.log(robot.energyLevel);
//setter method added. notice how the value is set by calling the function as if you were just assigning the value to a property
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
        if(typeof this._numOfSensors === 'number'){
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },
    set numOfSensors(num) {
        if (typeof num === 'number' && num >= 0) {
            this._numOfSensors = num;
        } else {
            console.log('Pass in a number that is greater than or equal to 0');
        };
    }
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);

//FACTOR FUNCTIONS!!!!

const robotFactory = (modelParam, mobileParam) => {
    let obj = {
        model: modelParam,
        mobile: mobileParam,
        beep() {
            console.log('Beep Boop');
        }
    };
    return obj
};
const tinCan = robotFactory('P-500', true);

tinCan.beep();

// destructuring. property value shorthand
const monsterFactory = (name, age) => {
    return {
        name,
        age
    };
};
function robotFactory(model, mobile){
    return {
        model,
        mobile,
        beep() {
            console.log('Beep Boop');
        }
    };
};

const newRobot = robotFactory('P-501', false);
console.log(newRobot.model);
console.log(newRobot.mobile);

//destructed assignment. create a variable with the name of an object's key that is wrapped in curly braces and assign it to obj.
const weapons = {
    rifle: 'blaster',
    melee: 'sword',
    bazooka: 'bazooka',
    special: {
        option1: 'lightsaber',
        option2: 'silver sword'
    }
};
const bazooka = weapons.bazooka;
console.log(bazooka); // Logs 'bazooka'
//below is destructed assignment
const { bazooka } = weapons;
console.log(bazooka); // Logs 'bazooka'
const { option1 } = weapons.special;
console.log(option1);// Logs 'lightsaber'

//continued

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};

const { functionality } = robot;
//shortcut instead of doing robot.functionality.beep(); this works because functionality var assign;
functionality.beep();

//built in obj methods (a few)

const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

const robotKeys = Object.keys(robot);

console.log(robotKeys);

const robotEntries = Object.entries(robot);

console.log(robotEntries);

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);

//construct a new obj without a factory function like this
const robot1 = Object.assign({}, newRobot);
console.log(robot1);

