const router = require('express').Router()

router.use('/produk', require('../api/produk/ProdukRouter'))

module.exports = router