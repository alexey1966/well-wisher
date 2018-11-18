import { Dimensions, StyleSheet } from 'react-native';
import { Constants } from 'expo'

export const blurParameters = {
  view: {
    tint: 'default',
    intensity: 50
  },
  button: {
    tint: 'default',
    intensity: 75
  }
}

const borderView = {
  borderWidth: 0,
  borderRadius: 10
}

const commonParameters = {
  marginBottom : 10,
  headerOffset : Dimensions.get('window').height < 896 ? 65 : 115,
  componentWidth: Dimensions.get('window').width < 375 ? 300 : (Dimensions.get('window').width < 414 ? 330 : 360)
}

const commonViewStyle = {
  width: commonParameters.componentWidth,
  margin: (Dimensions.get('window').width - commonParameters.componentWidth) / 2,
  ...borderView
}

const commonTextStyle = {
  fontSize: 20,
  color: 'rgba(255,255,255, 1)'
}

const styles = StyleSheet.create({
  appIcon: {
    width: 25,
    height: 25
  },
  appLargeIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    marginTop: 20
  },
  appTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  askBottomView: {
    padding : 40
  },
  askInfoText: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  askInfoTitleText: {
    ...commonTextStyle,
    textAlign: 'center'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  backgroundView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  categoriesCheckImage: {
    width: 25,
    height: 25
  },
  categoriesIcon: {
    width: 50,
    height: 50
  },
  categoriesSubtitle: {
    color: 'white',
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    width: 190
  },
  categoriesTitle: {
    ...commonTextStyle,
    marginLeft: 10,
    marginRight: 10,
    width: 190
  },
  downIcon: {
    width: 50,
    height: 50,
    margin: 10
  },
  emptyLikeIcon: {
    width: 100,
    height: 100,
    opacity: 0.5
  },
  focusView: {
    ...commonViewStyle,
    padding: 10
  },
  genderIcon: {
    width: 120,
    height: 120
  },
  genderIconView: {
    ...borderView,
    margin: 10
  },
  genderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerOffset: {
    height: commonParameters.headerOffset
  },
  headerView: {
    height: 70
  },
  likesIcon: {
    width: 25,
    height: 25
  },
  likesText: {
    color: 'white',
    fontSize: 17,
    marginLeft: 10,
    width: 250
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  listContentContainer: {
    margin: 20
  },
  listSeparator: {
    height: 1,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10
  },
  listView: {
    ...commonViewStyle,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom : commonParameters.headerOffset + commonParameters.marginBottom
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  menuIcon: {
    width: 50,
    height: 50
  },
  menuView: {
    ...commonViewStyle,
    marginBottom: commonParameters.marginBottom,
    padding: 10
  },
  notificationEnabledView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  notificationText: {
    color: 'white', 
    fontSize: 17, 
    textAlign: 'center'
  },
  readyButtonView: {
    ...borderView,
    margin: 10,
    width: '100%'
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10
  },
  settingsIcon: {
    width: 50,
    height: 50
  },
  settingsSubtitle: {
    color: 'white',
    fontSize: 15,
    marginLeft: 10,
    width: 220
  },
  settingsTitle: {
    ...commonTextStyle,
    marginLeft: 10,
    width: 220
  },
  textInputView: {
    ...borderView,
    margin: 10
  },
  titleText: {
    ...commonTextStyle,
    textAlign: 'center'
  },
  versionLargeText: {
    fontSize: 25,
    color: 'rgba(255,255,255, 1)'
  },
  versionText: {
    fontSize: 20,
    color: 'rgba(255,255,255, 1)',
    textAlign: 'center'
  },
  wishText: {
    ...commonTextStyle,
    textAlign: 'left'
  },
  wishTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  wishTitleIcon: {
    width: 25,
    height: 25
  },
  wishTitleText: {
    color: 'white'
  }
});

export default styles;