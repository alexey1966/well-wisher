import React from 'react';
import { BlurView } from 'expo';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles, { blurParameters } from '../../styles'
import { icons, information } from '../../constants'

export default class VersionScreen extends React.Component {
  render() {
    return (
      <View style={styles.backgroundView}>
        <View style={styles.headerOffset}>
        </View>
        <View>
          <BlurView tint={blurParameters.view.tint} intensity={blurParameters.view.intensity} style={styles.focusView}>
            <View style={{ alignItems : 'center' }}>
              <Image 
                source={icons.ICON}
                style={styles.appLargeIcon}
              />
              <Text style={styles.versionLargeText}>{information.appName}</Text>
              <Text style={styles.versionText}>{information.appVersion}</Text>
              <View style={styles.listSeparator} />
              <Text style={styles.versionText}>{information.appDescription}</Text>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image 
                  style={styles.downIcon}
                  source={icons.DOWN}
                />
              </TouchableOpacity>
            </View>
          </BlurView>
        </View>
        <View style={styles.bottomView}>
        </View>
      </View>
    );
  }
}