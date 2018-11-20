import { AppState } from 'react-native'
import { Util } from 'expo'
import { soundController } from '../services/sound-controller'
import { resetBadgeNumber } from '../bl/notifications-logic'
import { getWishByCurrentDay } from '../bl/wishes-logic'
import { setWish } from '../modules/wish-module'
import { setLanguage } from '../modules/info-module'
import I18n from 'react-native-i18n';
import translations from '../translations'

const handleLanguage = async (store) => {
  if (store.getState().info.language === null) {
    const locale = await Util.getCurrentLocaleAsync();
    const language = JSON.stringify(locale, null, 2) === 'ru-RU' ? 'ru' : 'en';
 
    I18n.locale = language;
    store.dispatch(setLanguage(language));
  } else {
    I18n.locale = store.getState().info.language;
  }
}

const handleTranslation = async (store) => {
  I18n.fallbacks = true;
  I18n.translations = translations;
  
  await handleLanguage(store);
}

const handleCurrentWish = (store) => {
  store.dispatch(setWish(getWishByCurrentDay(store.getState().configuration.categoryIds, store.getState().info.infoProvidedDate).id));
}

const handleMusicPlay = (store) => {
  if (store.getState().configuration.isBackgroundSoundEnabled) {
    soundController.playMusic();
  }
}

const handleResetBadgeNumber = () => {
  AppState.addEventListener('change', () => resetBadgeNumber());
}

export const runStartupTasks = async (store) => {
  await handleTranslation(store);

  handleCurrentWish(store);
  handleMusicPlay(store);
  handleResetBadgeNumber();
}