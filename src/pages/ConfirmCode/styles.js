import styled from 'styled-components';
import Input from '~/components/Input';
import {responsiveSize} from '~/styles/themes/responsive';

export const Strong = styled.Text`
  font: normal normal bold 18px/30px Raleway;
  letter-spacing: 0.58px;
  color: #ffffff;
`;

export const FormInput = styled(Input).attrs({
  textAlign: 'center',
})`
  margin: 0 ${responsiveSize(4)}px 0 ${responsiveSize(4)}px;
`;

export const InputCode = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: ${responsiveSize(45)}px;
  width: ${responsiveSize(360)}px;
`;

export const LabelCode = styled.Text`
  text-align: left;
  font: normal normal bold 16px/19px Raleway;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin-top: ${responsiveSize(48)};
  margin-bottom: ${responsiveSize(13)};
`;

export const Form = styled.View`
  flex: 1;
  padding-left: 10%;
  width: ${responsiveSize(360)};
`;
