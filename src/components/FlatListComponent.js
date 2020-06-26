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
import { Container, Header, Input, Icon, Button, Item } from 'native-base';
import PropTypes from 'prop-types';

function Data({ item }) {
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
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.source,
      fulldata: this.props.source,
      onPress: this.props.onPress,
      query: '',
    };
  }
  static propTypes = {
    source: PropTypes.array.isRequired,
    onPress: PropTypes.func,
  };

  search = (txt) => {
    let text = txt.toLowerCase();
    let tracks = this.state.fulldata;
    let filterTracks = tracks.filter((item) => {
      if (item.name.toLowerCase().match(text)) {
        return item;
      }
    });
    this.setState({ data: filterTracks });
  };

  render() {
    let { data, onPress } = this.state;
    return (
      <Container>
        <Header searchBar rounded style={{ backgroundColor: '#00aaff' }}>
          <Item>
            <Icon name='arrow-back' onPress={onPress} />
            <Input placeholder='Search' onChangeText={this.search} />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <View style={styles.container}>
          <FlatList
            style={{ flex: 1 }}
            data={data}
            renderItem={({ item }) => <Data item={item} />}
          />
        </View>
      </Container>
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
