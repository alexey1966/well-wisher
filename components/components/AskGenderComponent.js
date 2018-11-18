import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles, { blurParameters } from '../../styles'
import { BlurView } from 'expo'
import React from 'react';
import { icons } from '../../constants'

export default class AskGenderScreen extends React.Component {
  render() {
    return (
      <BlurView 
        tint={blurParameters.view.tint} 
        intensity={blurParameters.view.intensity} 
        style={styles.focusView}
      >
        <Text style={styles.askInfoTitleText}>Введите свои данные</Text>
        <View style={styles.genderView}> 
          <BlurView 
            tint={blurParameters.button.tint} 
            intensity={blurParameters.button.intensity} 
            style={styles.genderIconView}
          >
            <TouchableOpacity
              onPress={() => this.props.onComplete(false)}
            >
              <Image
                style={styles.genderIcon}
                source={icons.MALE}
              />
            </TouchableOpacity>
          </BlurView>
          <BlurView 
            tint={blurParameters.button.tint} 
            intensity={blurParameters.button.intensity} 
            style={styles.genderIconView}
          >
            <TouchableOpacity
              onPress={() => this.props.onComplete(true)}
            >
              <Image
                style={styles.genderIcon}
                source={icons.FEMALE}
              />
            </TouchableOpacity>
          </BlurView>
        </View>
      </BlurView>
    );
  }
}