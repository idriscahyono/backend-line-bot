const router = require('express').Router()
const UserLineController = require('./UserLineController')

router.get('/data', UserLineController.index)
router.get('/:id', UserLineController.show)
router.post('/', UserLineController.store)
router.put('/:id', UserLineController.update)
router.delete('/:id', UserLineController.destroy)

module.exports = router