const router = require('express').Router()

router.use('/produk', require('../api/produk/ProdukRouter'))
router.use('/user', require('../api/user/UserRouter'))
router.use('/pesanan', require('../api/pesanan/PesananRouter'))
router.use('/userline', require('../api/userLine/UserLineRouter'))

module.exports = router