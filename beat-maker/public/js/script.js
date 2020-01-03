
//create an array of drums initialized with all false values.
const createEmptyDrumArray = () => new Array(16).fill(false);

//call the function to create drum arrays
// Drum Arrays
let kicks = createEmptyDrumArray();
let snares = createEmptyDrumArray();
let hiHats = createEmptyDrumArray();
let rideCymbals = createEmptyDrumArray();
//call string name of the proper array returns current array
const getDrumArrayByName = (name) => {
    switch (name) {
        case 'kicks':
            return kicks;
        case 'snares':
            return snares;
        case 'hiHats':
            return hiHats;
        case 'rideCymbals':
            return rideCymbals;
        default:
            return;
    }
};
//toggles drums ensuring that the index doesnt exceed bounds
const toggleDrum = (drumArrayName, index) => {
    const drums = getDrumArrayByName(drumArrayName);
    if (!drums || index > 15 || index < 0) {
        return;
    }
    drums[index] = !drums[index];
};
//reset all drums back to original value of false
const clear = (drumArrayName) => {
    const drums = getDrumArrayByName(drumArrayName);
    if (drums) {
        drums.fill(false);
    }
};

const invert = (drumArrayName) => {
    let i = 0;
    const drums = getDrumArrayByName(drumArrayName);
    if (!drums) {
        return;
    }
    drums.forEach(element => {
        drums[i] = !drums[i];
        i++;
    });
};