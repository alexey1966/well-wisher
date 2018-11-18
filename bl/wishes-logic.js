import wishes from '../structs/wishes'

const isIncludedInCategories = (categoryIds, categoryId) => {
  return categoryIds.indexOf(categoryId) > -1;
}

const findNextWishId = (categoryIds, currentOrderId) => {
  let nextOrderId = currentOrderId + 1;

  let nextWish = wishes.find(wish => { return wish.orderId === nextOrderId; });
  if (!nextWish) {
    return 0;
  }

  if (isIncludedInCategories(categoryIds, nextWish.categoryId)) {
    return nextWish.id;
  }

  return findNextWishId(categoryIds, nextOrderId);
}

const findPreviousWishId = (categoryIds, currentOrderId) => {
  let previousOrderId = currentOrderId - 1;

  let previousWish = wishes.find(wish => { return wish.orderId === previousOrderId; });
  if (!previousWish) {
    return wishes.length - 1;
  }

  if (isIncludedInCategories(categoryIds, previousWish.categoryId)) {
    return previousWish.id;
  }

  return findPreviousWishId(categoryIds, previousOrderId);
}

export const getForwardWishId = (wishId, categoryIds) => {
  let currentWish = wishes.find(wish => { return wish.id === wishId; });
  if (!currentWish) {
    throw new Error('Failed to find wish with id ' + wishId);
  }

  return findNextWishId(categoryIds, currentWish.orderId);
}

export const getBackwardWishId = (wishId, categoryIds) => {
  let currentWish = wishes.find(wish => { return wish.id === wishId; });
  if (!currentWish) {
    throw new Error('Failed to find wish with id ' + wishId);
  }

  return findPreviousWishId(categoryIds, currentWish.orderId);
}

export const getWishBackgroundImage = (wishId) => {
  return wishes.find(wish => wish.id === wishId).image;
}

export const addWishToLikes = (wishId, likedWishIds) => {
  let likedWishIdsCopy = likedWishIds.slice();
  if (likedWishIdsCopy.indexOf(wishId) > -1) {
    return likedWishIdsCopy;
  }

  likedWishIdsCopy.push(wishId);
  return likedWishIdsCopy;
}

export const removeWishFromLikes = (wishId, likedWishIds) => {
  let likedWishIdsCopy = likedWishIds.slice();
  let index = likedWishIdsCopy.indexOf(wishId);

  if (index <= -1) {
    throw new Error('Failed to find index for ' + wishId);
  }

  likedWishIdsCopy.splice(index, 1);
  return likedWishIdsCopy;
}

export const getLikedWishes = (likedWishIds, categoryIds) => {
  return likedWishIds.map(wishId => wishes.find(wish => wish.id === wishId))
    .filter(wish => categoryIds.includes(wish.categoryId));
}

export const getWishes = (categoryIds) => {
  return wishes.filter(wish => categoryIds.includes(wish.categoryId));
}

const getInfoProvidedDate = (infoProvidedDate) => {
  if (infoProvidedDate === null) {
    return new Date();
  }

  return new Date(infoProvidedDate);
}

export const getWishByDay = (day, categoryIds, infoProvidedDate) => {
  let wishes = getWishes(categoryIds);
  let startDay = getInfoProvidedDate(infoProvidedDate).getDate();
  let index = day >= startDay ? day - startDay : day - startDay + 31;

  return index < wishes.length ? wishes[index] : getWishByDay(index + 1 - wishes.length, categoryIds, infoProvidedDate);
}

export const getWishByCurrentDay = (categoryIds, infoProvidedDate) => {
  let date = new Date();
  return getWishByDay(date.getDate(), categoryIds, infoProvidedDate);
}