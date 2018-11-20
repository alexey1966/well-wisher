import I18n from 'react-native-i18n';
import { icons } from '../constants'

export default [
  { 
    id: 0,
    order: 0,
    title: I18n.t('titleText.categories.mood.title'),
    subtitle: I18n.t('titleText.categories.mood.subtitle'),
    icon: icons.MOOD
  },
  { 
    id: 1,
    order: 1,
    title: I18n.t('titleText.categories.luck.title'),
    subtitle: I18n.t('titleText.categories.luck.subtitle'),
    icon: icons.LUCK
  },
  { 
    id: 2,
    order: 2,
    title: I18n.t('titleText.categories.success.title'),
    subtitle: I18n.t('titleText.categories.success.subtitle'),
    icon: icons.SUCCESS
  },
  { 
    id: 3,
    order: 3,
    title: I18n.t('titleText.categories.motivation.title'),
    subtitle: I18n.t('titleText.categories.motivation.subtitle'),
    icon: icons.MOTIVATION
  }
]