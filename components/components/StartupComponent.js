import React from 'react';
import { AppLoading, Asset } from 'expo';
import BackgroundComponent from '../../containers/components/BackgroundComponent'
import MainNavigator from '../../components/navigators/MainNavigator'
import { persistStore } from 'redux-persist'
import { icons, backgroundImages } from '../../constants'
import { soundController } from '../../services/sound-controller'
import { runStartupTasks } from '../../bl/startup-logic'

import AskInfoNavigator from '../../components/navigators/AskInfoNavigator'

export default class StartupComponent extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isReady: false
    };
  }
  
  cacheAssets(elements) {
    return elements.map(element => {
      return Asset.fromModule(element).downloadAsync();
    });
  }

  async loadData() {
    let iconsAssets = this.cacheAssets(Object.values(icons));
    let backgroundImagesAssets = this.cacheAssets(Object.values(backgroundImages));
    let sound = soundController.init();
    let store = persistStore(this.props.store);
    
    await Promise.all([...backgroundImagesAssets, ...iconsAssets, sound, store]);
    await runStartupTasks(this.props.store);
  }

  renderNavigator() {
    if (this.props.store.getState().info.isPersonalInfoProvided) {
      return (
        <MainNavigator />
      );
    } else {
      return (
        <AskInfoNavigator />
      );
    }
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={() => this.loadData()}
          onFinish={() => this.setState({ ...this.state, isReady: true })}
          onError={console.error}
        />
      );
    } else {
      return ( 
        <BackgroundComponent>
          { this.renderNavigator() }
        </BackgroundComponent> 
      )
    }
  }
}