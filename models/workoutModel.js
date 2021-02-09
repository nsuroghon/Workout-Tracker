const mongoose = require("mongoose");
//  I should also be able to track the 
// name, type, weight, sets, reps, and duration of exercise. 
// If the exercise is a cardio exercise, I should be able to track my distance traveled.

const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day: {
        type: Date
    },
        exercises: [
      {
        type: {
            type: String,
            trim: true,
            required: "exercise type is required",
        },
        name: {
            type: String,
            trim: true,
            required: "name is required",
        },
        duration: {
            type: Number,
            trim: true,
            required: "duration is required",
        },
        weight: {
            type: Number,
            trim: true,
            required: "weight is required",
        },
        reps: {
            type: Number,
            trim: true,
            required: "reps is required",
        },
        sets: {
            type: Number,
            trim: true,
            required: "sets is required",
        },
      }
    ]
})

// username: {
//     type: String,
//     trim: true,
//     required: "Username is Required"
//   },


// {
//     day: new Date().setDate(new Date().getDate()-10),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Bicep Curl",
//         duration: 20,
//         weight: 100,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;
  