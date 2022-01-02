import React from 'react';
import ImageURL from '../../assets/imageTraining.png';
import {
  BtnEvent,
  ContainerEvent,
  ImageEvent,
  Title
} from './style';

export default function EventResult({
  image,
  title
}){
  return(
    <BtnEvent>
      <ContainerEvent>
        <ImageEvent source={ ImageURL }/>
        <Title>{ title }</Title>
      </ContainerEvent>
    </BtnEvent>
  );
}