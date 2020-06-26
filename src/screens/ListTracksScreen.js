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
        <HeaderComponent
          title='Listado de canciones'
          nameIcon='arrow-back'
          onPress={this.goBack}
        />
        <FlatListComponent source={this.state.tracks} />
      </Container>
    );
  }

  goBack() {
    this.props.navigation.goBack();
  }
}
