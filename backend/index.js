const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const app = express();
const pinRoute = require('./routes/pins')
const userRoute = require('./routes/users')


dotenv.config();

app.use(express.json());

mongoose.connect( process.env.MONGO_URL)
.then(()=>{
    console.log('Mongoose Connected');
})
.catch((err)=> {
    console.log(err)
});

app.use('/api/pins', pinRoute)

app.use('/api/users', userRoute)


app.listen(process.env.PORT, () => {
    console.log("Listening on port 8800!");

});