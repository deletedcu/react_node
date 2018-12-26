/**
 * Parse description into JSON
 * @param {*} description 
 */
module.exports = (description) => {
  let descriptionJSON;

  try {
    // parse
    descriptionJSON = JSON.parse(description);

    if (!descriptionJSON.description) {
      descriptionJSON.description = '';
    }

    if (!descriptionJSON.calories) {
      descriptionJSON.calories = '--';
    }

    if (!descriptionJSON.fat) {
      descriptionJSON.fat = '--';
    }

    if (!descriptionJSON.protein) {
      descriptionJSON.protein = '--';
    }

    if (!descriptionJSON.carbs) {
      descriptionJSON.carbs = '--';
    }

    if (!descriptionJSON.ingredients) {
      descriptionJSON.ingredients = 'Not Available';
    }
  } 
  catch {
    // invalid json format, return default values
    descriptionJSON = {
      description: description,
      calories: '--',
      fat: '--',
      protein: '--',
      carbs: '--',
      ingredients: 'Not Available',
    }
  }

  return descriptionJSON;
}
