import React from 'react';
import { BlurView } from 'expo'
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles, { blurParameters } from '../../styles'

export default class AskNameComponent extends React.Component {
  render() {
    return (
      <BlurView 
        tint={blurParameters.view.tint} 
        intensity={blurParameters.view.intensity} 
        style={styles.focusView}
      >
        <Text style={styles.askInfoTitleText}>Введите свои данные</Text>
        <View>  
          <BlurView 
            tint={blurParameters.view.tint} 
            intensity={blurParameters.view.intensity} 
            style={styles.textInputView}
          >
            <TextInput 
              onChangeText={(name) => this.props.setName(name.trim())} 
              style={styles.askInfoText} 
              defaultValue={this.props.name}
              placeholder="Имя"
            />
          </BlurView>
          <BlurView 
            tint={blurParameters.view.tint} 
            intensity={blurParameters.view.intensity} 
            style={styles.textInputView}
          >
            <TouchableOpacity
              disabled={this.props.name === null || this.props.name === ''}
              onPress={() => this.props.onComplete()}
            >
              <TextInput  
                pointerEvents="none"
                style={styles.askInfoText} 
                placeholder="Пол"
              />
            </TouchableOpacity>
          </BlurView>
        </View>
      </BlurView>
    );
  }
}