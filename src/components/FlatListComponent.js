import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={{ uri: item.image }} style={styles.imageStyle} />
      <View style={styles.viewStyle}>
        <Text style={{ fontWeight: 'bold', fontSize: 17 }} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={{ fontSize: 13 }}>Reproducciones {item.listeners}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(item.url);
        }}
        style={styles.touchableStyle}
      >
        <Text style={{ color: 'green' }}>Ver</Text>
      </TouchableOpacity>
    </View>
  );
}

export default class FlatListComponent extends Component {
  static propTypes = {
    source: PropTypes.array.isRequired,
  };

  render() {
    let { source } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={source}
          renderItem={({ item }) => <Item item={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  viewStyle: {
    alignItems: 'center',
    width: '70%',
    flex: 1,
  },
  imageStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  touchableStyle: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
});
