const express = require('express');
const resourceController = require('../controllers/ResourceController');
const router = express.Router();

router.post('/resources', resourceController.createResource);
router.get('/resources', resourceController.getAllResources);

module.exports = router;
