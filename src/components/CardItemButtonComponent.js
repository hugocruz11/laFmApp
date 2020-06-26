import React, { Component } from 'react';
import { Card, CardItem, Text } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class CardItemButtonComponent extends Component {
  static PropTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
  };
  render() {
    let { title, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.selectorTouch} onPress={onPress}>
        <Card style={styles.cardStyle}>
          <CardItem style={styles.cardItemStyle}>
            <Text style={{ fontSize: 30 }}>{title}</Text>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  selectorTouch: {
    height: '40%',
  },
  cardItemStyle: {
    justifyContent: 'center',
    height: '100%',
  },
});
