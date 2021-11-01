import React, {useEffect, useRef, useState} from 'react';
import {TouchableWithoutFeedback, Keyboard, Linking} from 'react-native';
import {useSelector} from 'react-redux';
import LogoImg from '~/components/LogoImg';
import gas from '~/assets/images/gas.png';

import {
  BackgroundImg,
  ButtonRegister,
  Container,
  RingContainer,
  RingImg,
  SubmitButton,
  TextInfo,
  TextRecover,
  TitlePage,
  Wrap,
} from '../RecoverPassword/styles';
import {Strong, FormInput, InputCode, LabelCode, Form} from './styles';

export default function ConfirmCode({navigation}) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [number4, setNumber4] = useState('');
  const [number5, setNumber5] = useState('');
  const [number6, setNumber6] = useState('');

  useEffect(() => {
    setNumber1();
    setNumber2();
    setNumber3();
    setNumber4();
    setNumber5();
    setNumber6();
    setEmail(navigation.getParam('email'));
  }, [navigation]);

  const number1Ref = useRef();
  const number2Ref = useRef();
  const number3Ref = useRef();
  const number4Ref = useRef();
  const number5Ref = useRef();
  const number6Ref = useRef();

  function handleSubmit() {
    navigation.navigate('NewPassword', {
      email: email,
      code: number1 + number2 + number3 + number4 + number5 + number6,
    });
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
            <TitlePage>RECUPERAR SENHA</TitlePage>
            <TextInfo>
              Um código de verificação foi enviado para <Strong>{email}</Strong>
              , insira nos campos abaixo:
            </TextInfo>
            <Form>
              <LabelCode>Código de Verificação</LabelCode>
              <InputCode>
                <FormInput
                  value={number1}
                  keyboardType="phone-pad"
                  returnKeyType="next"
                  onChangeText={textValue => {
                    setNumber1(textValue);
                    if (textValue !== '') {
                      number2Ref.current.focus();
                    }
                  }}
                  onSubmitEditing={() => number2Ref.current.focus()}
                  ref={number1Ref}
                  blurOnSubmit={false}
                  size={42}
                  maxLength={1}
                />
                <FormInput
                  value={number2}
                  keyboardType="phone-pad"
                  returnKeyType="next"
                  onChangeText={textValue => {
                    setNumber2(textValue);
                    if (textValue !== '') {
                      number3Ref.current.focus();
                    }
                  }}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      number1Ref.current.focus();
                    }
                  }}
                  onSubmitEditing={() => number3Ref.current.focus()}
                  ref={number2Ref}
                  blurOnSubmit={false}
                  size={42}
                  maxLength={1}
                />
                <FormInput
                  value={number3}
                  keyboardType="phone-pad"
                  returnKeyType="next"
                  onChangeText={textValue => {
                    setNumber3(textValue);
                    if (textValue !== '') {
                      number4Ref.current.focus();
                    }
                  }}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      number2Ref.current.focus();
                    }
                  }}
                  onSubmitEditing={() => number4Ref.current.focus()}
                  ref={number3Ref}
                  blurOnSubmit={false}
                  size={42}
                  maxLength={1}
                />
                <FormInput
                  value={number4}
                  keyboardType="phone-pad"
                  returnKeyType="next"
                  onChangeText={textValue => {
                    setNumber4(textValue);
                    if (textValue !== '') {
                      number5Ref.current.focus();
                    }
                  }}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      number3Ref.current.focus();
                    }
                  }}
                  onSubmitEditing={() => number5Ref.current.focus()}
                  ref={number4Ref}
                  blurOnSubmit={false}
                  size={42}
                  maxLength={1}
                />
                <FormInput
                  value={number5}
                  keyboardType="phone-pad"
                  returnKeyType="next"
                  onChangeText={textValue => {
                    setNumber5(textValue);
                    if (textValue !== '') {
                      number6Ref.current.focus();
                    }
                  }}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      number4Ref.current.focus();
                    }
                  }}
                  onSubmitEditing={() => number6Ref.current.focus()}
                  ref={number5Ref}
                  blurOnSubmit={false}
                  size={42}
                  maxLength={1}
                />
                <FormInput
                  value={number6}
                  keyboardType="phone-pad"
                  returnKeyType="next"
                  onChangeText={textValue => {
                    setNumber6(textValue);
                    if (textValue !== '') {
                      number6Ref.current.focus();
                    }
                  }}
                  onKeyPress={({nativeEvent}) => {
                    if (nativeEvent.key === 'Backspace') {
                      number5Ref.current.focus();
                    }
                  }}
                  onSubmitEditing={() => handleSubmit()}
                  ref={number6Ref}
                  blurOnSubmit={false}
                  size={42}
                  maxLength={1}
                />
              </InputCode>
            </Form>
            <SubmitButton loading={loading} onPress={handleSubmit} isSubmit>
              Confirmar código
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
