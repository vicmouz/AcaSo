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
      <Container style={style} size={size}>
        {error || wrongPass ? <ContainerError /> : null}
        <TInput
          {...rest}
          password
          ref={ref}
          secureTextEntry={iconVisible ? isOpenPassword : false}
        />
        {iconVisible && (
          <IconButton onPress={() => setOpenPassword(!isOpenPassword)}>
            {isOpenPassword ? <IconPassDisabled /> : <IconPass />}
          </IconButton>
        )}
      </Container>
      <ViewText>{wrongPass && <TextError>Senha Incorreta</TextError>}</ViewText>

      <ViewText>{error && <TextError>{errorText}</TextError>}</ViewText>
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
