import { connect } from 'react-redux'
import { setWish, dislikeWish } from '../../modules/wish-module'
import { getLikedWishes } from '../../bl/wishes-logic'
import LikesScreen from '../../components/screens/LikesScreen'

const mapStateToProps = (state) => {
  return {
    likedWishes: getLikedWishes(state.wish.likedWishIds, state.configuration.categoryIds),
    name: state.info.name,
    isFemale: state.info.isFemale
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dislikeWish: (wishId, likedWishIds) => {
      dispatch(dislikeWish(wishId, likedWishIds))
    },
    setWish: (wishId) => {
      dispatch(setWish(wishId))
    }
  }
}

const LikesScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LikesScreen)

export default LikesScreenContainer