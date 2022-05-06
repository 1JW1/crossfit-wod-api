const workoutService = require('../services/workoutService')

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts()
    res.send('get all workouts')
}

const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout()
    res.send('get an existing workout')
}

const createNewWorkout = (req, res) => {
    const createdWorkout = workoutService.createNewWorkout()
    res.send('create a new workout')
}

const updateOneWorkout = (req, res) => {
    const updatedWorkout = workoutService.updateOneWorkout()
    res.send('update an existing workout')
}

const deleteOneWorkout = (req, res) => {
    const deleteOneWorkout = workoutService.deleteOneWorkout()
    res.send('delete an existing workout')
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
}