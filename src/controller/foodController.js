const foodService = require('../services/foodServices');

const findFoods = async (_req, res) => {
  try {
    const { type, message } = await foodService.findFoods();
    if (type) return res.status(404).json({ message });
    return res.status(200).json({ message });
  } catch (error) {
    // console.error(error);
    return res.status(500).json({ message: 'Internal Server Error!'})
  }
}

module.exports = {
  findFoods,
}
