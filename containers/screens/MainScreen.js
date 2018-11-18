import { connect } from 'react-redux'
import MainScreen from '../../components/screens/MainScreen'

const mapStateToProps = (state) => {
  return {
    isPersonalInfoProvided: state.info.isPersonalInfoProvided,
    isBackgroundSoundEnabled: state.configuration.isBackgroundSoundEnabled
  }
}

const MainScreenContainer = connect(
  mapStateToProps,
  null
)(MainScreen)

export default MainScreenContainer