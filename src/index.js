const express = require('express');
const bodyParser = require('body-parser');

const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

const userRouters = require('./routes/user.route');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url,{useNewUrlParser:true,useUnifiedTopology: true})
.then(() => {
    console.log("Connect server successfully");
}).catch((err)=> {
    console.log(err);
    process.exit();
})


// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 4000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root/default route
app.get('/', (req, res) => {
  res.json({"message": "Hello World"});
});
// listen for requests4




app.use('/api/users', userRouters)

app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});