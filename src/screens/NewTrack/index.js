import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Geolocation from '@react-native-community/geolocation';
import {
  Background,
  Body,
  BtnBack,
  Label,
  Btn,
  Footer
} from './style';

export default function NewTrack({ navigation }){

  return(
    <Background>
      <Body>
        <BtnBack onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-left"
            size={32}
            color="#008a00"
          />
        </BtnBack>

        <Label>Geolocalização</Label>
        <Label>Latitude: { } </Label>
        <Label>Longitude: { } </Label>
        <Btn>
          <Label>Obter Localização</Label>
        </Btn>
        <Btn>
          <Label>Cancelar Monitoramento</Label>
        </Btn>
      </Body>
      <Footer>

      </Footer>
    </Background>
  );
}