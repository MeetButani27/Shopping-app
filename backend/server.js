const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = 9000;
const mongoUrl = process.env.MONGO_DB_URL;
const JWT_SECRET = process.env.JWT_SECRET;

mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((res) => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})


// ==================================================================================


require('./model/item_model');
const Items = mongoose.model('items');

require('./model/user_login_model');
const Users = mongoose.model('users');


// ==================================================================================


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})


// ==================================================================================


app.get('/allItems', async(req,res) => {
    try {
        const allItem = await Items.find({});
        res.send({ status: "ok", data: allItem });
    }
    catch(err) {
        console.log(err);
    }
});

app.get('/mobiles', async(req,res) => {
    try {
        const mobile_item = await Items.find({'category': 'Mobiles'});
        res.send({ status: "ok", data: mobile_item });
    }
    catch(err) {
        console.log(err);
    }
});

app.get('/electronics', async(req,res) => {
    try {
        const electronic_item = await Items.find({'category': 'Electronics'});
        res.send({ status: "ok", data: electronic_item });
    }
    catch(err) {
        console.log(err);
    }
});

app.get('/fashion', async(req,res) => {
    try {
        const fashion_item = await Items.find({'category': 'Fashion'});
        res.send({ status: "ok", data: fashion_item });
    }
    catch(err) {
        console.log(err);
    }
});


app.post('/userlogin', async(req, res) => {
    const { email_id, password } = req.body;
    const user = await Users.findOne({ email_id });
    
    if(!user) {
        return res.json({ error:'User not found' });
    }

    if(password === user.password) {
        const token = await jwt.sign({ email_id: user.email_id }, JWT_SECRET);

        if(res.status(201)) {
            return res.json({ token: token });
            na
        }
        else {
            return res.json({ error: "error" });
        }
    }

    return res.json({ error: "Invalid Password!" });
});


app.post('/userData', async(req, res) => {
    const token = req.headers.authorization.split(' ')[1];

    try {
        const user = await jwt.verify(token, JWT_SECRET);    
        const user_email = user.email_id;
        Users.findOne({ email_id: user_email })
        .then((data) => {
            res.send({ userData: data });
        });
    } 
    catch (error) {
        res.send({ message: "error" });
    }
});


// ==================================================================================
// routers

const additem = require('./router/additem_router');
app.use('/additem', additem);

const adduser = require('./router/adduser_router');
app.use('/adduser', adduser);