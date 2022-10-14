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

//between this and th users slice, which route configuration is better and why?
//what type of data is this route expecting?
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

router.put('/:id', async (req, res, next) => {
  try {
    const schoolToUpdate = await School.findByPk(req.params.id);
    const response = await schoolToUpdate.update(req.body);
    res.send(response);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const schoolToDelete = await School.findByPk(req.params.id);
    await schoolToDelete.destroy();
    res.send(schoolToDelete);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
