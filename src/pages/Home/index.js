import React from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import {Container, TextHome, ButtonLogout, TextLogout} from './styles';

import {signOut} from '~/store/modules/auth/actions';
import {useTranslation} from 'react-i18next';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const {t} = useTranslation('Home');

  function handleLogout() {
    Alert.alert('Atenção !', 'Você deseja sair do App ?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {text: 'Sim', onPress: () => dispatch(signOut())},
    ]);
  }

  return (
    <Container>
      <TextHome>Home</TextHome>
      <TextLogout onPress={() => handleLogout()}>{t('signOut')}</TextLogout>
    </Container>
  );
}

Home.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
