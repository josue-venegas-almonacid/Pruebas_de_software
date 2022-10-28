var mongoose = require("mongoose");
var recipeSchema = mongoose.Schema({
  name:         {type: String},
  ingredients:  {type: String},
  instructions: {type: String},
});

module.exports = mongoose.model('recipe', recipeSchema);