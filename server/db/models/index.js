const conn = require('../conn');
const User = require('./User');
const School = require('./School');
const Company = require('./Company');
const { users, schools, companies } = require('../seedData');

const dbSeed = async () => {
  try {
    const moe = await User.create({
      name: 'Moe',
      age: 48,
      email: 'lonelybartender@maeux.com',
      isSimpson: false,
      //why can't we assign a schoolId here?
    });

    //bulkcreate?
    //unused variables?
    const [homer, marge, bart, lisa, maggie, nelson, milhouse, gil, grimey] =
      await User.bulkCreate(users);
    const [springfieldElem, springfieldCC] = await School.bulkCreate(schools);
    const [nuclear, moes, kwikemart] = await Company.bulkCreate(companies);

    homer.companyId = nuclear.id;
    moe.companyId = moes.id;
    bart.schoolId = springfieldElem.id;
    lisa.schoolId = springfieldElem.id;
    nelson.schoolId = springfieldElem.id;
    milhouse.schoolId = springfieldElem.id;
    marge.schoolId = springfieldCC.id;
    moe.schoolId = springfieldCC.id;
    gil.schoolId = springfieldCC.id;
    grimey.schoolId = springfieldCC.id;

    //what is addClassmate?
    bart.addClassMate(nelson.id);
    bart.addClassMate(milhouse.id);
    bart.addClassMate(lisa.id);

    //Promise.all()?
    await Promise.all([
      homer.save(),
      bart.save(),
      lisa.save(),
      nelson.save(),
      milhouse.save(),
      marge.save(),
      moe.save(),
      gil.save(),
      grimey.save(),
    ]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { User, School, Company, dbSeed };
