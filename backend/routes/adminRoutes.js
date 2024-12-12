const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/adminController');
const RBACMiddleware = require('../middleware/rbacMiddleware');
const authenticate = require('../middleware/authMiddleware');

// Admin routes with RBAC protection
router.use(authenticate, RBACMiddleware(['admin']));

router.get('/activity-logs', AdminController.getActivityLogs);
router.post('/books', AdminController.createBook);
router.put('/books/:id', AdminController.updateBook);
router.delete('/books/:id', AdminController.deleteBook);

module.exports = router;
