const router = require('express').Router();
const { User } = require('../models');
const { Cars } = require('../models');
const withAuth = require('../utils/auth');
const multer = require("multer");
const upload = multer({ dest: "./tmp/images/" });
const fs = require("fs");
const https = require("https");

router.get('/about', withAuth, async (req, res) => {
  try {
    const carsData = await Cars.findAll();

    const cars = carsData.map((project) => project.get({ plain: true }));

    res.render('about', {
      cars,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/api', withAuth, async (req, res) => {
  try {
    const car = {};
    res.render('car', {
      car,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  try {
    const carsData = await Cars.findAll();

    const cars = carsData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      cars,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/api', withAuth, async (req, res) => {
  try {
    const car = {};
    res.render('car', {
      car,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Upload.js handler,recieiving the image URL from upload.js server.
router.post("/upload", upload.single("file"), (req, res) => {
  //  Saves a url image from a previous upload into the images folder
  // Image data taken from upload.js server
  const url = req.body.file;
  const filePath = "./public/images/" + req.body.name;
  const file = fs.createWriteStream(filePath);
  https.get(url, (response) => {
    // Builds connection (pipe) between upload.js server and this serverto save image file to images folder.
    response.pipe(file);
    file.on("finish", () => {
      file.close(() => {
        console.log("Image saved to file:", filePath);
      });
    });
  }).on("error", (error) => {
    console.error("Error downloading image:", error);
  });
  res.status(200).json({ message: "File uploaded successfully" });
});

router.post('/api', async (req, res) => {
  const ret = await Cars.create(req.body)
    .then((product) => { })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });

  try {
    const carsData = await Cars.findAll({
    order: [['id', 'DESC']]
    });
    console.log(carsData);
    const cars = carsData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      cars,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/users', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('users', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
