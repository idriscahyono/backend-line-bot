const router = require('express').Router()
const PesananController = require('./PesananController')

router.get('/', PesananController.index)
router.get('/admin/:id', PesananController.showAdmin)
router.get('/bynomorbayar/:id', PesananController.showByNomorBayar)
router.get('/:id', PesananController.show)
router.post('/', PesananController.store)
router.put('/:id', PesananController.update)
router.put('/byuserid/:id', PesananController.updateByUserId)
router.delete('/:id', PesananController.destroy)

module.exports = router