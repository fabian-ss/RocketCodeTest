import express from 'express'
import morgan from 'morgan'
import formRoutes from './routes/form.routes.js'

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(formRoutes)

app.use((err, req, res, next) => {
    res.status(500).json({
        status:"error",
        message: err.message
    })
})

export default app