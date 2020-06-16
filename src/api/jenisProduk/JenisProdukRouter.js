const router = require('express').Router();
const JenisProdukController = require('./JenisProdukController');
const multer = require('multer');
const storage = require('../../config/storage');
const verifyToken = require('../../lib/verifyToken');
const upload = multer({
	storage
});

router.get('/', JenisProdukController.index);
router.get('/:id', verifyToken, JenisProdukController.show);
router.post('/', verifyToken, JenisProdukController.store);
router.put('/:id', verifyToken, JenisProdukController.update);
router.delete('/:id', verifyToken, JenisProdukController.destroy);

router.post('/:id/upload', upload.single('image'), JenisProdukController.upload);

module.exports = router;
