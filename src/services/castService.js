const Cast = require('../models/Cast');

exports.getAll = () => Cast.find();
exports.create = (castData) => Cast.create(castData);
