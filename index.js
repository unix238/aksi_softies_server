const config = require('./config/config.js');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const ItemRouter = require('./routers/itemRouter');
const CategoryRouter = require('./routers/categoryRouter');
const MaterialRouter = require('./routers/MaterialRouter');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/item', ItemRouter);
app.use('/category', CategoryRouter);
app.use('/material', MaterialRouter);

const start = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(config.DATABASE_URL, {});
        app.listen(config.PORT, () => {
            console.log(`Server has been started on port ${config.PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
