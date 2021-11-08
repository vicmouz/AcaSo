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
import colors from '~/styles/themes/colors';

export default function Button({children, loading, isSubmit, ...rest}) {
  return (
    <Container {...rest}>
      {loading ? (
        <Gradient
          isSubmit
          tart={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#FFF', '#FFFC']}>
          <Wrap>
            <ActivityIndicator size="small" color={colors.primary} />
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
                colors={['#FFF', '#FFFC']}>
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
              colors={['#FFF', '#FFFC']}>
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
