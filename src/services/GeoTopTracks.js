import LafmHttp from '../providers/LafmHttp';

const Url =
  'http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=829751643419a7128b7ada50de590067&format=json';

const getTopTracks = () => {
  return LafmHttp.get(Url);
};

export default { getTopTracks };
