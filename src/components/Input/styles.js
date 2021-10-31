import styled from 'styled-components/native';

import {colors} from '~/styles/themes';
import {responsiveSize} from '~/styles/themes/responsive';

export const Container = styled.View`
  height: ${responsiveSize(44)}px;
  background: ${colors.light};
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
`;

export const Label = styled.Text`
  color: ${colors.light};
  font-size: ${responsiveSize(16)}px;
  margin-bottom: ${responsiveSize(13)}px;
`;
