const express = require('express');
const app = express();

const data = [1, 2, 3, 4, 5];
//finds value of index key at the request params object
const indexExists = (req, res, next) => {
    const index = req.params.index;
    if (data[index]) {
        next();
    } else {
        res.status(404).send();
    }
};
//calls indexExists function on every request at the applicable path.  uses index var rather to simplify reference.
// Add your code below:
app.use('/data/:index', indexExists);


// Add your code above

app.get('/data/:index', (req, res, next) => {
    res.send(data[index]);
});

app.put('/data/:index', (req, res, next) => {
    data[req.params.index] = req.body.number;
    res.send(data[index]);
});

app.delete('/data/:index', (req, res, next) => {
    data.splice(index, 1);
    res.status(204).send();
});

app.get('/', (req, res, next) => {
    res.send(data);
});
