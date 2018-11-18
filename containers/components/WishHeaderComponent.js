import { connect } from 'react-redux'
import { dislikeWish, likeWish } from '../../modules/wish-module'
import WishHeaderComponent from '../../components/components/WishHeaderComponent'
import { icons } from '../../constants'

const mapStateToProps = (state) => {
  return { 
    likeIcon: state.wish.likedWishIds.includes(state.wish.wishId) ? icons.LIKE : icons.WHITE_LIKE,
    likedWishIds: state.wish.likedWishIds,
    wishId: state.wish.wishId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    likeWish: (wishId, likedWishIds) => {
      dispatch(likeWish(wishId, likedWishIds))
    },
    dislikeWish: (wishId, likedWishIds) => {
      dispatch(dislikeWish(wishId, likedWishIds))
    }
  }
}

const WishHeaderComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WishHeaderComponent)

export default WishHeaderComponentContainer