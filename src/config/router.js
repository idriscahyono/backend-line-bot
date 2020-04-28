const router = require('express').Router()

router.use('/produk', require('../api/produk/ProdukRouter'))
router.use('/user', require('../api/user/UserRouter'))
router.use('/pesanan', require('../api/pesanan/PesananRouter'))
router.use('/userline', require('../api/userLine/UserLineRouter'))
router.use('/listKota', require('../api/listKota/ListKotaRouter'))

module.exports = router