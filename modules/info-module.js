const types = {
  SET_PERSONAL_INFO_PROVIDED : 'SET_PERSONAL_INFO_PROVIDED',
  SET_NAME : 'SET_NAME',
  SET_GENDER : 'SET_GENDER',
  SET_LANGUAGE : 'SET_LANGUAGE'
}

const initialState = {
  name : null,
  isFemale : null,
  isPersonalInfoProvided : false,
  infoProvidedDate : null,
  language : null
}

export const setPersonalInfoProvided = () => {
  return {
    type: types.SET_PERSONAL_INFO_PROVIDED
  }
}

export const setName = (name) => {
  return {
    type: types.SET_NAME,
    name
  };
}

export const setGender = (isFemale) => {
  return {
    type: types.SET_GENDER,
    isFemale
  };
}

export const setLanguage = (language) => {
  return {
    type: types.SET_LANGUAGE,
    language
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PERSONAL_INFO_PROVIDED:
      return {
        ...state,
        isPersonalInfoProvided : true,
        infoProvidedDate: new Date().getTime()
      }
    case types.SET_NAME:
      return { 
        ...state, 
        name : action.name 
      }
    case types.SET_GENDER:
      return { 
        ...state, 
        isFemale : action.isFemale 
      }
    case types.SET_LANGUAGE:
      return { 
        ...state, 
        language : action.language 
      }
    default:
      return state;
  }
}