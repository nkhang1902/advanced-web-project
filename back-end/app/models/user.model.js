module.exports = (sequelize, Sequelize) => {
  return sequelize.define("testtables", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });
};
