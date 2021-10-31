import React, {useRef, useState} from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LogoImg from '~/components/LogoImg';

import {signInRequest} from '~/store/modules/auth/actions';
import {TextLogout} from '../Home/styles';

import {
  ButtonRegister,
  Container,
  Form,
  FormInput,
  SubmitButton,
  TextRecover,
  TextRegister,
  TitlePage,
} from './styles';

export default function SingIn() {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(userName, password));
  }

  function openRegister() {
    // dispatch(signInRequest(userName, password));
    console.log('registro');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <LogoImg />
        <TitlePage>LOGIN</TitlePage>x
        <Form>
          <FormInput
            label="E-mail"
            icon="mail-outline"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite o seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={userName}
            onChangeText={setUserName}
          />
          <FormInput
            label="Senha"
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite a sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
        </Form>
        <TextRecover>Não sei minha senha</TextRecover>
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Próximo
        </SubmitButton>
        <TextRegister>Não possui uma conta?</TextRegister>
        <ButtonRegister onPress={openRegister}>
          Criar minha conta aca.so
        </ButtonRegister>
      </Container>
    </TouchableWithoutFeedback>
  );
}
