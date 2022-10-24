const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = '5007';

mongoose.set('useCreateIndex', true);

const {routes} = require('./routes');

const dbUrl = 'mongodb://uno4pyefvvpugxfwel23:T32NTWyiOui4mluUq31C@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bs2n2rxoakhmxhs?replicaSet=rs0';

mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => {
        app.listen(PORT, "0.0.0.0", () => {
            routes(app);
            console.log(`Server is running in port ${PORT}`);
        });
    })


