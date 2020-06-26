import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'native-base';
import { CardItemButtonComponent } from '../components';
import { ArtistService, TracksService } from '../services';
import { CacheProvider } from '../providers';

export default class LaFmScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      tracks: [],
    };
    this.goTopArtist = this.goTopArtist.bind(this);
    this.getArtist = this.getArtist.bind(this);
    this.goTopTracks = this.goTopTracks.bind(this);
    this.getTopTracks = this.getTopTracks.bind(this);
  }

  componentDidMount() {
    this.getArtist();
    this.getTopTracks();
  }

  render() {
    return (
      <View style={{ backgroundColor: '#f1f4f9', height: '100%' }}>
        <Header style={{ backgroundColor: '#00aaff' }} />
        <CardItemButtonComponent
          title='Top Artistas'
          onPress={this.goTopArtist}
        />
        <CardItemButtonComponent
          title='Top Canciones'
          onPress={this.goTopTracks}
        />
      </View>
    );
  }

  getArtist() {
    ArtistService.getTopArtist()
      .then((response) => {
        let artist = response.topartists.artist.map((artist) => ({
          name: artist.name,
          listeners: artist.listeners,
          url: artist.url,
          image: artist.image[3]['#text'],
        }));
        CacheProvider.setItem('artist', artist);
        this.setState({ artists: artist });
      })
      .catch(async (error) => {
        let artist = await CacheProvider.getItem('artist');
        this.setState({ artists: artist });
      });
  }

  getTopTracks() {
    TracksService.getTopTracks()
      .then((response) => {
        let tracks = response.tracks.track.map((track) => ({
          name: track.name,
          image: track.image[3]['#text'],
          url: track.url,
          listeners: track.listeners,
        }));
        CacheProvider.setItem('tracks', tracks);
        this.setState({ tracks: tracks });
      })
      .catch(async (error) => {
        let tracks = await CacheProvider.getItem('tracks');
        this.setState({ tracks: tracks });
      });
  }

  goTopArtist() {
    this.props.navigation.navigate('ListArtistScreen', {
      artists: this.state.artists,
    });
  }
  goTopTracks() {
    this.props.navigation.navigate('ListTracksScreen', {
      tracks: this.state.tracks,
    });
  }
}
