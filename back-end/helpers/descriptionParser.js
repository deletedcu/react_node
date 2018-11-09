/**
 * Parse description into JSON
 * @param {*} description 
 */
module.exports = (description) => {
  let descriptionJSON;

  try {
    // parse
    descriptionJSON = JSON.parse(description);
  } 
  catch {
    // invalid json format, return default values
    descriptionJSON = {
      description: description,
      calories: '--',
      fat: '--',
      protein: '--',
      carbs: '--',
    }
  }

  return descriptionJSON;
}
