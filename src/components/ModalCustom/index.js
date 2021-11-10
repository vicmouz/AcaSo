import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Modal, TouchableWithoutFeedback, Keyboard} from 'react-native';

import {
  Container,
  Content,
  Touch,
  Card,
  TextInfo,
  TextTitle,
  TextButtonClose,
  ButtonError,
  ViewButtons,
  TimeRemaining,
} from './styles';
import colors from '~/styles/themes/colors';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {Text, View} from 'native-base';

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
                        size={80}
                        onComplete={completeCountdown}
                        duration={5}
                        colors={[
                          [colors.loading.primary, 0.4],
                          [colors.loading.secondary, 0.4],
                          [colors.loading.tertiary, 0.2],
                        ]}>
                        {({remainingTime, animatedColor}) => (
                          <TimeRemaining color={animatedColor}>
                            {remainingTime}
                          </TimeRemaining>
                        )}
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
