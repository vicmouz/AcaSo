import {Platform} from 'react-native';
import styled from 'styled-components/native';

import {colors} from '~/styles/themes';

import Input from '~/components/Input';
import Button from '~/components/Button';
import {responsiveSize} from '~/styles/themes/responsive';
import IconCustom from '~/components/IconCustom';
import ring from '~/assets/images/anel.svg';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
  elevation: 2,
  zIndex: 2,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 38px;
  margin-top: ${responsiveSize(-35)}px;
`;

export const Form = styled.View`
  align-self: stretch;
`;
export const FormInput = styled(Input)`
  margin-bottom: ${responsiveSize(20)}px;
`;

export const SubmitButton = styled(Button)``;

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
  margin-top: ${responsiveSize(99)}px;
  color: ${colors.light};
  font-size: ${responsiveSize(16)}px;
`;

export const ButtonRegister = styled(Button)`
  margin-top: ${responsiveSize(24)}px;
  margin-bottom: ${responsiveSize(54)}px;
`;

export const Wrap = styled.ScrollView`
  flex: 1;
`;

export const BackgroundImg = styled.ImageBackground.attrs({
  zIndex: 1,
  elevation: 1,
})`
  flex: 1;
  justify-content: center;
`;

export const RingContainer = styled.View`
  position: absolute;
  flex: 1;
  left: ${responsiveSize(214)}px;
  top: ${responsiveSize(-117)}px;
`;

export const RingImg = styled(IconCustom).attrs({
  xml: ring,
  width: responsiveSize(338),
  height: responsiveSize(255),
  color: colors.light,
})`
  align-self: center;
`;
