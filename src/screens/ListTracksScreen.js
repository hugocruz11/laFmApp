import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { HeaderComponent } from '../components';
import { Container, Content } from 'native-base';
import { FlatListComponent } from '../components';

export default class ListTracksScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: this.props.navigation.getParam('tracks', null),
    };
    this.goBack = this.goBack.bind(this);
  }

  render() {
    return (
      <Container>
        <FlatListComponent source={this.state.tracks} onPress={this.goBack} />
      </Container>
    );
  }

  goBack() {
    this.props.navigation.goBack();
  }
}
