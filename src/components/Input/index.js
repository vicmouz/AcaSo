import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Label, TInput} from './styles';

function Input({label, style, icon, ...rest}, ref) {
  return (
    <>
      <Label>{label}</Label>
      <Container style={style}>
        <TInput {...rest} ref={ref} />
      </Container>
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
