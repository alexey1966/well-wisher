import { connect } from 'react-redux'
import { setName } from '../../modules/info-module'
import AskNameScreen from '../../components/screens/AskNameScreen'

const mapStateToProps = (state) => {
  return {
    name: state.info.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name))
    }
  }
}

const AskNameScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AskNameScreen)

export default AskNameScreenContainer