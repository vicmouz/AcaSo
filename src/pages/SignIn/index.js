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
import {useFormik} from 'formik';
import formValidator from './formValidator';

export default function SignIn({navigation}) {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const wrongPass = useSelector(state => state.auth.wrongPass);
  const formik = useFormik({
    initialValues: {email: '', password: ''},
    validationSchema: formValidator,
    onSubmit: async values => {
      dispatch(signInRequest(values.email, values.password));
    },
  });

  const loading = useSelector(state => state.auth.loading);

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
                value={formik.values.email}
                onChangeText={formik.handleChange('email')}
                errors={formik.errors.email}
                error={!!formik.errors.email && formik.touched.email}
                errorText={formik.errors.email}
              />
              <FormInput
                label="Senha"
                iconVisible
                secureTextEntry
                placeholder="Digite a sua senha"
                ref={passwordRef}
                returnKeyType="send"
                onSubmitEditing={formik.handleSubmit}
                value={formik.values.password}
                onChangeText={formik.handleChange('password')}
                errors={formik.errors.password}
                error={!!formik.errors.password && formik.touched.password}
                errorText={formik.errors.password}
                wrongPass={wrongPass}
              />
            </Form>
            <TextRecover onPress={() => handleNavigate('RecoverPassword')}>
              Não sei minha senha
            </TextRecover>
            <SubmitButton
              loading={loading}
              onPress={formik.handleSubmit}
              isSubmit>
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
