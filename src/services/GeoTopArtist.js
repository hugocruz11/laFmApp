import LafmHttp from '../providers/LafmHttp';

const Url =
  'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=829751643419a7128b7ada50de590067&format=json';

const getTopArtist = () => {
  return LafmHttp.get(Url);
};

export default { getTopArtist };
