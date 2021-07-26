const express = require('express');
const router = express.Router();
const { getStores,addStores } = require('../controlers/stores');

// router.get('/sam', (req, res) => {
//     res.status(200).send("i am samiul")
// })

router.route('/api/v1/stores').get(getStores).post(addStores)








module.exports = router;