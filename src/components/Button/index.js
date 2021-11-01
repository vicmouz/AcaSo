import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import {
  ArrowContainer,
  ArrowIcon,
  Container,
  Gradient,
  TextButton,
  TextButtonSubmit,
  Wrap,
} from './styles';

export default function Button({children, loading, isSubmit, ...rest}) {
  return (
    <Container {...rest}>
      {loading ? (
        <Gradient
          isSubmit
          tart={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#FFFC', '#FFF']}>
          <Wrap>
            <ActivityIndicator size="small" color="#200246" />
          </Wrap>
        </Gradient>
      ) : (
        <>
          {isSubmit ? (
            <>
              <Gradient
                isSubmit
                tart={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#FFFC', '#FFF']}>
                <Wrap>
                  <TextButtonSubmit>{children}</TextButtonSubmit>
                  <ArrowContainer>
                    <ArrowIcon />
                  </ArrowContainer>
                </Wrap>
              </Gradient>
            </>
          ) : (
            <Gradient
              tart={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#FFFC', '#FFF']}>
              <Wrap>
                <TextButton>{children}</TextButton>
              </Wrap>
            </Gradient>
          )}
        </>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
