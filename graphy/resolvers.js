const Recipe = require("../modules/recipe");

module.exports = {
  Query: {
    async recipe(_, { ID }) {
      return await Recipe.findById(ID)
    },
    async getRecipe(_, { amount }) {
      return await Recipe.find().sort({ createdAt: -1 }).limit(amount)
    }
  },
}
