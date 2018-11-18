import { addToCategories, removeFromCategories } from '../bl/configuration-logic'
import categories from '../structs/categories'

const types = {
  ENABLE_CATEGORY : 'ENABLE_CATEGORY',
  DISABLE_CATEGORY : 'DISABLE_CATEGORY',
  ENABLE_BACKGROUND_SOUND : 'ENABLE_BACKGROUND_SOUND',
  DISABLE_BACKGROUND_SOUND : 'SET_DISABLE_BACKGROUND_SOUNDINITIAL_DATA',
  ENABLE_PUSH_NOTIFICATIONS : 'ENABLE_PUSH_NOTIFICATIONS',
  DISABLE_PUSH_NOTIFICATIONS : 'DISABLE_PUSH_NOTIFICATIONS',
  SET_PUSH_NOTIFICATION_TIME : 'SET_PUSH_NOTIFICATION_TIME'
}

const initialState = {
  isBackgroundSoundEnabled : true,
  isPushNotificationsEnabled : true,
  pushNotificationTime : { lowPart : 9, highPart : 10 },
  categoryIds : categories.map(category => category.id)
}

export const enableCategory = (categoryId, categoryIds) => {
  return {
    type: types.ENABLE_CATEGORY,
    categoryIds : addToCategories(categoryId, categoryIds)
  };
}

export const disableCategory = (categoryId, categoryIds) => {
  return {
    type: types.DISABLE_CATEGORY,
    categoryIds : removeFromCategories(categoryId, categoryIds)
  };
}

export const enableBackgroundSound = () => {
  return {
    type: types.ENABLE_BACKGROUND_SOUND
  };
}

export const disableBackgroundSound = () => {
  return {
    type: types.DISABLE_BACKGROUND_SOUND
  };
}

export const enablePushNotifications = () => {
  return {
    type: types.ENABLE_PUSH_NOTIFICATIONS
  };
}

export const disablePushNotifications = () => {
  return {
    type: types.DISABLE_PUSH_NOTIFICATIONS
  };
}

export const setPushNotificationTime = (lowPart, highPart) => {
  return {
    type: types.SET_PUSH_NOTIFICATION_TIME,
    pushNotificationTime : { lowPart, highPart }
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ENABLE_CATEGORY:
      return { 
        ...state, 
        categoryIds : action.categoryIds 
      }
    case types.DISABLE_CATEGORY:
      return { 
        ...state, 
        categoryIds : action.categoryIds 
      }
    case types.ENABLE_BACKGROUND_SOUND:
      return { 
        ...state, 
        isBackgroundSoundEnabled : true 
      }
    case types.DISABLE_BACKGROUND_SOUND:
      return { 
        ...state, 
        isBackgroundSoundEnabled : false 
      }
    case types.ENABLE_PUSH_NOTIFICATIONS:
      return { 
        ...state, 
        isPushNotificationsEnabled : true 
      }
    case types.DISABLE_PUSH_NOTIFICATIONS:
      return { 
        ...state, 
        isPushNotificationsEnabled : false 
      }
    case types.SET_PUSH_NOTIFICATION_TIME:
      return { 
        ...state, 
        pushNotificationTime : action.pushNotificationTime 
      }
    default:
      return state;
  }
}