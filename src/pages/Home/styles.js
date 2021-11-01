import styled from 'styled-components/native';
import IconCustom from '~/components/IconCustom';
import {colors} from '~/styles/themes';
import {responsiveSize} from '~/styles/themes/responsive';
import ring from '~/assets/images/anel.svg';

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
  font: normal normal normal ${responsiveSize(17)}px / ${responsiveSize(21)}px
    Raleway;
  margin-top: ${responsiveSize(77)}px;
  text-align: left;
  padding-left: 10%;
`;

export const UserName = styled.Text`
  padding-left: 10%;
  color: ${colors.light};
  font: normal normal bold ${responsiveSize(27)}px / ${responsiveSize(32)}px
    Raleway;
  margin-bottom: ${responsiveSize(48)}px;
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
  margin-top: ${responsiveSize(89)}px;
  font: normal normal normal ${responsiveSize(18)}px / ${responsiveSize(26)}px
    Raleway;
  text-align: center;
`;

export const RingContainer = styled.View.attrs({elevation: 3})`
  position: absolute;
  flex: 1;
  left: ${responsiveSize(-361)}px;
  top: ${responsiveSize(-127)}px;
`;

export const RingImg = styled(IconCustom).attrs({
  xml: ring,
  width: responsiveSize(949),
  height: responsiveSize(715),
  color: colors.light,
})`
  align-self: center;
`;
