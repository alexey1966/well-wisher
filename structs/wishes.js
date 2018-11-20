import I18n from 'react-native-i18n';
import { backgroundImages } from '../constants'

export default [
  { 
    id: 0, 
    orderId: 0,
    categoryId: 0,
    image: backgroundImages[0],
    getText: (name, isFemale) => {
      return name + I18n.t('wishes[0].genderless');
    }
  },
  { 
    id: 1, 
    orderId: 1,
    categoryId: 0,
    image: backgroundImages[1],
    getText: (name, isFemale) => {
      return I18n.t('wishes[1].genderless');
    }
  },
  { 
    id: 2, 
    orderId: 2,
    categoryId: 1,
    image: backgroundImages[2],
    getText: (name, isFemale) => {
      return name + I18n.t('wishes[2].genderless');
    }
  },
  { 
    id: 3, 
    orderId: 3,
    categoryId: 1,
    image: backgroundImages[3],
    getText: (name, isFemale) => {
      return I18n.t('wishes[3].genderless');
    }
  },
  { 
    id: 4, 
    orderId: 4,
    categoryId: 2,
    image: backgroundImages[4],
    getText: (name, isFemale) => {
      return name + I18n.t('wishes[4].genderless');
    }
  },
  { 
    id: 5, 
    orderId: 5,
    categoryId: 2,
    image: backgroundImages[5],
    getText: (name, isFemale) => {
      return I18n.t('wishes[5].genderless');
    }
  },
  { 
    id: 6, 
    orderId: 6,
    categoryId: 3,
    image: backgroundImages[6],
    getText: (name, isFemale) => {
      return I18n.t('wishes[6].genderless');
    }
  },
  { 
    id: 7, 
    orderId: 7,
    categoryId: 3,
    image: backgroundImages[7],
    getText: (name, isFemale) => {
      return name + (isFemale ? I18n.t('wishes[7].female') : I18n.t('wishes[7].male'));
    }
  },
  { 
    id: 8, 
    orderId: 8,
    categoryId: 1,
    image: backgroundImages[8],
    getText: (name, isFemale) => {
      return name + I18n.t('wishes[8].genderless');
    }
  },
  { 
    id: 9, 
    orderId: 9,
    categoryId: 1,
    image: backgroundImages[9],
    getText: (name, isFemale) => {
      return I18n.t('wishes[9].genderless');
    }
  },
  { 
    id: 10, 
    orderId: 10,
    categoryId: 0,
    image: backgroundImages[0],
    getText: (name, isFemale) => {
      return name + I18n.t('wishes[10].genderless');
    }
  },
  { 
    id: 11, 
    orderId: 11,
    categoryId: 0,
    image: backgroundImages[1],
    getText: (name, isFemale) => {
      return I18n.t('wishes[11].genderless');
    }
  },
  { 
    id: 12, 
    orderId: 12,
    categoryId: 2,
    image: backgroundImages[2],
    getText: (name, isFemale) => {
      return name + I18n.t('wishes[12].genderless');
    }
  },
  { 
    id: 13, 
    orderId: 13,
    categoryId: 2,
    image: backgroundImages[3],
    getText: (name, isFemale) => {
      return I18n.t('wishes[13].genderless');
    }
  },
  { 
    id: 14, 
    orderId: 14,
    categoryId: 3,
    image: backgroundImages[4],
    getText: (name, isFemale) => {
      return name + I18n.t('wishes[14].genderless');
    }
  },
  { 
    id: 15, 
    orderId: 15,
    categoryId: 3,
    image: backgroundImages[5],
    getText: (name, isFemale) => {
      return I18n.t('wishes[15].genderless');
    }
  },
  { 
    id: 16, 
    orderId: 16,
    categoryId: 0,
    image: backgroundImages[6],
    getText: (name, isFemale) => {
      return name + I18n.t('wishes[16].genderless');
    }
  },
  { 
    id: 17, 
    orderId: 17,
    categoryId: 0,
    image: backgroundImages[7],
    getText: (name, isFemale) => {
      return I18n.t('wishes[17].genderless');
    }
  },
  { 
    id: 18, 
    orderId: 18,
    categoryId: 0,
    image: backgroundImages[8],
    getText: (name, isFemale) => {
      return name + I18n.t('wishes[18].genderless');
    }
  },
  { 
    id: 19, 
    orderId: 19,
    categoryId: 0,
    image: backgroundImages[9],
    getText: (name, isFemale) => {
      return I18n.t('wishes[19].genderless');
    }
  },
  { 
    id: 20, 
    orderId: 20,
    categoryId: 3,
    image: backgroundImages[0],
    getText: (name, isFemale) => {
      return name + (isFemale ? I18n.t('wishes[20].female') : I18n.t('wishes[21].male'));
    }
  },
  { 
    id: 21, 
    orderId: 21,
    categoryId: 3,
    image: backgroundImages[1],
    getText: (name, isFemale) => {
      return isFemale ? I18n.t('wishes[21].female') : I18n.t('wishes[21].male');
    }
  },
  { 
    id: 22, 
    orderId: 22,
    categoryId: 3,
    image: backgroundImages[2],
    getText: (name, isFemale) => {
      return name + I18n.t('wishes[22].genderless');
    }
  },
  { 
    id: 23, 
    orderId: 23,
    categoryId: 3,
    image: backgroundImages[3],
    getText: (name, isFemale) => {
      return name + (isFemale ? I18n.t('wishes[23].female') : I18n.t('wishes[23].male'));
    }
  },
  { 
    id: 24, 
    orderId: 24,
    categoryId: 3,
    image: backgroundImages[4],
    getText: (name, isFemale) => {
      return name + I18n.t('wishes[24].genderless');
    }
  },
  { 
    id: 25, 
    orderId: 25,
    categoryId: 3,
    image: backgroundImages[5],
    getText: (name, isFemale) => {
      return name + (isFemale ? I18n.t('wishes[25].female') : I18n.t('wishes[25].male'));
    }
  },
  { 
    id: 26, 
    orderId: 26,
    categoryId: 1,
    image: backgroundImages[6],
    getText: (name, isFemale) => {
      return name + I18n.t('wishes[26].genderless');
    }
  },
  { 
    id: 27, 
    orderId: 27,
    categoryId: 1,
    image: backgroundImages[7],
    getText: (name, isFemale) => {
      return I18n.t('wishes[27].genderless');
    }
  },
  { 
    id: 28, 
    orderId: 28,
    categoryId: 1,
    image: backgroundImages[8],
    getText: (name, isFemale) => {
      return name + I18n.t('wishes[28].genderless');
    }
  },
  { 
    id: 29, 
    orderId: 29,
    categoryId: 1,
    image: backgroundImages[9],
    getText: (name, isFemale) => {
      return I18n.t('wishes[29].genderless');
    }
  },
  { 
    id: 30, 
    orderId: 30,
    categoryId: 1,
    image: backgroundImages[4],
    getText: (name, isFemale) => {
      return name + (isFemale ? I18n.t('wishes[30].female') : I18n.t('wishes[30].male'));
    }
  }
]