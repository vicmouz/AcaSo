import styled from 'styled-components/native';

import {colors} from '~/styles/themes';
import {responsiveSize} from '~/styles/themes/responsive';

export const Container = styled.View`
  height: ${responsiveSize(44)}px;
  background: ${colors.input.background};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.input.placeholder,
})`
  flex: 1;
  font-size: 16px;
  /* margin-left: 5px; */
  color: ${colors.light};
  background: ${colors.input.background};
  border-radius: 10px;
`;

export const Label = styled.Text`
  color: ${colors.light};
  font-size: ${responsiveSize(16)}px;
  margin-bottom: ${responsiveSize(13)}px;
`;

export const ViewText = styled.View`

  /* width: ${responsiveSize(0)}px; */
  height: ${responsiveSize(15)}px;
  /* background-color: red; */
  /* align-self: center; */
  /* background: red; */
  /* margin-bottom: ${responsiveSize(5)}px; */
 
`;

export const TextError = styled.Text`
  font: normal normal 600 16px/19px Raleway;
  color: ${colors.error};
`;
