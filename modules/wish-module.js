import { backgroundImages } from '../constants'
import { addWishToLikes, getForwardWishId, getBackwardWishId, getWishBackgroundImage, removeWishFromLikes } from '../bl/wishes-logic'

const types = {
  SET_WISH : 'SET_WISH',
  LIKE_WISH : 'LIKE_WISH',
  DISLIKE_WISH : 'DISLIKE_WISH'
}

const initialState = {
  likedWishIds : [],
  wishId : 0,
  backgroundImage : backgroundImages[0]
}

export const setWish = (wishId) => {
  return {
    type: types.SET_WISH,
    wishId : wishId,
    backgroundImage : getWishBackgroundImage(wishId)
  };
}

export const forwardWish = (wishId, categoryIds) => {
  return setWish(getForwardWishId(wishId, categoryIds));
}

export const backwardWish = (wishId, categoryIds) => {
  return setWish(getBackwardWishId(wishId, categoryIds));
}

export const likeWish = (wishId, likedWishIds) => {
  return {
    type: types.LIKE_WISH,
    likedWishIds : addWishToLikes(wishId, likedWishIds)
  };
}

export const dislikeWish = (wishId, likedWishIds) => {
  return {
    type: types.DISLIKE_WISH,
    likedWishIds : removeWishFromLikes(wishId, likedWishIds)
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_WISH:
      return { 
        ...state, 
        wishId : action.wishId, 
        backgroundImage : action.backgroundImage 
      }
    case types.LIKE_WISH:
      return { 
        ...state, 
        likedWishIds : action.likedWishIds 
      }
    case types.DISLIKE_WISH:
      return { 
        ...state, 
        likedWishIds : action.likedWishIds 
      }
    default:
      return state;
  }
}