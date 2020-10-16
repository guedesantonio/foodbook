const express = require('express')
const { Fruit } = require('../models/fruit');
const router = express.Router();

router.get('/api/fruits', async (req, res) => {
    const allFruit = await Fruit.find({});
    res.json(allFruit);
});

router.post('/api/fruit', async (req, res) => {
    console.log(req.body);
    const newFruit = await Fruit.create({
        name: req.body.name,
    });
    res.json(newFruit);
});

module.exports.fruitApiRouter = router;
