import { connect } from 'react-redux'
import { setGender, setName } from '../../modules/info-module'
import InfoScreen from '../../components/screens/InfoScreen'

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
    setName: (name) => {
      dispatch(setName(name))
    },
    setGender: (isFemale) => {
      dispatch(setGender(isFemale))
    }
  }
}

const InfoScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoScreen)

export default InfoScreenContainer