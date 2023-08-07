import Router from 'express-promise-router'
import { createForm, createTable } from '../controllers/form.controller.js'

const router = Router();

router.post('/api/v1/form',createForm);
router.post('/api/v1/createtable',createTable)

export default router