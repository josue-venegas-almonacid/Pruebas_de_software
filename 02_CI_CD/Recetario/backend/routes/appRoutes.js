var express = require("express");
var router = express.Router();
var Recipe = require("../models/dataSchema");
var upload = require('../middlewares/upload');

// router.post("/create", upload.single('image'), (req, res, next) => {
router.post("/create", (req, res, next) => {

  /* if (!req.file){
    res.status(500).json({errmsg: "You must upload a .jpg/.jpeg/.png/.gif file"});
  } */

  var newRecipe = new Recipe({
    name:         req.body.name,
    ingredients:  req.body.ingredients,
    instructions: req.body.instructions,
    image:        req.body.image,
    // path:         req.file.path,
  });

  newRecipe.save((error, recipe) => {
    if (error) res.status(500).json({errmsg: error});
    else res.status(200).json({msg: recipe});
  });
  
});

router.get("/get", (req, res, next) => {
  Recipe.find({}, (error, recipes) => {
    if (error) res.status(500).json({errmsg: error});
    else res.status(200).json({msg: recipes});
  });
});

router.get("/get/:id", (req, res, next) => {
  Recipe.findById(req.body._id, (error, recipe) => {
    if (error) res.status(500).json({errmsg: error});
    else res.status(200).json({msg: recipe});
  });
});

// router.put("/update", upload.single('image'), (req, res, next) => {
router.put("/update", (req, res, next) => {
  Recipe.findById(req.body._id, (error, recipe) => {
    if (error) res.status(500).json({errmsg: error});
    else{

     /*  if (!req.file){
        res.status(500).json({errmsg: "You must upload a .jpg/.jpeg/.png/.gif file"});
      } */
      
      recipe.name =           req.body.name;
      recipe.ingredients =    req.body.ingredients;
      recipe.instructions =   req.body.instructions;
      recipe.image =          req.body.image;
      // recipe.path =           req.file.path;

      recipe.save((error, recipe) => {
        if (error) res.status(500).json({errmsg: error});
        else res.status(200).json({msg: recipe});
      });
    }
  });
});

router.delete("/delete/:id", (req, res, next) => {
  Recipe.findOneAndRemove({_id: req.params.id}, (error, recipe) => {
    if (error) res.status(500).json({errmsg: error});
    else res.status(200).json({msg: recipe});
  });
});

module.exports = router;