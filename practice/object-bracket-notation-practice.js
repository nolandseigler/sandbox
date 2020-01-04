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