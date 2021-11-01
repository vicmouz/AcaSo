import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SignIn from '~/pages/SignIn';
import Home from '~/pages/Home';
import RecoverPassword from '~/pages/RecoverPassword';
import ConfirmCode from '~/pages/ConfirmCode';
import NewPassword from '~/pages/NewPassword';

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
        ConfirmCode,
        NewPassword,
      },
      {
        headerMode: 'none',
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );
