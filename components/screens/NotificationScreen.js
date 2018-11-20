import React from 'react';
import I18n from 'react-native-i18n';
import { BlurView } from 'expo';
import { Image, Switch, Text, TouchableOpacity, View } from 'react-native';
import styles, { blurParameters } from '../../styles'
import { icons } from '../../constants'
import MainViewComponent from '../../components/helpers/MainViewComponent'
import TimePickerComponent from '../../components/helpers/TimePickerComponent'
import { askNotificationPermission, cancelNotifications, resetNotifications } from '../../bl/notifications-logic'

export default class NotificationScreen extends MainViewComponent {
  constructor(props) {
    super(props);

    this.state = {
      notificationGranted : true
    };
  }

  componentDidMount() {
    askNotificationPermission().then((isGranted) => {
      this.setState({
        notificationGranted : isGranted
      });
    });
  }
  
  onPushNotificationsEnabledChange() {
    let { isPushNotificationsEnabled, enablePushNotifications, disablePushNotifications } = this.props;
    isPushNotificationsEnabled ? disablePushNotifications() : enablePushNotifications();
  }

  onComplete() {
    let { categoryIds, name, isFemale, isPushNotificationsEnabled, navigation, pushNotificationTime, infoProvidedDate } = this.props;

    if (isPushNotificationsEnabled) {
      resetNotifications(categoryIds, name, isFemale, pushNotificationTime, infoProvidedDate);
    } else {
      cancelNotifications();
    }

    navigation.goBack();
  }

  renderHeader() {
    if (this.state.notificationGranted) {
      return (
        <View style={styles.notificationEnabledView}>
          <Text style={styles.titleText}>{I18n.t('titleText.notificationTurnOn')}</Text>
          <Switch 
            style={{ marginLeft : 10 }}
            onValueChange = {() => this.onPushNotificationsEnabledChange()}
            value = {this.props.isPushNotificationsEnabled}/>
          />
        </View>
      );
    } else {
      return (
        <View>
          <Text style={styles.notificationText}>{I18n.t('titleText.askNotificationTurnOn')}</Text>
          <Text style={styles.notificationText}>{I18n.t('titleText.notificationSettingPath')}</Text>
        </View>
      );
    }
  }

  renderCenterView() {
    return (
      <BlurView tint={blurParameters.view.tint} intensity={blurParameters.view.intensity} style={styles.focusView}>    
        <View style={{ alignItems : 'center' }}>
          { this.renderHeader() }
          <View style={styles.separator} />
          <TimePickerComponent
            pushNotificationTime={this.props.pushNotificationTime}
            setPushNotificationTime={(low, high) => this.props.setPushNotificationTime(low, high)}
          />
          <View style={styles.separator} />
          <Text style={styles.notificationText}>{I18n.t('applicationInfo.notificationInfo')}</Text>
          <TouchableOpacity onPress={() => this.onComplete()}>
            <Image 
              style={styles.downIcon}
              source={icons.DOWN}
            />
          </TouchableOpacity>
        </View>
      </BlurView>
    );
  }
}