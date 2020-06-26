import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title,
} from 'native-base';
import PropTypes from 'prop-types';

export default class HeaderComponent extends Component {
  static PropTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    nameIcon: PropTypes.string,
  };
  render() {
    let { title, nameIcon, onPress } = this.props;
    return (
      <Header style={{ backgroundColor: '#00aaff' }}>
        <Left style={{ marginLeft: 10 }}>
          <Icon
            style={{ color: '#ffffff' }}
            fontSize={20}
            name={nameIcon}
            onPress={onPress}
          />
        </Left>
        <Body>
          <Title style={{ fontSize: 20 }}>{title}</Title>
        </Body>
      </Header>
    );
  }
}
