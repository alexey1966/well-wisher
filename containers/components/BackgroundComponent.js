import { connect } from 'react-redux'
import BackgroundComponent from '../../components/components/BackgroundComponent'

const mapStateToProps = (state) => {
  return {
    backgroundImage: state.wish.backgroundImage
  }
}

const BackgroundComponentContainer = connect(
  mapStateToProps,
  null
)(BackgroundComponent)

export default BackgroundComponentContainer