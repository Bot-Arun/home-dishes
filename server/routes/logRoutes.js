const express = require('express') ;
const logCtrl =require('../controllers/logCtrl')
const router = express.Router();
router.get('/data',logCtrl.getLog)
router.post('/data',logCtrl.postLog)

module.exports= router;