import React from 'react';
import ImageURL from '../../assets/imageTraining.png';
import {
  BtnRoute,
  ImageTraining,
  ContainerText,
  Title,
  Label,
} from './style';

export default function TrainingResult({
  title,
  type,
  difficulty,
  track
}) {
  return (
    <BtnRoute>
      <ImageTraining source={ImageURL} />
      <ContainerText>
        <Title>{title}</Title>
        <Label>{type}</Label>
        <Label>{difficulty}</Label>
        <Label>{track}</Label>
      </ContainerText>
    </BtnRoute>
  );
}