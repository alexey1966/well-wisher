import { connect } from 'react-redux'
import { disablePushNotifications, enablePushNotifications, setPushNotificationTime } from '../../modules/configuration-module'
import NotificationScreen from '../../components/screens/NotificationScreen'

const mapStateToProps = (state) => {
  return {
    isPushNotificationsEnabled: state.configuration.isPushNotificationsEnabled,
    pushNotificationTime: state.configuration.pushNotificationTime,
    name: state.info.name,
    isFemale: state.info.isFemale,
    categoryIds: state.configuration.categoryIds,
    infoProvidedDate: state.info.infoProvidedDate
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    enablePushNotifications: () => {
      dispatch(enablePushNotifications())
    },
    disablePushNotifications: () => {
      dispatch(disablePushNotifications())
    },
    setPushNotificationTime: (lowPart, highPart) => {
      dispatch(setPushNotificationTime(lowPart, highPart))
    }
  }
}

const NotificationScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationScreen)

export default NotificationScreenContainer