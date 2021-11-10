import React from 'react';
import {ActivityIndicator} from 'react-native';
import colors from '~/styles/themes/colors';
import {ContainerImg, ImgPic} from './styles';

export default function UserImage({url, loading}) {
  return (
    <>
      <ContainerImg>
        {loading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <ImgPic
            source={{
              uri: url,
            }}
          />
        )}
      </ContainerImg>
    </>
  );
}
