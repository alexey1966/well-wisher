import React from 'react';
import { Animated, Text } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import WishHeaderComponent from '../../containers/components/WishHeaderComponent'
import styles from '../../styles'

export default class WishComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: new Animated.Value(0)
    }

    this.gestureConfig = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    this.animatedStyle = {
      transform: [{ translateX: this.state.x }]
    };
  }

  slideWish (slideLeft) {
    let { wishId, categoryIds, forwardWish, backwardWish } = this.props;

    const duration = 400;
    const firstValue = slideLeft ? -400 : 400;
    const lastValue = slideLeft ? 400 : -400;
    const useNativeDriver = true;

    const animations = [
      Animated.timing(this.state.x, { toValue: firstValue, duration, useNativeDriver }), 
      Animated.timing(this.state.x, { toValue: lastValue, duration: 0, useNativeDriver }), 
      Animated.timing(this.state.x, { toValue: 0, duration, useNativeDriver })
    ];

    setTimeout(() => { slideLeft ? forwardWish(wishId, categoryIds) : backwardWish(wishId, categoryIds) }, duration);
    Animated.sequence(animations).start();
  }

  render() {
    return ( 
      <Animated.View style={this.animatedStyle}>
        <WishHeaderComponent>
          <GestureRecognizer
            config={this.gestureConfig}
            onSwipeLeft={(state) => this.slideWish(true)}
            onSwipeRight={(state) => this.slideWish(false)}
          >
            <Text style={styles.wishText}>{this.props.wish.getText(this.props.name, this.props.isFemale)}</Text>
          </GestureRecognizer>
        </WishHeaderComponent>
      </Animated.View>
    );
  }
}