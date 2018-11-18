import React from 'react';
import AskGenderComponent from '../../components/components/AskGenderComponent'
import MainViewComponent from '../../components/helpers/MainViewComponent'
import { View } from 'react-native'
import styles from '../../styles';

export default class AskGenderScreen extends MainViewComponent {
  onComplete(isFemale) {
    this.props.setGender(isFemale);
    this.props.navigation.navigate('AskNotification');
  }

  renderCenterView() {
    return (
      <AskGenderComponent onComplete={(isFemale) => this.onComplete(isFemale)} />
    )
  }

  renderBottomView() {
    return (
      <View style={styles.askBottomView} />
    )
  }
}