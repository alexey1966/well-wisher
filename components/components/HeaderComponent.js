import React from 'react';
import { Image, Text, View } from 'react-native';
import { icons } from '../../constants'
import styles from '../../styles'

export default class HeaderComponent extends React.Component {
  render() {
    return ( 
      <View style={styles.appTitle}>
        <Image
          style={styles.appIcon}
          source={icons.WHITE_ICON}/>)} 
        />
        <Text style={styles.titleText}>Твой Настрой</Text>
      </View>
    );
  }
}