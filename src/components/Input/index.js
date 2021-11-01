import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ContainerError,
  Label,
  TextError,
  TInput,
  ViewText,
} from './styles';

function Input({label, style, size, icon, error, errorText, ...rest}, ref) {
  return (
    <>
      <Label>{label}</Label>
      <Container style={style} size={size}>
        {error && <ContainerError />}
        <TInput {...rest} ref={ref} />
      </Container>
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
