import {pool} from '../db.js'

export const createForm = (req,res)=> res.send('creatting contact form')

export const queryTest = async (req,res)=> {
   const result = await pool.query('SELECT "Holis Bolis" AS result')
   res.json(result[0])
};