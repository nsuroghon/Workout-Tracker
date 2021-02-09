let db = require("../models/workoutModel");
let router = require("express").Router();

router.get("/api/workouts", (req, res) => {
  db.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;