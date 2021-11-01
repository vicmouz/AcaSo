import styled from 'styled-components/native';
import arrow from '~/assets/icons/arrow.svg';

import LinearGradient from 'react-native-linear-gradient';

import {colors} from '~/styles/themes';
import {responsiveSize} from '~/styles/themes/responsive';
import IconCustom from '../IconCustom';

export const Container = styled.TouchableOpacity`
  height: ${responsiveSize(40)}px;
  width: ${responsiveSize(280)}px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const Gradient = styled(LinearGradient)`
  flex: 1;
  height: ${responsiveSize(40)}px;
  width: ${responsiveSize(280)}px;
  opacity: ${props => (props.isSubmit ? 1 : 0.2)};
  border-radius: 20px;
`;

export const TextButtonSubmit = styled.Text`
  color: ${colors.button.text};
  width: ${responsiveSize(240)}px;
  text-align: center;
  padding-left: 10%;
  font: normal normal bold 16px/19px Raleway;
`;

export const TextButton = styled.Text`
  color: ${colors.light};
  text-align: center;
  font: normal normal bold 16px/19px Raleway;
  opacity: 1;
`;

export const ArrowIcon = styled(IconCustom).attrs({
  xml: arrow,
  width: responsiveSize(8),
  height: responsiveSize(16),
})`
  align-self: center;
`;

export const ArrowContainer = styled.View`
  flex: 1;
  background: ${colors.light2};
  width: ${responsiveSize(40)}px;
  height: ${responsiveSize(40)}px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const Wrap = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
