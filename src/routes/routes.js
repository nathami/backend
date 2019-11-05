const express = require('express');
const UsuarioController = require('../controllers/usuarioController');
const PontoController = require ('../controllers/pontoController');
const router = express.Router();

//carregar rotas
router.get('/usuarios', UsuarioController.SearchAll);
router.get('/usuarios/:id', UsuarioController.SearchOne);
router.post('/usuarios', UsuarioController.Insert);
router.put('/usuarios/:id', UsuarioController.Update);
router.delete('/usuarios/:id', UsuarioController.Delete);

router.get('/ponto', PontoController.SearchAll);
router.get('/ponto/:codigo', PontoController.SearchOne);
router.post('/ponto', PontoController.Insert);
router.put('ponto/:codigo', PontoController.Update);
router.delete('/ponto/:codigo', PontoController.Delete);

module.exports = router;