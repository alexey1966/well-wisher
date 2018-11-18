import React from 'react';
import { Image, FlatList, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo';
import { icons } from '../../constants'
import styles, { blurParameters } from '../../styles'
import { soundController } from '../../services/sound-controller'

export default class MenuComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIcons : this.getMenuIcons(this.props.isBackgroundSoundEnabled)
    }
  }

  getMenuIcons(isBackgroundSoundEnabled) {
    return [
      { key : '0', path : icons.SETTINGS, onPress : () => this.props.navigation.navigate('Settings') },
      { key : '1', path : icons.CATEGORIES, onPress : () => this.props.navigation.navigate('Categories') },
      { key : '2', path : icons.LIKES, onPress : () => this.props.navigation.navigate('Likes') },
      { key : '3', path : isBackgroundSoundEnabled ? icons.TURN_ON_SOUND : icons.TURN_OFF_SOUND, onPress : () => this.handleSoundClick() },
      { key : '4', path : icons.REFRESH, onPress : () => this.props.slideWish(true) }
    ];
  }

  handleSoundClick() {
    let { isBackgroundSoundEnabled, disableBackgroundSound, enableBackgroundSound } = this.props;
    this.setState({
      menuIcons : this.getMenuIcons(!isBackgroundSoundEnabled)
    });
    
    isBackgroundSoundEnabled ? disableBackgroundSound() : enableBackgroundSound();
    isBackgroundSoundEnabled ? soundController.pauseMusic() : soundController.playMusic();
  }
  
  render() {
    return ( 
      <BlurView tint={blurParameters.view.tint} intensity={blurParameters.view.intensity} style={styles.menuView}>
        <FlatList
          contentContainerStyle={styles.menuContainer}
          horizontal={true}
          data={this.state.menuIcons}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => item.onPress()}>
              <Image
                style={styles.menuIcon}
                source={item.path}
              />
            </TouchableOpacity>
          )}
        />
      </BlurView>
    );
  }
}