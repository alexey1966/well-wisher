import React from 'react';
import { Animated, View } from 'react-native';
import { backgroundImages } from '../../constants'
import styles from '../../styles'

export default class BackgroundComponent extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      opacity : new Animated.Value(0),
      images : {
        0 : props.backgroundImage,
        1 : props.backgroundImage
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.backgroundImage !== this.props.backgroundImage) {
      let isEmptyOpacity = this.state.opacity._value === 0;

      this.setState({
        ...this.state,
        images : {
          0 : isEmptyOpacity ? this.state.images[0] : this.props.backgroundImage,
          1 : isEmptyOpacity ? this.props.backgroundImage : this.state.images[1]
        }
      });

      Animated.timing(this.state.opacity, {
        toValue : isEmptyOpacity ? 1 : 0,
        duration : 400,
      }).start();
    }
  }
  
  render() {
      return ( 
        <View style={{flex : 1}}>
          <Animated.Image
            source={this.state.images[0]} 
            style={styles.backgroundImage}>
          </Animated.Image>
          <Animated.Image
            source={this.state.images[1]} 
            style={[styles.backgroundImage, { opacity : this.state.opacity }]}>
        </Animated.Image>
          <View style={{flex:1}}>
              { this.props.children }
          </View>
        </View>
        )
    }
}