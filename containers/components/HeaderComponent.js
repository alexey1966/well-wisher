import { connect } from 'react-redux'
import HeaderComponent from '../../components/components/HeaderComponent'
import wishes from '../../structs/wishes'

const mapStateToProps = (state) => {
  return {
    wish: wishes.find(w => w.id === state.wish.wishId)
  }
}

const HeaderComponentContainer = connect(
  mapStateToProps,
  null
)(HeaderComponent)

export default HeaderComponentContainer