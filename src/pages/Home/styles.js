import styled from 'styled-components/native';
import anel from '~/assets/images/anel.svg';
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
  margin-top: ${responsiveSize(77)}px;
  font-size: ${responsiveSize(20)}px;
  text-align: left;
  color: ${colors.light};
  padding-left: 10%;
`;

export const UserName = styled.Text`
  padding-left: 10%;
  font-size: ${responsiveSize(30)}px;
  line-height: ${responsiveSize(35)}px;
  color: ${colors.light};
  margin-bottom: ${responsiveSize(69)}px;
`;

export const ButtonLogout = styled(Button)`
  margin: 15px 80px;
  background: ${colors.dark};
  width: 100px;
`;

export const TextLogout = styled.Text`
  color: ${colors.light};
  font-size: ${responsiveSize(16)}px;
  letter-spacing: ${responsiveSize(0.51)}px;
  margin-bottom: ${responsiveSize(39)}px;
  text-decoration: underline;
`;

export const TextBio = styled.Text`
  width: 80%;
  color: ${colors.light};
  font-size: ${responsiveSize(18)}px;
  line-height: ${responsiveSize(26)}px;
  margin-bottom: ${responsiveSize(107)}px;
  margin-top: ${responsiveSize(127)}px;
`;

export const Wrap = styled.ScrollView`
  flex: 1;
  background: ${colors.primary};
`;

export const BackgroundImg = styled.ImageBackground`
  /* width: 100%; */
  justify-content: center;
  flex: 1;
  /* padding: 0 ${responsiveSize(16)}px; */
`;
