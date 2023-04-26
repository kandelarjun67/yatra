const express = require('express');
const app = express();

cors 
var cors = require('cors')
app.use(cors())


app.get('/', (req, res) => {
    res.send('Welcome to my UI');
});


app.listen(4000, () => console.log('YATRA is listening on port 4000.'));