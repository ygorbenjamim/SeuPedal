import React from 'react';
import ImageURL from '../../assets/imageTraining.png';
import {
  Background,
  BtnRoute,
  ImageTrail,
  ContainerText,
  Title,
  Label,
  LabelDifficulty
} from './style';

export default function TrailResult({
  title,
  localization,
  difficulty,
}) {
  return (
    <Background>
      <BtnRoute>
        <ImageTrail source={ImageURL} />
        <ContainerText>
          <Title>{title}</Title>
          <Label>{localization}</Label>
          <LabelDifficulty>{difficulty}</LabelDifficulty>
        </ContainerText>
      </BtnRoute>
    </Background>
  );
}