import { connect } from 'react-redux'
import MenuComponent from '../../components/components/MenuComponent'
import { forwardWish } from '../../modules/wish-module'
import { disableBackgroundSound, enableBackgroundSound } from '../../modules/configuration-module'

const mapStateToProps = (state) => {
  return {
    wishId: state.wish.wishId,
    categoryIds: state.configuration.categoryIds,
    isBackgroundSoundEnabled: state.configuration.isBackgroundSoundEnabled
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    forwardWish: (wishId, categoryIds) => {
      dispatch(forwardWish(wishId, categoryIds))
    },
    enableBackgroundSound: () => {
      dispatch(enableBackgroundSound())
    },
    disableBackgroundSound: () => {
      dispatch(disableBackgroundSound())
    }
  }
}

const MenuComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuComponent)

export default MenuComponentContainer