import React, {useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import ring from '~/assets/images/anel.svg';

import {
  BackgroundImg,
  Container,
  TextBio,
  TextHome,
  TextLogout,
  UserName,
  Wrap,
} from './styles';

import {signOut} from '~/store/modules/auth/actions';
import {useTranslation} from 'react-i18next';
import api from '~/services/api';
import UserImage from './UserImage';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const [bio, setBio] = useState('');
  const [urlPic, setUrlPic] = useState('');
  const [username, setUsername] = useState('');
  const {t} = useTranslation('Home');
  const user_id = useSelector(state => state.auth.id);

  function handleLogout() {
    Alert.alert('Atenção !', 'Você deseja sair do App ?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {text: 'Sim', onPress: () => dispatch(signOut())},
    ]);
  }

  const getInfo = useCallback(async () => {
    console.log(user_id);
    const {data} = await api.get(`/user/${user_id}`);
    setUrlPic(data.profile_picture);
    setUsername(data.first_name + ' ' + data.last_name);
    setBio(data.bio);
  }, [user_id]);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  return (
    <Wrap>
      <TextHome>bem vindo,</TextHome>
      <UserName>{username}</UserName>
      <Container>
        <BackgroundImg source={ring} resizeMode="cover">
          <UserImage url={urlPic} />
          <TextBio>{bio}</TextBio>
          <TextLogout onPress={() => handleLogout()}>{t('signOut')}</TextLogout>
        </BackgroundImg>
      </Container>
    </Wrap>
  );
}

Home.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
