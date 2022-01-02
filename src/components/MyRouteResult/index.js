import React from 'react';
import ImageURL from '../../assets/imageTraining.png';
import {
  Background,
  BtnRoute,
  ImageTraining,
  ContainerText,
  Title,
  Label,
} from './style';

export default function MyRouteResult({
  title,
  description
}) {
  return (
    <Background>
      <BtnRoute>
        <ImageTraining source={ImageURL} />
        <ContainerText>
          <Title>{title}</Title>
          <Label>{description}</Label>
        </ContainerText>
      </BtnRoute>
    </Background>
  );
}