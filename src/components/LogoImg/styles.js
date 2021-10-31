import styled from 'styled-components';
import logo from '~/assets/icons/logo.svg';
import colors from '~/styles/themes/colors';
import {responsiveSize} from '~/styles/themes/responsive';
import IconCustom from '../IconCustom';

export const IconLogo = styled(IconCustom).attrs({
  xml: logo,
  width: responsiveSize(70),
  height: responsiveSize(70),
  color: colors.light,
})`
  align-self: center;
  margin-top: ${responsiveSize(131)}px;
  margin-bottom: ${responsiveSize(27)}px;
`;
