import styled from 'styled-components';
import colors from '~/styles/themes/colors';
import {responsiveSize} from '~/styles/themes/responsive';

export const ImgPic = styled.Image`
  align-items: center;
  justify-content: center;
  width: ${responsiveSize(189)}px;
  height: ${responsiveSize(189)}px;
  border-radius: ${responsiveSize(50)}px;
`;

export const ContainerImg = styled.View`
  width: ${responsiveSize(216)}px;
  height: ${responsiveSize(216)}px;
  background: ${colors.light};
  border-radius: ${responsiveSize(50)}px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px #00000033;
`;
