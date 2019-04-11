const express = require('express');
const app = express();
const router = express.Router();

const Course = require('../models/Course');

router.route('/add').post(function (req, res) {
    const course = new Course(req.body);
    course.save()
      .then(course => {
      console.log(course);
      res.status(200).json({'course': 'Course added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save the course into database");
      });
  });

  // Defined get data(index or listing) route
  router.route('/').get(function (req, res) {
    Course.find(function (err, courses){
      if(err){
        console.log(err);
      }
      else {
        res.json(courses);
      }
    });
  });

  //  Defined update route
  router.route('/update/:id').post(function (req, res) {
    Course.findById(req.params.id, function(err, course) {
      if (!course)
        return next(new Error('Could not load Document'));
      else {
        course.course_name = req.body.course_name;
        course.course_price = req.body.course_price;

        course.save().then(course => {
            res.json('Successfully Updated');
        })
        .catch(err => {
              res.status(400).send("unable to update the database");
        });
      }
    });
  });

  // Defined delete | remove | destroy route
  router.route('/delete/:id').get(function (req, res) {
    Course.findByIdAndRemove({_id: req.params.id}, function(err, course){
          if(err) res.json(err);
          else res.json('Successfully removed');
      });
  });

module.exports = router;
