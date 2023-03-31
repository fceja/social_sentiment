
var express = require('express');
var router = express.Router();

//middleware
router.use((req, res, next) => {
  next()
})

//homepage
router.get('/', function(req, res, next) {
  res.render('index', { name: 'fceja', admin: false });
})

//get about
router.get('/about', (req, res) => {
  res.send('about birds')
})

router.get('/index', (req, res) => {
  res.send('index paths')
})

module.exports = router