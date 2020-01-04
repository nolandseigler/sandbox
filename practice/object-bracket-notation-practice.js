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
