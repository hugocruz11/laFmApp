import React, { Component } from 'react';
import { HeaderComponent } from '../components';
import { Container, Content } from 'native-base';
import { FlatListComponent } from '../components';

export default class ListArtistScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: this.props.navigation.getParam('artists', null),
    };
    this.goBack = this.goBack.bind(this);
  }
  render() {
    return (
      <Container>
        <FlatListComponent source={this.state.artist} onPress={this.goBack} />
      </Container>
    );
  }

  goBack() {
    this.props.navigation.goBack();
  }
}
