import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { fromBottonToTop } from '../../services/transition-helpers'
import AppTitleComponent from '../../components/helpers/AppTitleComponent'
import InfoScreen from '../../containers/screens/InfoScreen'
import CategoriesScreen from '../../containers/screens/CategoriesScreen'
import MainScreen from '../../containers/screens/MainScreen'
import LikesScreen from '../../containers/screens/LikesScreen'
import NotificationScreen from '../../containers/screens/NotificationScreen'
import SettingsScreen from '../../components/screens/SettingsScreen'
import VersionScreen from '../../components/screens/VersionScreen'
import styles from '../../styles'

const MainNavigator = createStackNavigator(
  {
    'Main' : MainScreen,
    'Likes' : LikesScreen,
    'Settings' : SettingsScreen,
    'Info' : InfoScreen,
    'Version' : VersionScreen,
    'Notification' : NotificationScreen,
    'Categories' : CategoriesScreen
  },
  {
    initialRouteName: 'Main',
    transitionConfig: () => ({
      screenInterpolator: (props) => {
          return fromBottonToTop(props)
      },
      containerStyle: {
        backgroundColor: 'transparent',
      },
      transitionSpec: {
        duration: 400,
      },
    }),

    mode: 'modal',
    headerMode : 'float',
    cardStyle: { backgroundColor: 'transparent' },
    navigationOptions : ({navigation}) => { 
      return { 
        headerTitle: <AppTitleComponent />, 
        headerTransparent: true, 
        headerStyle: styles.headerView,
        headerLeft: null
      }
    } 
  }
);

export default MainNavigator