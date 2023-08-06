import {Router} from 'express'
import { createForm, queryTest } from '../controllers/form.controller.js'

const router = Router();

router.get('/api/v1/form',createForm);
router.get('/api/v1/querytest',queryTest);


export default router