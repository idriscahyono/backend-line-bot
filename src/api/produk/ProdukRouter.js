const router = require('express').Router()
const ProdukController = require('./ProdukController')
const multer = require('multer')
const storage = require('../../config/storage')
const upload = multer({
    storage
})

router.get('/', ProdukController.index)
router.get('/:id', ProdukController.show)
router.post('/', ProdukController.store)
router.put('/:id', ProdukController.update)
router.delete('/:id', ProdukController.destroy)

router.post('/:id/upload', upload.single("image"), ProdukController.upload)

module.exports = router