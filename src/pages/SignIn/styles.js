import {Platform} from 'react-native';
import styled from 'styled-components/native';

import {colors} from '~/styles/themes';

import Input from '~/components/Input';
import Button from '~/components/Button';
import {responsiveSize} from '~/styles/themes/responsive';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 38px;
  background: ${colors.primary};
`;

export const Form = styled.View`
  align-self: stretch;
`;
export const FormInput = styled(Input)`
  margin-bottom: ${responsiveSize(31)}px;
`;

export const SubmitButton = styled(Button)`
  background: ${colors.light};
`;

export const TextRecover = styled.Text`
  text-decoration: underline;
  color: ${colors.light};
  font-size: ${responsiveSize(16)}px;
  margin-bottom: ${responsiveSize(71)}px;
`;

export const TitlePage = styled.Text`
  color: ${colors.light};
  font-size: ${responsiveSize(26)}px;
  letter-spacing: ${responsiveSize(7)}px;
  margin-bottom: ${responsiveSize(30)}px;
`;

export const TextRegister = styled.Text`
  color: ${colors.light};
  font-size: ${responsiveSize(16)}px;
`;

export const ButtonRegister = styled(Button)`
  background: transparent linear-gradient(90deg, #ffffff 0%, #ffffffcc 100%) 0%
    0% no-repeat padding-box;
`;
