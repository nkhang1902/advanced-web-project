module.exports = {
  HOST: "viaduct.proxy.rlwy.net",
  USER: "root",
  PASSWORD: "bA6BB2AgB56CdAGC5dH--Fdg3gAH45Ah",
  DB: "railway",
  port: '59998',
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
