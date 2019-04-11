const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const config = require('./db');
const Course = require('./models/Course');
const CourseRoute = require('./routes/CourseRoute');

const PORT = 4000;

mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});

app.use(bodyParser.json());
app.use('/course', CourseRoute);

app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});
