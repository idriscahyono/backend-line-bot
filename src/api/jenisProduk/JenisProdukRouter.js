const router = require('express').Router();
const JenisProdukController = require('./JenisProdukController');
const multer = require('multer');
const storage = require('../../config/storage');
const upload = multer({
	storage
});

router.get('/', JenisProdukController.index);
router.get('/:id', JenisProdukController.show);
router.post('/', JenisProdukController.store);
router.put('/:id', JenisProdukController.update);
router.delete('/:id', JenisProdukController.destroy);

router.post('/:id/upload', upload.single('image'), JenisProdukController.upload);

module.exports = router;
