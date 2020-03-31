const router = require('express').Router()
const PesananController = require('./PesananController')

router.get('/', PesananController.index)
router.get('/:id', PesananController.show)
router.post('/', PesananController.store)
router.put('/:id', PesananController.update)
router.delete('/:id', PesananController.destroy)

module.exports = router