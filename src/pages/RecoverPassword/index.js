import React, {useRef, useState} from 'react';
import {TouchableWithoutFeedback, Keyboard, Linking} from 'react-native';
import {useSelector} from 'react-redux';
import LogoImg from '~/components/LogoImg';
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
  TextInfo,
  TextRecover,
  TitlePage,
  Wrap,
} from './styles';
import {useFormik} from 'formik';
import api from '~/services/api';
import formValidator from './formValidator';

export default function RecoverPassword({navigation}) {
  const passwordRef = useRef();

  const [userName, setUserName] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {}

  function openRegister() {
    Linking.openURL('https://app.aca.so/cadastro');
  }

  const formik = useFormik({
    initialValues: {email: ''},
    validationSchema: formValidator,
    onSubmit: async values => {
      const {data} = await api.post('/auth/forgot-password', {
        email: values.email,
      });
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
            <TitlePage>RECUPERAR SENHA</TitlePage>
            <TextInfo>
              Informe seu e-mail para receber um código de verificação
              necessário para a troca de senha
            </TextInfo>
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
                value={formik.values.email}
                onChangeText={formik.handleChange('email')}
                errors={formik.errors.email}
                error={
                  !!formik.errors.email &&
                  !formik.values.email &&
                  formik.touched.email
                }
                errorText={formik.errors.email}
              />
            </Form>
            <SubmitButton
              loading={loading}
              onPress={() => formik.handleSubmit()}
              isSubmit>
              Enviar código
            </SubmitButton>
            <ButtonRegister onPress={openRegister}>
              Voltar ao login
            </ButtonRegister>
          </Container>
        </BackgroundImg>
      </TouchableWithoutFeedback>
    </Wrap>
  );
}
