import React from 'react';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles'
import { icons, information } from '../../constants'
import ListComponent from '../../components/helpers/ListComponent'

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
        title : 'Данные',
        subtitle : 'Введите свои персональные данные',
        onPress : () => this.props.navigation.navigate('Info')
      },
      {
        id : 1,
        icon : icons.TIME,
        title : 'Уведомления',
        subtitle : 'Время получения приятных уведомлений',
        onPress : () => this.props.navigation.navigate('Notification')
      },
      {
        id : 2,
        icon : icons.FEEDBACK,
        title : 'Оценить приложение',
        subtitle : 'Мы будем вам очень признательны',
        onPress : () => {}
      },
      {
        id : 3,
        icon : icons.MAIL,
        title : 'Написать автору',
        subtitle : 'Напишите ваши отзывы и предложения',
        onPress : () => Linking.openURL('mailto://' + information.authorMail)
      },
      {
        id : 4,
        icon : icons.VERSION,
        title : 'Информация',
        subtitle : 'Получите информацию о приложении ',
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