import { connect } from 'react-redux'
import { enableCategory, disableCategory } from '../../modules/configuration-module'
import CategoriesScreen from '../../components/screens/CategoriesScreen'

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
    enableCategory: (categoryId, categoryIds) => {
      dispatch(enableCategory(categoryId, categoryIds))
    },
    disableCategory: (categoryId, categoryIds) => {
      dispatch(disableCategory(categoryId, categoryIds))
    }
  }
}

const CategoriesScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesScreen)

export default CategoriesScreenContainer