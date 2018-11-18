import { connect } from 'react-redux'
import { disablePushNotifications, enablePushNotifications, setPushNotificationTime } from '../../modules/configuration-module'
import NotificationComponent from '../../components/components/NotificationComponent'

const mapStateToProps = (state) => {
  return {
    isPushNotificationsEnabled: state.configuration.isPushNotificationsEnabled,
    pushNotificationTime: state.configuration.pushNotificationTime
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

const NotificationComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationComponent)

export default NotificationComponentContainer