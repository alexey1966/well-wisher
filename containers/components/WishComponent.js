import { connect } from 'react-redux'
import { backwardWish, dislikeWish, forwardWish, likeWish } from '../../modules/wish-module'
import WishComponent from '../../components/components/WishComponent'
import { icons } from '../../constants'
import wishes from '../../structs/wishes'

const mapStateToProps = (state) => {
  return {
    wish: wishes.find(w => w.id === state.wish.wishId),
    likedWishIds: state.wish.likedWishIds,
    wishId: state.wish.wishId,
    name: state.info.name,
    categoryIds: state.configuration.categoryIds,
    isFemale: state.info.isFemale,
    likeIcon: state.wish.likedWishIds.includes(state.wish.wishId) ? icons.LIKE : icons.WHITE_LIKE
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    likeWish: (wishId, likedWishIds) => {
      dispatch(likeWish(wishId, likedWishIds))
    },
    dislikeWish: (wishId, likedWishIds) => {
      dispatch(dislikeWish(wishId, likedWishIds))
    },
    forwardWish: (wishId, categoryIds) => {
      dispatch(forwardWish(wishId, categoryIds))
    },
    backwardWish: (wishId, categoryIds) => {
      dispatch(backwardWish(wishId, categoryIds))
    }
  }
}

const WishComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { 
    withRef: true 
  }
)(WishComponent)

export default WishComponentContainer