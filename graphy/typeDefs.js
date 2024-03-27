

const typeDefs = `
type Recipe {
  name: String,
  description: String,
  thumbsUp: Int,
  thumbsDown: Int,
  createdAt: String
}

Input RecipeInput {
  name: String,
  description: String,
}

type Query {
  recipe(ID: ID!): Recipe!
  getRecipe(amount: Int): [Recipe]
}

type Mutation {
  createRecipe(recipeInput: RecipeInput): Recipe!
  editRecipe(ID: ID!, recipeInput: RecipeInput): Boolean
  deleteRecipe(ID: ID!): Booleann
}

`


module.exports = typeDefs;
