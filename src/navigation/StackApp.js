import { createStackNavigator } from 'react-navigation';

import Index from '../Index';
import { ListArtistScreen, ListTracksScreen } from '../screens';

const StackApp = createStackNavigator(
  {
    Index: Index,
    ListArtistScreen,
    ListTracksScreen,
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',
  }
);

export default StackApp;
