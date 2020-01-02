// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, arrIndexOfPresets, optionalPutArg) => {
    let outputArr = [];
    if (requestType === "GET" || requestType === "PUT") {
        if (presets[arrIndexOfPresets] === undefined) {
            outputArr.push(404);
        } else if (arrIndexOfPresets !== undefined) {
            outputArr.push(200);
        } else {
            console.log("Error in presetHandler");
        }
    } else {
        outputArr.push(400);
    }
    return outputArr
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
