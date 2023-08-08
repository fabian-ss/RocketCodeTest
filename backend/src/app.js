import express from 'express'
import morgan from 'morgan'
import formRoutes from './routes/form.routes.js'
import { badrequest, notFound } from './middlewares/handle_error.js';
import cors from 'cors'

// Dot env
import './config.js'

const app = express();

// Middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use(formRoutes)

// Error handler
app.use(badrequest)
app.use(notFound)

export default app