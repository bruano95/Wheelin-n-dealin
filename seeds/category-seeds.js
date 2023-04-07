const { Category } = require('../models');

const carCategory = [
  {
    category_name: 'Gas',
    category_id: 1
  },
  {
    category_name: 'Hybrids',
    category_id: 2
  },
  {
    category_name: 'Electric',
    category_id: 3
  },

];

const seedCategories = () => Category.bulkCreate(carCategory);

module.exports = seedCategories;
