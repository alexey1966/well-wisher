import { Text, TouchableOpacity, View } from 'react-native';
import styles, { blurParameters } from '../../styles'
import { BlurView } from 'expo'
import { askNotificationPermission, scheduleNotifications } from '../../bl/notifications-logic'
import MainViewComponent from '../../components/helpers/MainViewComponent'
import TimePickerComponent from '../../components/helpers/TimePickerComponent'
import React from 'react';
import I18n from 'react-native-i18n';

export default class AskNotificationScreen extends MainViewComponent {
  onPress() {
    askNotificationPermission().then((isGranted) => {
      if (isGranted) {
        let { categoryIds, name, isFemale, pushNotificationTime, enablePushNotifications, infoProvidedDate } = this.props;
        scheduleNotifications(categoryIds, name, isFemale, pushNotificationTime, infoProvidedDate);
        enablePushNotifications();
      } else {
        this.props.disablePushNotifications();
      }

      this.props.setPersonalInfoProvided();
      this.props.navigation.navigate('MainNavigator');
    });
  }

  renderCenterView() {
    return (
      <BlurView 
        tint={blurParameters.view.tint} 
        intensity={blurParameters.view.intensity} 
        style={[styles.focusView, { alignItems : 'center' }]}
      >
        <Text style={styles.notificationText}>{I18n.t('applicationInfo.notificationInfo')}</Text>
        <View style={styles.separator} />
        <TimePickerComponent
          pushNotificationTime={this.props.pushNotificationTime}
          setPushNotificationTime={(low, high) => this.props.setPushNotificationTime(low, high)}
        />
        <View style={styles.separator} /> 
        <BlurView tint={blurParameters.view.tint} intensity={blurParameters.view.intensity} style={styles.readyButtonView}>
          <TouchableOpacity onPress={() => this.onPress()}>
            <Text style={styles.askInfoText}>{I18n.t('buttonText.done')}</Text>
          </TouchableOpacity>
        </BlurView>
      </BlurView>
    );
  }

  renderBottomView() {
    return (
      <View style={styles.askBottomView} />
    )
  }
}