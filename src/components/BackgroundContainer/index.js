import React from 'react';
import colors from '~/styles/themes/colors';
import {Gradient, Wrap} from './styles';

export default function BackgroundContainer({children}) {
  return (
    <Gradient colors={[colors.gradient.primary, colors.gradient.secondary]}>
      <Wrap>{children}</Wrap>
    </Gradient>
  );
}
