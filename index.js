const config = require('./config/config.js');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const ItemRouter = require('./routers/ItemRouter');
const app = express();

app.use(express.json());
app.use('/item', ItemRouter);

const start = async () => {
    try {
        mongoose.connect(config.DATABASE_URL);
        app.listen(config.PORT, () => {
            console.log(`Server has been started on port ${config.PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
