import React, {useCallback, useRef, useState} from 'react';
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
import ModalCustom from '~/components/ModalCustom';

export default function NewPassword({navigation}) {
  const passwordRef = useRef();
  const password2Ref = useRef();
  const [loading, setLoading] = useState(false);
  const [modalConfirmationError, setModalConfirmationError] = useState(false);

  const newCode = useCallback(
    async email => {
      await api.post('/auth/forgot-password', {
        email: email,
      });
      navigation.navigate('ConfirmCode', {email: email});
    },
    [navigation],
  );

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
        setLoading(false);

        if (String(error.response.data.message).includes('confirmation')) {
          setModalConfirmationError(true);
        }
      }
    },
  });

  return (
    <Wrap>
      <ModalCustom
        show={modalConfirmationError}
        setShow={setModalConfirmationError}
        titleText="Código inválido"
        infoText="Um novo código foi enviado para o seu e-mail"
        textErrorButtom="Certo"
        onAction={() => {
          setModalConfirmationError(false);
          newCode(navigation.getParam('email'));
        }}
      />
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
                iconVisible
                secureTextEntry
                placeholder="Digite a sua nova senha"
                ref={passwordRef}
                returnKeyType="next"
                onSubmitEditing={() => password2Ref.current.focus()}
                value={formik.values.password}
                onChangeText={formik.handleChange('password')}
                errors={formik.errors.password}
                error={!!formik.errors.password && formik.touched.password}
                errorText={formik.errors.password}
              />
              <FormInput
                label="Confirme sua nova senha"
                iconVisible
                secureTextEntry
                placeholder="Confirme a sua nova senha"
                ref={password2Ref}
                returnKeyType="send"
                onSubmitEditing={formik.handleSubmit}
                value={formik.values.confirmPassword}
                onChangeText={formik.handleChange('confirmPassword')}
                errors={formik.errors.confirmPassword}
                error={
                  !!formik.errors.confirmPassword &&
                  formik.touched.confirmPassword
                }
                errorText={formik.errors.confirmPassword}
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
