const express = require('express');
const router = express.Router();
const talleresController = require('../controllers/talleresController');

// Rutas de búsqueda
router.get('/talleres', talleresController.obtenerTalleres);
router.get('/talleres/:id', talleresController.obtenerTallerPorId);
router.get('/distritos', talleresController.obtenerDistritos);
router.get('/tipos-talleres', talleresController.obtenerTiposTalleres);

module.exports = router;
