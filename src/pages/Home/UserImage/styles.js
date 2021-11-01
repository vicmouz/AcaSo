import styled from 'styled-components';
import colors from '~/styles/themes/colors';
import {responsiveSize} from '~/styles/themes/responsive';

export const ImgPic = styled.Image`
  align-items: center;
  justify-content: center;
  width: ${responsiveSize(180)}px;
  height: ${responsiveSize(180)}px;
  border-radius: ${responsiveSize(100)}px;
`;

export const ContainerImg = styled.View`
  width: ${responsiveSize(200)}px;
  height: ${responsiveSize(200)}px;
  background: ${colors.light};
  border-radius: ${responsiveSize(100)}px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px #00000033;
`;
