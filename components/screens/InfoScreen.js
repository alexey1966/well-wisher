import React from 'react';
import AskGenderComponent from '../../components/components/AskGenderComponent'
import AskNameComponent from '../../components/components/AskNameComponent'
import MainViewComponent from '../../components/helpers/MainViewComponent'
import { View } from 'react-native'
import styles from '../../styles';
import { resetNotifications } from '../../bl/notifications-logic'

export default class InfoScreen extends MainViewComponent {
  constructor(props) {
    super(props);

    this.state = {
      isNameProvided: false
    };
  }

  onGenderPress(isFemale) {
    this.props.setGender(isFemale);
    if (this.props.isPushNotificationsEnabled) {
      let { categoryIds, name, isFemale, pushNotificationTime, infoProvidedDate } = this.props;
      resetNotifications(categoryIds, name, isFemale, pushNotificationTime, infoProvidedDate);
    }

    this.props.navigation.goBack();
  }

  renderNameView() {
    return (
      <AskNameComponent
        onComplete={() => setTimeout(() => this.setState({ isNameProvided : true }), 200)}
        setName={(name) => this.props.setName(name)}
        name={this.props.name}
      />
    )
  }

  renderGenderView() {
    return (
      <AskGenderComponent
        onComplete={(isFemale) => this.onGenderPress(isFemale)}
      />
    )
  }

  renderCenterView() {
    if (this.state.isNameProvided) {
      return this.renderGenderView();
    } else {
      return this.renderNameView();
    }
  }

  renderBottomView() {
    return (
      <View style={styles.askBottomView} />
    )
  }
}