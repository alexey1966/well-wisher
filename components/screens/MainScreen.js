import React from 'react';
import WishComponent from '../../containers/components/WishComponent'
import MenuComponent from '../../containers/components/MenuComponent'
import MainViewComponent from '../../components/helpers/MainViewComponent'

export default class MainScreen extends MainViewComponent {
  renderCenterView() {
    return (
      <WishComponent ref={component => { this.wishComponent = component }} />
    );
  }

  renderBottomView() {
    return (
      <MenuComponent 
        navigation={this.props.navigation} 
        slideWish={(value) => this.wishComponent.getWrappedInstance().slideWish(value)} 
      />
    );
  }
}