import React, {forwardRef, useState} from 'react';
import PropTypes from 'prop-types';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ContainerError,
  IconButton,
  IconPass,
  IconPassDisabled,
  Label,
  TextError,
  TInput,
  ViewText,
  WrapInput,
} from './styles';

function Input(
  {
    label,
    iconVisible,
    password,
    wrongPass,
    style,
    size,
    icon,
    error,
    errorText,
    ...rest
  },
  ref,
) {
  const [isOpenPassword, setOpenPassword] = useState(true);

  return (
    <>
      <Label>{label}</Label>
      <WrapInput>
        <Container style={style} size={size}>
          {error || wrongPass ? <ContainerError /> : null}
          <TInput
            {...rest}
            password
            size={size}
            ref={ref}
            secureTextEntry={iconVisible ? isOpenPassword : false}
          />
          {iconVisible && (
            <IconButton
              onPress={() => {
                setOpenPassword(!isOpenPassword);
              }}>
              {isOpenPassword ? <IconPassDisabled /> : <IconPass />}
            </IconButton>
          )}
        </Container>
        <ViewText>{error && <TextError>{errorText}</TextError>}</ViewText>
        <ViewText>
          {wrongPass && <TextError>* Senha Incorreta</TextError>}
        </ViewText>
      </WrapInput>
    </>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
