import React from 'react';
import AskNameComponent from '../../components/components/AskNameComponent'
import MainViewComponent from '../../components/helpers/MainViewComponent'
import { View } from 'react-native'
import styles from '../../styles';

export default class AskNameScreen extends MainViewComponent {
  renderCenterView() {
    return (
      <AskNameComponent
        onComplete={() => this.props.navigation.navigate('AskGender') }
        setName={(name) => this.props.setName(name)}
        name={this.props.name}
      />
    )
  }

  renderBottomView() {
    return (
      <View style={styles.askBottomView} />
    )
  }
}