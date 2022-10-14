const { School } = require('../db');

const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const schools = await School.findAll();
    res.send(schools);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const school = await School.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!school) {
      const e = new Error('School not found');
      e.status = 404;
      throw e;
    }
    res.send(school);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const response = await School.create(req.body);
    res.send(response);
  } catch (error) {
    next(error);
  }
});

//todo: put and delete routes

module.exports = router;
