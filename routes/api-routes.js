let db = require("../models/workoutModel");
let router = require("express").Router();


//create new workout
router.post("/api/workouts", (req, res) => {
  db.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    })
})

// add exercise to workout

//show last workout on front page
// router.get("/api/workouts", (req, res) => {
//   db.create({})
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// continue workout

module.exports = router;