import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';

import {
  Container,
  Content,
  Touch,
  Card,
  IconModal,
  TextInfo,
  TextTitle,
  TextButtonClose,
  ButtonError,
  ButtonSucess,
  ViewButtons,
} from './styles';
import colors from '~/styles/themes/colors';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import Animated from 'react-native-reanimated';

export default function ModalCustom({
  show,
  setShow,
  titleText,
  infoText,
  textButtom,
  children,
  onAction,
  onAction2,
  twoButtons,
  textErrorButtom,
  textSucessButtom,
  isLogoutModal,
  completeCountdown,
}) {
  return (
    <>
      <>
        <Modal animationType="slide" transparent visible={show}>
          <Container>
            <Content>
              <Touch
                onPress={() => {
                  Keyboard.dismiss();
                }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <Card>
                    <TextTitle>{titleText}</TextTitle>
                    <TextInfo>{infoText}</TextInfo>
                    {isLogoutModal ? (
                      <CountdownCircleTimer
                        isPlaying
                        size={100}
                        // onComplete={() => completeCountdown()}
                        duration={10}
                        colors={[
                          ['#004777', 0.4],
                          ['#F7B801', 0.4],
                          ['#A30000', 0.2],
                        ]}>
                        {/* {({remainingTime, animatedColor}) => (
                          <Animated.Text style={{color: animatedColor}}>
                            {remainingTime}
                          </Animated.Text>
                        )} */}
                      </CountdownCircleTimer>
                    ) : null}
                    <ViewButtons>
                      <ButtonError onPress={onAction}>
                        <TextButtonClose>{textErrorButtom}</TextButtonClose>
                      </ButtonError>
                    </ViewButtons>
                  </Card>
                </TouchableWithoutFeedback>
              </Touch>
            </Content>
          </Container>
        </Modal>
      </>
    </>
  );
}

ModalCustom.defaultProps = {
  titleText: '',
  infoText: '',
  isBottomModal: false,
  isLoadingModal: false,
  onAction() {},
  onAction2() {},
  twoButtons: false,
  textButtom: '',
  textErrorButtom: '',
  textSucessButtom: '',
  children: {},
  setShow() {},
};

ModalCustom.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func,
  titleText: PropTypes.string,
  infoText: PropTypes.string,
  isBottomModal: PropTypes.bool,
  isLoadingModal: PropTypes.bool,
  onAction: PropTypes.func,
  onAction2: PropTypes.func,
  twoButtons: PropTypes.bool,
  textButtom: PropTypes.string,
  textErrorButtom: PropTypes.string,
  textSucessButtom: PropTypes.string,
  children: PropTypes,
};
