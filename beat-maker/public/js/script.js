// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

const toggleDrum = (arrName, indexNum) => {
    if (arrName[indexNum] === false) {
        arrName[indexNum] = true;
    } else if (arrName[indexNum] === true) {
        arrName[indexNum] = false;
    } else {
        return console.log("Error in the toggleDrum function");
    }
};

const clear = (arrName) => {
     arrName.fill(false, 0, arrName.length - 1);
};
// toggleDrum(kicks, 1);
// console.log(kicks);
// console.log(snares);
// clear(kicks);
// console.log(kicks);