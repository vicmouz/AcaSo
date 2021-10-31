import React from 'react';
import {ContainerImg, ImgPic} from './styles';

export default function UserImage({url}) {
  return (
    <>
      <ContainerImg>
        <ImgPic
          source={{
            uri: url,
          }}
        />
      </ContainerImg>
    </>
  );
}
