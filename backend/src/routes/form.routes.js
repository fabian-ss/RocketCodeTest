import {Router} from 'express'
import { createForm } from '../controllers/form.controller.js'

const router = Router();

router.get('/api/v1/form',createForm)

export default router