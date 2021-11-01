import styled from 'styled-components/native';
import {colors} from '~/styles/themes';
import {responsiveSize} from '~/styles/themes/responsive';

export const Wrap = styled.ScrollView`
  flex: 1;
  background: ${colors.primary};
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
`;

export const TextHome = styled.Text`
  font: normal normal normal ${responsiveSize(20)}px / ${responsiveSize(24)}px
    Raleway;
  margin-top: ${responsiveSize(77)}px;
  text-align: left;
  padding-left: 10%;
`;

export const UserName = styled.Text`
  padding-left: 10%;
  color: ${colors.light};
  font: normal normal bold ${responsiveSize(30)}px / ${responsiveSize(35)}px
    Raleway;
  margin-bottom: ${responsiveSize(69)}px;
`;

export const TextLogout = styled.Text`
  color: ${colors.light};
  letter-spacing: ${responsiveSize(0.51)}px;
  margin-bottom: ${responsiveSize(39)}px;
  text-decoration: underline;
  font: normal normal 300 ${responsiveSize(16)}px / ${responsiveSize(45)}px
    Raleway;
`;

export const TextBio = styled.Text`
  width: 80%;
  color: ${colors.light};
  margin-bottom: ${responsiveSize(107)}px;
  margin-top: ${responsiveSize(127)}px;
  font: normal normal normal ${responsiveSize(18)}px / ${responsiveSize(26)}px
    Raleway;
  text-align: center;
`;
