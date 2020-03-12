const router = require('express').Router()

router.use('/produk', require('../api/produk/ProdukRouter'))
router.use('/user', require('../api/user/UserRouter'))

module.exports = router