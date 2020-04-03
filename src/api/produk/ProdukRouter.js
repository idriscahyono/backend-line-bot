const router = require('express').Router()
const ProdukController = require('./ProdukController')
const verifyToken = require('../../lib/verifyToken')
const multer = require('multer')
const storage = require('../../config/storage')
const upload = multer({
    storage
})

router.get('/', ProdukController.index)
router.get('/:id', verifyToken, ProdukController.show)
router.post('/', verifyToken, ProdukController.store)
router.put('/:id', verifyToken, ProdukController.update)
router.delete('/:id', verifyToken, ProdukController.destroy)

router.post('/:id/upload', upload.single("image"), ProdukController.upload)

module.exports = router