export const groupIngredients = (ingredients) => {
  return ingredients.reduce((acc, item) => {
    acc[item.type] = acc[item.type] || [];
    acc[item.type].push(item);
    return acc
  }, {})
}