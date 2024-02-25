var express = require("express");
var router = express.Router();
var Recipe = require("../models/dataSchema");

router.post("/create", (req, res, next) => {

  var newRecipe = new Recipe({
    name:         req.body.name,
    ingredients:  req.body.ingredients,
    instructions: req.body.instructions,
    image:        req.body.image
  });

  newRecipe.save((error, recipe) => {
    if (error) {
      console.log("[/create] Error: ", error);
      res.status(500).json({errmsg: error});
    }
    else {
      console.log("[/create] Success: ", recipe);
      res.status(200).json({msg: recipe});
    }
  });
  
});

router.get("/get", (req, res, next) => {
  Recipe.find({}, (error, recipes) => {
    if (error) {
      console.log("[/get] Error: ", error);
      res.status(500).json({errmsg: error});
    }
    else {
      console.log("[/get] Success: ", recipes);
      res.status(200).json({msg: recipes});
    }
  });
});

router.get("/get/:id", (req, res, next) => {
  Recipe.findById(req.body._id, (error, recipe) => {
    if (error) {
      console.log("[/get/:id] Error: ", error);
      res.status(500).json({errmsg: error});
    }
    else {
      console.log("[/get/:id] Success: ", recipe);
      res.status(200).json({msg: recipe});
    }
  });
});

router.put("/update", (req, res, next) => {
  Recipe.findById(req.body._id, (error, recipe) => {
    if (error) {
      console.log("[/update] Error: ", error);
      res.status(500).json({errmsg: error});
    }
    else{
      recipe.name =           req.body.name;
      recipe.ingredients =    req.body.ingredients;
      recipe.instructions =   req.body.instructions;
      recipe.image =          req.body.image;

      recipe.save((error, recipe) => {
        if (error) {
          console.log("[/update] Error: ", error);
          res.status(500).json({errmsg: error});
        }
        else {
          console.log("[/update] Success: ", recipe);
          res.status(200).json({msg: recipe});
        }
      });
    }
  });
});

router.delete("/delete/:id", (req, res, next) => {
  Recipe.findOneAndRemove({_id: req.params.id}, (error, recipe) => {
    if (error) {
      console.log("[/delete/:id] Error: ", error);
      res.status(500).json({errmsg: error});
    }
    else {
      console.log("[/delete/:id] Success: ", recipe);
      res.status(200).json({msg: recipe});
    }
  });
});

module.exports = router;