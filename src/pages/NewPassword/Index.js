import React, {useRef, useState} from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';
import LogoImg from '~/components/LogoImg';

import gas from '~/assets/images/gas.png';

import {
  BackgroundImg,
  Container,
  Form,
  FormInput,
  RingContainer,
  RingImg,
  SubmitButton,
  TitlePage,
  Wrap,
} from '../RecoverPassword/styles';

import {useFormik} from 'formik';
import api from '~/services/api';

export default function NewPassword({navigation}) {
  const passwordRef = useRef();
  const password2Ref = useRef();
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    // dispatch(signInRequest(userName, password));
  }

  const formik = useFormik({
    initialValues: {password: '', confirmPassword: ''},
    onSubmit: async values => {
      try {
        setLoading(true);
        await api.post('/auth/confirm-forgot-password', {
          email: navigation.getParam('email'),
          confirmation_code: navigation.getParam('code'),
          proposed_password: values.confirmPassword,
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Wrap>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <BackgroundImg source={gas}>
          <Container>
            <RingContainer>
              <RingImg />
            </RingContainer>
            <LogoImg />
            <TitlePage>CRIAR SENHA</TitlePage>
            <Form>
              <FormInput
                label="Nova Senha"
                secureTextEntry
                placeholder="Digite a sua nova senha"
                ref={passwordRef}
                returnKeyType="next"
                onSubmitEditing={() => password2Ref.current.focus()}
                value={formik.values.password}
                onChangeText={formik.handleChange('password')}
              />
              <FormInput
                label="Confirme sua nova senha"
                secureTextEntry
                placeholder="Confirme a sua nova senha"
                ref={password2Ref}
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
                value={formik.values.confirmPassword}
                onChangeText={formik.handleChange('confirmPassword')}
              />
            </Form>
            <SubmitButton
              loading={loading}
              onPress={formik.handleSubmit}
              isSubmit>
              Confirmar
            </SubmitButton>
          </Container>
        </BackgroundImg>
      </TouchableWithoutFeedback>
    </Wrap>
  );
}
