import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { BlurView } from 'expo';
import styles, { blurParameters } from '../../styles'
import { icons } from '../../constants'
import MainViewComponent from '../../components/helpers/MainViewComponent'

export default class ListComponent extends MainViewComponent {
  renderSeparator() {
    return (
      <View 
        style={styles.listSeparator}
      />
    )
  }

  renderHeader() {
    if (this.props.elements.length > 0) {
      return null;
    } else {
      return <View />
    }
  }

  renderContent() {
    if (this.props.elements.length > 0) {
      return (
        <FlatList
          style={styles.listContentContainer}
          showsHorizontalScrollIndicator = {false}
          ItemSeparatorComponent={this.renderSeparator}
          horizontal={false}
          keyExtractor={(item, index) => item.id.toString()}
          data={this.props.elements}
          extraData={this.props.extraData}
          renderItem={({ item }) => this.props.renderElement(item)}
        />
      )
    }
    
    return this.props.renderEmptyElements();
  }

  renderCenterView() {
    return (
      <BlurView tint={blurParameters.view.tint} intensity={blurParameters.view.intensity} style={styles.listView}>
        { this.renderHeader() }
        { this.renderContent() }
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Image 
            style={styles.downIcon}
            source={icons.DOWN}
          />
        </TouchableOpacity>
      </BlurView>
    );
  }
}