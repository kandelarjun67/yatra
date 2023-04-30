const express = require('express');
const app = express();

// cors 
var cors = require('cors')
app.use(cors())

const mongoose = require('mongoose');

//database connection 
const connectToDb = async () => {

    try {

        const connection = await mongoose.connect('mongodb://127.0.0.1:27017/yatra');

        if (connection) {

            console.log("connnectd to mongodb")

        }

    } catch (err) {

        console.log(errr)

    }

}
connectToDb()


const userSchema = new mongoose.Schema({

    fullName: String,

    mobileNumber: Number,

    password: String,

});

const Users = mongoose.model('Users', userSchema);


console.log("connected to database")

app.use(express.json())




app.get('/', (req, res) => {
    res.send('Welcome to my UI');
});

app.post('/register', async (req, res) => {
    // console.log(req.body)
    const data = await Customers.create(req.body)
    res.json({
        "userList": data
    })

})
app.post('/login', async (req, res) => {
    // console.log(req.body)
    const data = await Customers.findOne({ mobileNumber: req.body.mobileNumber, password: req.body.password })
    if (data) {
        res.json({ message: "login succcess" })
    } else {
        res.json({ message: "login failed" })
    }
})


app.listen(8000, () => console.log('YATRA is listening on port 8000.'));