import React, {useState} from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';

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
  TitlePage,
  Wrap,
} from './styles';
import {useFormik} from 'formik';
import api from '~/services/api';
import formValidator from './formValidator';

export default function RecoverPassword({navigation}) {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {email: ''},
    validationSchema: formValidator,
    onSubmit: async values => {
      try {
        setLoading(true);
        await api.post('/auth/forgot-password', {
          email: values.email,
        });
        setLoading(false);
        navigation.navigate('ConfirmCode', {email: values.email});
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
            <TitlePage>RECUPERAR SENHA</TitlePage>
            <TextInfo>
              Informe seu e-mail para receber um código de verificação
              necessário para a troca de senha
            </TextInfo>
            <Form>
              <FormInput
                label="E-mail"
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Digite o seu e-mail"
                returnKeyType="send"
                onSubmitEditing={formik.handleSubmit}
                value={formik.values.email}
                onChangeText={formik.handleChange('email')}
                errors={formik.errors.email}
                error={!!formik.errors.email && formik.touched.email}
                errorText={formik.errors.email}
              />
            </Form>
            <SubmitButton
              loading={loading}
              onPress={formik.handleSubmit}
              isSubmit>
              Enviar código
            </SubmitButton>
            <ButtonRegister onPress={() => navigation.navigate('Sign')}>
              Voltar ao login
            </ButtonRegister>
          </Container>
        </BackgroundImg>
      </TouchableWithoutFeedback>
    </Wrap>
  );
}
