const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./user.model.js")(mongoose);
db.products = require("./product.model.js")(mongoose);
db.plantios = require("./plantio.model.js")(mongoose);

module.exports = db;
