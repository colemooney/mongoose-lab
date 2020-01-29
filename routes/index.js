const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
  });
// Get Page two
router.get('/pagetwo', (req, res, next) => {
    res.render('pagetwo');
  });

module.exports = router;
