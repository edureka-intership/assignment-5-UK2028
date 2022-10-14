const express = require('express');
const bodyParser = require('body-parser');
const routerSlash = require('./routes/slash');

const app = express();

const PORT = 9091;

app.use(bodyParser.json());
app.use("/", routerSlash);


app.listen(PORT, () => {
    console.log(`you have started listening to a server on port: ${PORT}`);
})