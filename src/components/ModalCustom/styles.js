import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {colors} from '~/styles/themes';
import {responsiveSize} from '~/styles/themes/responsive';

const DEVICE_WIDTH = Dimensions.get('window').width;
export const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.View``;
export const Touch = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  justify-content: center;
  align-items: center;
  flex: 1;
  width: ${DEVICE_WIDTH}px;
`;
export const Card = styled.View.attrs({
  shadowColor: colors.light,
  shadowOffset: {width: 0, height: responsiveSize(3)},
  shadowOpacity: 1,
  shadowRadius: 4,
  elevation: 5,
})`
  width: ${responsiveSize(310)}px;
  background-color: ${colors.light};
  border-radius: ${responsiveSize(10)}px;
  padding: ${responsiveSize(25)}px ${responsiveSize(25)}px;
  justify-content: center;
  align-items: center;
`;

export const TextTitle = styled.Text`
  font: normal normal bold ${responsiveSize(16)}px Raleway;
  color: ${colors.dark};
  align-self: center;
  text-align: center;
  bottom: ${responsiveSize(10)}px;
`;

export const TextInfo = styled.Text`
  color: ${colors.dark};
  font-size: ${responsiveSize(14)}px;
  text-align: center;
  margin-bottom: ${responsiveSize(5)}px;
  line-height: ${responsiveSize(20)}px;
`;

export const ButtonSucess = styled.TouchableOpacity`
  width: ${responsiveSize(120)}px;
  height: ${responsiveSize(50)}px;
  background-color: ${colors.button.success};
  border-radius: ${responsiveSize(10)}px;
  align-self: center;
  margin-left: ${responsiveSize(20)}px;
  justify-content: center;
`;

export const ButtonError = styled.TouchableOpacity`
  width: ${responsiveSize(120)}px;
  height: ${responsiveSize(50)}px;
  background-color: ${colors.button.error};
  border-radius: ${responsiveSize(10)}px;
  align-self: center;

  justify-content: center;
`;

export const ViewButtons = styled.View`
  flex-direction: row;
  margin: ${responsiveSize(20)}px;
`;

export const TextButtonClose = styled.Text`
  align-self: center;
  font: normal normal bold ${responsiveSize(16)}px Raleway;
  color: ${colors.light};
`;

export const TimeRemaining = styled.Text`
  font: normal normal bold ${responsiveSize(21)}px Raleway;
  color: ${props => (props.color ? colors.primary : colors.gradient.secondary)};
`;
