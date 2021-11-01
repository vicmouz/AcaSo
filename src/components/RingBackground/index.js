import React from 'react';
import {SvgUri} from 'react-native-svg';

export default function RingBackground({uri}) {
  return <SvgUri width="100%" height="100%" uri={uri} />;
}
