import styled from 'styled-components/native';

import {colors} from '~/styles/themes';
import {responsiveSize} from '~/styles/themes/responsive';

export const Container = styled.TouchableOpacity`
  height: ${responsiveSize(40)}px;
  width: ${responsiveSize(280)}px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${colors.button.text};
  font-size: ${responsiveSize(18)}px;
`;
