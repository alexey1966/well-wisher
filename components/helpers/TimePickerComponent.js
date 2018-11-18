import React from 'react';
import { Picker, View } from 'react-native'

export default class TimePickerComponent extends React.Component {
  renderPickerNumbers(size) {
    return [...Array(size).keys()].map(number => (
      <Picker.Item 
        value={number} 
        label={number < 10 ? '0' + number.toString() : number.toString()} 
        key={number.toString()} 
      />));
  }
  
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection : 'row' }}>
          <Picker 
            style={{ flex:.2 }}
            itemStyle = {{ color : 'white' }}
            selectedValue = {this.props.pushNotificationTime.lowPart} 
            onValueChange = {(value) => this.props.setPushNotificationTime(value, this.props.pushNotificationTime.highPart)}
          >
            { this.renderPickerNumbers(24) }
          </Picker>
          <Picker 
            style={{ flex:.2 }}
            itemStyle = {{ color : 'white' }}
            selectedValue = {this.props.pushNotificationTime.highPart} 
            onValueChange = {(value) => this.props.setPushNotificationTime(this.props.pushNotificationTime.lowPart, value)}
          >
            { this.renderPickerNumbers(60) }
          </Picker>
        </View>
      </View>
    )
  }
}