import { connect } from 'react-redux'
import { setGender } from '../../modules/info-module'
import AskGenderScreen from '../../components/screens/AskGenderScreen'

const mapDispatchToProps = (dispatch) => {
  return {
    setGender: (isFemale) => {
      dispatch(setGender(isFemale))
    }
  }
}

const AskGenderScreenContainer = connect(
  null,
  mapDispatchToProps
)(AskGenderScreen)

export default AskGenderScreenContainer