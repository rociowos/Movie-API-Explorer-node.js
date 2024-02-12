const {Router} = require('express');
const { getEstrenos, getAnio, getTendencias, getGeneros} = require('../controllers/demo');


const rutas = Router();

rutas.get('/estrenos', getEstrenos);
rutas.get('/anio/:id', getAnio);
rutas.get('/tendencias', getTendencias);
rutas.get('/generos', getGeneros); 



module.exports = rutas;
