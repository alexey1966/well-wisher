import { connect } from 'react-redux'
import { disablePushNotifications, enablePushNotifications, setPushNotificationTime } from '../../modules/configuration-module'
import { setPersonalInfoProvided } from '../../modules/info-module'
import AskNotificationScreen from '../../components/screens/AskNotificationScreen'

const mapStateToProps = (state) => {
  return {
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
    },
    setPersonalInfoProvided: () => {
      dispatch(setPersonalInfoProvided())
    }
  }
}

const AskNotificationScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AskNotificationScreen)

export default AskNotificationScreenContainer