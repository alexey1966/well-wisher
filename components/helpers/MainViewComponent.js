import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import styles from '../../styles'

export default class MainViewComponent extends React.Component {
  renderBottomView() {
    return null;
  }

  render() {
    return (
      <SafeAreaView style={styles.backgroundView}>
        <View style={styles.headerOffset}>
        </View>
        <View>
          { this.renderCenterView() }
        </View>
        <View>
          { this.renderBottomView() }
        </View>
      </SafeAreaView>
    );
  }
}