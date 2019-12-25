const express = require('express');
const app = express();
//cross site origin request. may help with working with third party apis?
const cors = require('cors');
app.use(cors());