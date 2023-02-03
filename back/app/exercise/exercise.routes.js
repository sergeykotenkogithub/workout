import express from 'express'

import {
	createNewExercise,
	deleteExercise,
	getExercises,
	updateExercise
} from './exercise.controller.js'
import { protect } from '../middleware/auth.middleware.js'
import { createNewExerciseLog } from './log/exercise-log.controller.js'
import {
	completeExerciseLog,
	updateExercisesLogTime
} from './log/update-exercise-log.controller.js'
import { getExercisesLog } from './log/get-exercise-log.controller.js'

const router = express.Router()

router.route('/').post(protect, createNewExercise).get(protect, getExercises)

router
	.route('/:id')
	.put(protect, updateExercise)
	.delete(protect, deleteExercise)

router
	.route('/log/:id')
	.post(protect, createNewExerciseLog)
	.get(protect, getExercisesLog)

router.route('/log/time/:id').put(protect, updateExercisesLogTime)
router.route('/log/complete/:id').patch(protect, completeExerciseLog)

export default router

// localhost: 4200 / api / auth / login
