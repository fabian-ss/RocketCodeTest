import { pool } from '../db.js'
import { TABLE_CREATE_PHRASE } from '../config.js'

export const createForm = async (req, res, next) => {

    console.log("res", req);

    const {
        nombre,
        segundoNombre,
        apellidoPaterno,
        apellidoMaterno,
        fechaNacimiento,
        email,
        telefono,
    } = req.body

    // query and connection
    await pool.query('INSERT INTO testing_ali_fullstack.users_test_josefabiansolteroescobar (nombre,segundoNombre,apellidoPaterno,apellidoMaterno,fechaNacimiento,email,telefono) VALUES (?,?,?,?,?,?,?);', [nombre, segundoNombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, email, Number(telefono)])

    // Error handler using "express-promise-route
    return res.send("Create form")
}

export const createTable = async (req, res, next) => {

    //"my_key" it´s a key just for creating the table using the API
    const { my_key } = req.body
    if (my_key === TABLE_CREATE_PHRASE) {

        try {
            // query and connection
            const created = await pool.query('CREATE TABLE if not exists users_test_josefabiansolteroescobar(id SERIAL NOT NULL PRIMARY KEY,nombre VARCHAR(25),segundoNombre VARCHAR(25),apellidoPaterno VARCHAR(25),apellidoMaterno VARCHAR(25),fechaNacimiento DATETIME, email VARCHAR(100) NOT NULL, telefono VARCHAR(10));')
            return res.send(created)

        } catch (error) {
            // Handle error using next()
            next(error)
        }
    } else {
        next()
    }
};