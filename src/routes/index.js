import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SignIn from '~/pages/SignIn';
import Home from '~/pages/Home';

export default (isSigned = false) =>
  createAppContainer(
    createStackNavigator(
      {
        Sign: createStackNavigator(
          {
            SignIn,
          },
          {
            headerMode: 'none',
          },
        ),
        App: Home,
      },
      {
        headerMode: 'none',
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );
