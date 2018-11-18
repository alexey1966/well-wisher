import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { icons } from '../../constants'
import styles from '../../styles'
import categories from '../../structs/categories'
import ListComponent from '../../components/helpers/ListComponent'
import { resetNotifications } from '../../bl/notifications-logic'

export default class CategoriesScreen extends React.Component {
  handlePress(category) {
    {
      let { categoryIds, disableCategory, enableCategory } = this.props;
      categoryIds.includes(category.id) ? disableCategory(category.id, categoryIds) : enableCategory(category.id, categoryIds);
    }

    if (this.props.isPushNotificationsEnabled) {
      let { categoryIds, name, isFemale, pushNotificationTime, infoProvidedDate } = this.props;
      resetNotifications(categoryIds, name, isFemale, pushNotificationTime, infoProvidedDate);
    }
  }

  renderCheckbox(category) {
    if (this.props.categoryIds.includes(category.id)) {
      return (  
        <TouchableOpacity onPress={() => this.props.disableCategory(category.id, this.props.categoryIds)}>
          <Image 
            style={styles.categoriesCheckImage}
            source={icons.CHECK} 
          />
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity onPress={() => this.props.enableCategory(category.id, this.props.categoryIds)}>
          <View style={styles.categoriesCheckImage} />
        </TouchableOpacity>
      )
    }
  }

  renderElement(item) {
    return (
      <View style={styles.listContainer}>
        <TouchableOpacity onPress={() => this.handlePress(item)}>
          <Image 
            source={item.icon} 
            style={styles.categoriesIcon} 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handlePress(item)}>
          <Text style={styles.categoriesTitle}>{item.title}</Text>
          <Text style={styles.categoriesSubtitle}>{item.subtitle}</Text>
        </TouchableOpacity>
        { this.renderCheckbox(item) }
      </View>
    )
  }

  render() {
    return (
      <ListComponent 
        renderElement={(item) => this.renderElement(item)}  
        elements={categories}
        navigation={this.props.navigation}
        extraData={this.props.categoryIds}
      />
    );
  }
}