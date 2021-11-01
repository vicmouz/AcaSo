import React, {useRef, useState} from 'react';
import {TouchableWithoutFeedback, Keyboard, Linking} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LogoImg from '~/components/LogoImg';

import {signInRequest} from '~/store/modules/auth/actions';
import gas from '~/assets/images/gas.png';

import {
  BackgroundImg,
  ButtonRegister,
  Container,
  Form,
  FormInput,
  RingContainer,
  RingImg,
  SubmitButton,
  TextRecover,
  TextRegister,
  TitlePage,
  Wrap,
} from './styles';
import NavigationService from '~/routes/navigation.service';

export default function SignIn({navigation}) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(userName, password));
  }

  function openRegister() {
    Linking.openURL('https://app.aca.so/cadastro');
  }

  function handleNavigate(page, params) {
    NavigationService.navigate(page, params);
  }

  return (
    <Wrap>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <BackgroundImg source={gas}>
          <Container>
            <RingContainer>
              <RingImg />
            </RingContainer>
            <LogoImg />
            <TitlePage>LOGIN</TitlePage>
            <Form>
              <FormInput
                label="E-mail"
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
                secureTextEntry
                placeholder="Digite a sua senha"
                ref={passwordRef}
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
                value={password}
                onChangeText={setPassword}
              />
            </Form>
            <TextRecover onPress={() => handleNavigate('RecoverPassword')}>
              Não sei minha senha
            </TextRecover>
            <SubmitButton loading={loading} onPress={handleSubmit} isSubmit>
              Próximo
            </SubmitButton>
            <TextRegister>Não possui uma conta?</TextRegister>
            <ButtonRegister onPress={openRegister}>
              Criar minha conta aca.so
            </ButtonRegister>
          </Container>
        </BackgroundImg>
      </TouchableWithoutFeedback>
    </Wrap>
  );
}
