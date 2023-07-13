const { Food } = require('../database/models');

const findFoods = async () => {
  const data = await Food.findAll();
  const foods = data.map(({ dataValues }) => dataValues);
  if (!foods.length) return { type: 'error', message: 'No Foods!' };
  return { type: null, message: foods };
}

module.exports = {
  findFoods,
}
