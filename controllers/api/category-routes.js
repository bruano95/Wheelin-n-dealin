const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    // Gets all categories from the Category table with Products details
    const allCategories = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    // Get the specified category based on the id
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ message: 'No category with that id found!' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category

  try {
    // Add a new category based on req.body details
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value

  try {
    // Updates the category in the database based on the req.params.id and the req.body
    const updateCategory = await Category.update(req.body, {
      where: { id: req.params.id }
    });
    if (updateCategory[0]) {
      res.status(200).json(updateCategory);
    } else {
      res.status(404).json({ message: 'No category with that id found!' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value

  try {
    // Deletes the category from the database based on the req.param.id
    const deleteCategory = await Category.destroy({
      where: { id: req.params.id },
    });
    if (deleteCategory) {
      res.status(200).json(deleteCategory);
    } else {
      res.status(404).json({ message: 'No category with that id found!' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
