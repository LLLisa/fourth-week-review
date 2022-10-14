const { Company } = require('../db');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const response = await Company.findAll();
    res.send(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
