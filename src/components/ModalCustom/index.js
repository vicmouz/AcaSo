import React from 'react';
import PropTypes from 'prop-types';
import {Modal, TouchableWithoutFeedback, Keyboard} from 'react-native';

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

export default function ModalCustom({
  show,
  setShow,
  titleText,
  infoText,
  textButtom,
  children,
  onAction,
  onAction2,
  textErrorButtom,
  textSucessButtom,
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

                    <ViewButtons>
                      <ButtonError onPress={onAction2}>
                        <TextButtonClose>{textErrorButtom}</TextButtonClose>
                      </ButtonError>
                      <ButtonSucess onPress={onAction}>
                        <TextButtonClose>{textSucessButtom}</TextButtonClose>
                      </ButtonSucess>
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
