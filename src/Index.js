import React, { Component } from 'react';
import LaFmScreen from './screens/LaFmScreen';

export default class Index extends Component {
  render() {
    return <LaFmScreen navigation={this.props.navigation} />;
  }
}
