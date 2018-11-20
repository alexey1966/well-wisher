import React from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles'
import { icons, information } from '../../constants'
import ListComponent from '../../components/helpers/ListComponent'
import I18n from 'react-native-i18n';

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      settings : this.getSettings()
    }
  }

  getSettings() {
    return [
      {
        id : 0,
        icon : icons.INFO,
        title : I18n.t('titleText.settings.info.title'),
        subtitle : I18n.t('titleText.settings.info.subtitle'),
        onPress : () => this.props.navigation.navigate('Info')
      },
      {
        id : 1,
        icon : icons.TIME,
        title : I18n.t('titleText.settings.notification.title'),
        subtitle : I18n.t('titleText.settings.notification.subtitle'),
        onPress : () => this.props.navigation.navigate('Notification')
      },
      {
        id : 2,
        icon : icons.FEEDBACK,
        title : I18n.t('titleText.settings.feedback.title'),
        subtitle : I18n.t('titleText.settings.feedback.subtitle'),
        onPress : () => {}
      },
      {
        id : 3,
        icon : icons.MAIL,
        title : I18n.t('titleText.settings.mail.title'),
        subtitle : I18n.t('titleText.settings.mail.subtitle'),
        onPress : () => Linking.openURL('mailto://' + information.authorMail)
      },
      {
        id : 4,
        icon : icons.VERSION,
        title : I18n.t('titleText.settings.app.title'),
        subtitle : I18n.t('titleText.settings.app.subtitle'),
        onPress : () => this.props.navigation.navigate('Version')
      }
    ];
  }

  renderElement(item) {
    return (
      <View style={styles.listContainer}>
        <TouchableOpacity onPress={() => item.onPress()} >
          <Image source={item.icon} 
            style={styles.settingsIcon} 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => item.onPress()}>
          <Text style={styles.settingsTitle}>{item.title}</Text>
          <Text style={styles.settingsSubtitle}>{item.subtitle}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <ListComponent 
        renderElement={(item) => this.renderElement(item)}  
        elements={this.state.settings}
        navigation={this.props.navigation}
      />
    );
  }
}