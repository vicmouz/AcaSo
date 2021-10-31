import styled from 'styled-components/native';

import {colors} from '~/styles/themes';

import Button from '~/components/Button';
import {responsiveSize} from '~/styles/themes/responsive';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
`;

export const TextHome = styled.Text`
  font-size: 40px;
  color: ${colors.dark};
`;

export const ButtonLogout = styled(Button)`
  margin: 15px 80px;
  background: ${colors.dark};
  width: 100px;
`;

export const TextLogout = styled.Text`
  color: ${colors.light};
  font-size: ${responsiveSize(16)}px;
`;
