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
  const [timeLogout, setTimeLogout] = useState(5);
  const [modalExit, setModalExit] = useState(false);
  const [username, setUsername] = useState(' ');
  const {t} = useTranslation('Home');
  const user_id = useSelector(state => state.auth.id);
  const refreshToken = useSelector(state => state.auth.refreshToken);

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
  useEffect(() => {
    getInfo();
  }, [getInfo]);

  function handleLogout() {
    console.log('opa');
    // setModalExit(false);
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
