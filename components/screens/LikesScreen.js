import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles'
import { icons } from '../../constants'
import ListComponent from '../../components/helpers/ListComponent'

export default class LikesScreen extends React.Component {
  renderElement(item) {
    return (
      <View style={styles.listContainer}>
        <TouchableOpacity onPress={() => this.props.dislikeWish(item.id, this.props.likedWishes.map(wish => wish.id))} >
          <Image source={icons.LIKE} 
            style={styles.likesIcon} 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.props.setWish(item.id); this.props.navigation.goBack(); }}>
          <Text style={styles.likesText}>{item.getText(this.props.name, this.props.isFemale)}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderEmptyElements() {
    return (
      <Image 
        style={styles.emptyLikeIcon}
        source={icons.EMPTY_LIKE}
      />
    )
  }

  render() {
    return (
      <ListComponent 
        renderEmptyElements={() => this.renderEmptyElements()} 
        renderElement={(item) => this.renderElement(item)}  
        elements={this.props.likedWishes}
        navigation={this.props.navigation}
      />
    );
  }
}