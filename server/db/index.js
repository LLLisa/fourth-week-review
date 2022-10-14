const conn = require('./conn');
const { User, School, Company, dbSeed } = require('./models');

User.belongsTo(School);
School.hasMany(User);
User.belongsTo(Company);
Company.hasMany(User);

User.belongsToMany(User, { through: 'classmates', as: 'classMate' });

//why is conn routed through here?
module.exports = { conn, User, School, Company, dbSeed };
