import React, {useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import {
  Container,
  RingContainer,
  RingImg,
  TextBio,
  TextHome,
  TextLogout,
  UserName,
  Wrap,
} from './styles';

import {refreshUserToken, signOut} from '~/store/modules/auth/actions';
import {useTranslation} from 'react-i18next';
import api from '~/services/api';
import UserImage from './UserImage';
import ModalCustom from '~/components/ModalCustom';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const [bio, setBio] = useState('');
  const [urlPic, setUrlPic] = useState('');
  const [modalExit, setModalExit] = useState(false);
  const [modalNewToken, setModalNewToken] = useState(false);
  const [username, setUsername] = useState(' ');
  const {t} = useTranslation('Home');
  const user_id = useSelector(state => state.auth.id);
  const refreshToken = useSelector(state => state.auth.refreshToken);
  const dateToken = useSelector(state => state.auth.dateToken);

  const getInfo = useCallback(async () => {
    try {
      const {data} = await api.get(`/user/${user_id}`);
      setUrlPic(data.profile_picture);
      setUsername(data.first_name + ' ' + data.last_name);
      setBio(data.bio);
    } catch (error) {
      if (error.response.status === 403) {
        refresh();
      }
    }
  }, [refresh, user_id]);

  const refresh = useCallback(async () => {
    const {data} = await api.post('/auth/refresh-token', {
      refresh_token: refreshToken,
    });
    api.defaults.headers.Authorization = `Bearer ${data.id_token}`;
    getInfo();
  }, [getInfo, refreshToken]);

  const checkToken = useCallback(async () => {
    const today = new Date();
    var timeDiff = Math.abs(dateToken.getTime() - today.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffDays >= 30) {
      setModalNewToken(true);
    }
  }, [dateToken]);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  function handleLogout() {
    console.log('opa');
    dispatch(signOut());
  }

  return (
    <Wrap>
      <ModalCustom
        show={modalExit}
        setShow={setModalExit}
        titleText="Atenção"
        infoText={'Você será deslogado em:'}
        isLogoutModal
        completeCountdown={() => handleLogout()}
        textErrorButtom="Desfazer"
        onAction={() => {
          setModalExit(false);
        }}
      />

      <ModalCustom
        show={modalExit}
        setShow={setModalExit}
        titleText="Atenção"
        infoText={'Seu token expirou. Por favor, realize o login novamente'}
        textErrorButtom="Certo"
        onAction={() => {
          setModalNewToken(false);
          handleLogout();
        }}
      />

      <RingContainer>
        <RingImg />
      </RingContainer>
      <TextHome>bem vindo,</TextHome>
      <UserName>{username}</UserName>
      <Container>
        <UserImage url={urlPic} />
        <TextBio>{bio}</TextBio>
        <TextLogout
          onPress={() => {
            setModalExit(true);
            handleLogout();
          }}>
          Sair do aca.so
        </TextLogout>
      </Container>
    </Wrap>
  );
}

Home.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
