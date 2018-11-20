import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { fadeFromInToOut } from '../../services/transition-helpers'
import AppTitleComponent from '../../components/helpers/AppTitleComponent'

import AskNameScreen from '../../containers/screens/AskNameScreen'
import AskGenderScreen from '../../containers/screens/AskGenderScreen'
import AskNotificationScreen from '../../containers/screens/AskNotificationScreen'
import MainNavigator from '../../components/navigators/MainNavigator'

import styles from '../../styles'

const AskInfoNavigator = createStackNavigator(
  {
    'AskName' : AskNameScreen,
    'AskGender' : AskGenderScreen,
    'AskNotification' : AskNotificationScreen,
    'MainNavigator' : MainNavigator
  },
  {
    initialRouteName: 'AskName',
    transitionConfig: () => ({
      screenInterpolator: (props) => {
        return fadeFromInToOut(props)
      },
      containerStyle: {
        backgroundColor: 'transparent'
      },
      transitionSpec: {
        duration: 200
      }
    }),

    mode: 'modal',
    headerMode : 'float',
    cardStyle: { backgroundColor: 'transparent' },
    navigationOptions : ({ navigation }) => { 
      return { 
        headerTitle: <AppTitleComponent />, 
        headerTransparent: true, 
        headerStyle: styles.headerView,
        headerLeft: null
      }
    } 
  }
);

export default AskInfoNavigator