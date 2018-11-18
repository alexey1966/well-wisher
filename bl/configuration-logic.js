export const addToCategories = (categoryId, categoryIds) => {
  let categoryIdsCopy = categoryIds.slice();
  if (categoryIdsCopy.indexOf(categoryId) > -1) {
    return categoryIdsCopy;
  }

  categoryIdsCopy.push(categoryId);
  return categoryIdsCopy;
}

export const removeFromCategories = (categoryId, categoryIds) => {
  let categoryIdsCopy = categoryIds.slice();
  if (categoryIdsCopy.length === 1) {
    return categoryIdsCopy;
  }

  let index = categoryIdsCopy.indexOf(categoryId);
  if (index <= -1) {
    throw new Error('Failed to find index for ' + categoryId);
  }

  categoryIdsCopy.splice(index, 1);
  return categoryIdsCopy;
}