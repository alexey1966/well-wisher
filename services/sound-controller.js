import { Audio } from 'expo'
import { audio } from '../constants'

class SoundController {
  constructor() {
    this.click = new Audio.Sound();
    this.music = new Audio.Sound();
  }
  
  async init() {
    await Audio.setIsEnabledAsync(true);
    await this.click.loadAsync(audio.CLICK);
    await this.music.loadAsync(audio.MUSIC);
  }
  
  makeClickSound() {
    this.click.setPositionAsync(0);
    this.click.playAsync();
  }

  playMusic() {
    this.music.playAsync();
  }

  pauseMusic() {
    this.music.pauseAsync();
  }
}

export let soundController = new SoundController();
