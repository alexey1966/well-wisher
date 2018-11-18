import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { BlurView } from 'expo';
import styles, { blurParameters } from '../../styles'

export default class WishHeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime : new Date()
    }
  } 

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime : new Date()
      })
    }, 1000);
  }

  getFormattedTimeOctet(number) {
    if (number < 10) {
      return '0' + number;
    }

    return number;
  }

  getFormattedTime() {
    return this.getFormattedTimeOctet(this.state.currentTime.getHours()) + ':' + this.getFormattedTimeOctet(this.state.currentTime.getMinutes());
  }

  setLike() {
    let { likedWishIds, wishId, dislikeWish, likeWish } = this.props;
    if (likedWishIds.includes(wishId)) {
      dislikeWish(wishId, likedWishIds);
    } else {
      likeWish(wishId, likedWishIds);
    }
  }

  render() {
    return (   
      <BlurView tint={blurParameters.view.tint} intensity={blurParameters.view.intensity} style={styles.focusView}>
        <View style={styles.wishTitle}>
          <Text style={styles.wishTitleText}>{this.getFormattedTime()}</Text>
          <TouchableOpacity onPress={() => this.setLike()} >
            <Image 
              source={this.props.likeIcon} 
              style={styles.wishTitleIcon} 
            />
          </TouchableOpacity>
        </View>
        {this.props.children}
      </BlurView>
    );
  }
}