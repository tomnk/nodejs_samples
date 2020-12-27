const router = require('express').Router();
const controller = require('../controllers/products');

router.get('/products', controller.index);
router.post('/products', controller.create);
router.patch('/products/:id', controller.update);
router.put('/products/:id', controller.remove);
router.delete('/products/:id', controller.remove);
module.exports = router;
