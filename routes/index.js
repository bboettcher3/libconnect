var express = require('express');
var router = express.Router();
const SerialPort = require("serialport");

var portList = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  SerialPort.list().then(ports => {
    portList = ports;
  })
  res.render('index', { title: 'libconnect', ports: portList});
});

module.exports = router;
