// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

const toggleDrum = (arrName, indexNum) => {
    if (arrName === undefined || arrName === '' || indexNum === undefined || indexNum === '') {
        return console.log("Invalid args");
    }
    if (arrName[indexNum] === false) {
        arrName[indexNum] = true;
    } else if (arrName[indexNum] === true) {
        arrName[indexNum] = false;
    } else {
        return console.log("Error in the toggleDrum function");
    }
};

const clear = (arrName) => {
    if (arrName === undefined || arrName === '') {
        return console.log("Invalid args");
    }
    if (arrName === kicks || arrName === snares || arrName === hiHats || arrName === rideCymbals) {
        arrName.fill(false, 0, arrName.length - 1);
    }
};
// toggleDrum(kicks, 1);
// console.log(kicks);
// console.log(snares);
// clear(kicks);
// console.log(kicks);
const invert = (arrName) => {
    let counter = 0;
    arrName.forEach(element => {
        if (element === true) {
            arrName[counter] = false;
        } else {
            arrName[counter] = true;
        };
        counter++
    });
};