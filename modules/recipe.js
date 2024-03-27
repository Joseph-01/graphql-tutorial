const { model, Schema } = require("mongoose");

const RecipeSchema = new Schema({
  name: String,
  description: String,
  thumbsUp: Number,
  thumbsDown: Number,
  createdAt: String,
});


module.exports = model("Recipe", RecipeSchema);
