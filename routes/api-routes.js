let db = require("../models/workoutModel");
let router = require("express").Router();

router.get("/api/workouts", (req, res) => {

  db.aggregate([{
          $addFields: { totalDuration: { $sum: "$exercises.duration" } },
      }, ])
      .then((data) => {
          res.json(data);
      })
      .catch((err) => {
          res.status(400).json(err);
      });
});

router.post("/api/workouts", ({ body }, res) => {

  db.create(body)
      .then((dbWorkout) => {
          res.json(dbWorkout);
      })
      .catch((err) => {
          res.status(400).json(err);
      });
});

router.post("/api/workouts/:id", ({body}, res) => {
  db.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    })
})

router.put("/api/workouts/:id", (req, res) => {

  db.findByIdAndUpdate({ _id: req.params.id }, { exercises: req.body })
      .then((dbWorkout) => {
          res.json(dbWorkout);
      })
      .catch((err) => {
          res.status(400).json(err);
      });
});

router.get("/api/workouts/range", (req, res) => {

    db.aggregate([{
            $addFields: { totalDuration: { $sum: "$exercises.duration" } },
        }])
        .sort({ day: -1 })
        .limit(7)
        .then((data) => {
            res.json(data.reverse());
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router;