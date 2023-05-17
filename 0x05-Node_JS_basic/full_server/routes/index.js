const express = require('express');
const router = express.Router();

import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

router.get('/', (req, res) => AppController.getHomepage(req, res));
router.get('/students', (req, res) => StudentsController.getAllStudents(req, res));
router.get('/students/:major', (req, res) => StudentsController.getAllStudentsByMajor(req, res));

export default router;
module.exports = router;
