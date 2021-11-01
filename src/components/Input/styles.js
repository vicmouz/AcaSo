import styled from 'styled-components/native';

import {colors} from '~/styles/themes';
import {responsiveSize} from '~/styles/themes/responsive';
import IconCustom from '../IconCustom';
import eye from '~/assets/icons/view.svg';

export const Wrap = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  height: ${props => (props.size ? responsiveSize(38) : responsiveSize(44))};
  background: ${colors.input.background};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  width: ${props => (props.size ? responsiveSize(props.size) : '100%')};
`;

export const ContainerError = styled.View.attrs({elevation: 2})`
  width: ${responsiveSize(9)};
  height: ${props => (props.size ? responsiveSize(38) : responsiveSize(44))};
  background: ${colors.error};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.input.placeholder,
})`
  flex: 1;
  font-size: 16px;
  color: ${colors.light};
  background: ${colors.input.background};
  border-radius: 10px;
  padding-left: ${responsiveSize(11)};
`;

export const Label = styled.Text`
  color: ${colors.light};
  font-size: ${responsiveSize(16)}px;
  margin-bottom: ${responsiveSize(13)}px;
`;

export const ViewText = styled.View`
  height: ${responsiveSize(15)}px;
`;

export const TextError = styled.Text`
  font: normal normal 600 16px/19px Raleway;
  color: ${colors.error};
  position: absolute;
  top: ${responsiveSize(-28)};
`;

export const IconButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})``;

export const IconPass = styled(IconCustom).attrs({
  xml: eye,
  width: responsiveSize(16),
  height: responsiveSize(10),
})`
  right: ${responsiveSize(16)}px;
`;

export const IconPassDisabled = styled(IconCustom).attrs({
  xml: eye,
  width: responsiveSize(16),
  height: responsiveSize(10),
})`
  right: ${responsiveSize(16)}px;
`;
