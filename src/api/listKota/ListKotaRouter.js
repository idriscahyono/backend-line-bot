const router = require('express').Router()
const ListKotaController = require('./ListKotaController')

router.get('/', ListKotaController.index)
router.get('/:id', ListKotaController.show)
router.post('/', ListKotaController.store)
router.put('/:id', ListKotaController.update)
router.delete('/:id', ListKotaController.destroy)

module.exports = router