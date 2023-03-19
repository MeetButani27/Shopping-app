const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
require('dotenv').config();

const port = 9000
const mongoUrl = process.env.MONGO_DB_URL;

mongoose.connect( mongoUrl,{
    useNewUrlParser: true
})
.then((res) => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
})


require('./item');
const Items = mongoose.model('items');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/allItems', async(req,res) => {
    try {
        const allItem = await Items.find({});
        res.send({ status:"ok", data:allItem });
    }
    catch(err) {
        console.log(err);
    }
})


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})