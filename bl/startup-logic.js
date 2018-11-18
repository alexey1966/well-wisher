import { AppState } from 'react-native'
import { soundController } from '../services/sound-controller'
import { resetBadgeNumber } from '../bl/notifications-logic'
import { getWishByCurrentDay } from '../bl/wishes-logic'
import { setWish } from '../modules/wish-module'

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

export const runStartupTasks = (store) => {
  handleCurrentWish(store);
  handleMusicPlay(store);
  handleResetBadgeNumber();
}