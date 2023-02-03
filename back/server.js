import 'colors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'

import { errorHandler, notFound } from './app/middleware/error.middleware.js'

import authRoutes from './app/auth/auth.routes.js'
import { prisma } from './app/prisma.js'
import userRoutes from './app/user/user.routes.js'
import exerciseRoutes from './app/exercise/exercise.routes.js'
import workoutRoutes from './app/workout/workout.routes.js'
import path from 'path'
import cors from 'cors'

dotenv.config()

const app = express()

async function main() {
	process.env.NODE_ENV === 'development' && app.use(morgan('dev'))

	const PORT = process.env.PORT || 4000

	app.use(cors())
	app.use(express.json())

	const __dirname = path.resolve()

	app.use('/uploads', express.static(path.join(__dirname, '/uploads/')))

	app.use('/api/auth', authRoutes)
	app.use('/api/users', userRoutes)
	app.use('/api/exercises', exerciseRoutes)
	app.use('/api/workouts', workoutRoutes)

	app.use(notFound)
	app.use(errorHandler)

	app.listen(PORT, console.log(`SERVER STARTED ${PORT}`.green))
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
