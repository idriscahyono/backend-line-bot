const router = require('express').Router()
const PaymentController = require('./PaymentController')
const multer = require('multer')
const storage = require('../../config/storage')
const upload = multer({
    storage
})

router.get('/', PaymentController.index)
router.get('/:id', PaymentController.show)
router.post('/', PaymentController.store)
router.put('/:id', PaymentController.update)
router.delete('/:id', PaymentController.destroy)

router.post('/:id/upload', upload.single("image"), PaymentController.upload)

module.exports = router