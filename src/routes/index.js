import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SignIn from '~/pages/SignIn';
import Home from '~/pages/Home';
import RecoverPassword from '~/pages/RecoverPassword';

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
        RecoverPassword,
      },
      {
        headerMode: 'none',
        initialRouteName: isSigned ? 'App' : 'RecoverPassword',
      },
    ),
  );
