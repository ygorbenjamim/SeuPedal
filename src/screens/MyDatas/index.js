import React from 'react';
import StandardHeader from '../../components/StandardHeaader';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Background,
  Body,
  ContainerTop,
  ContainerBottom,
  LabelH1,
  LabelH2,
  LabelH3,
  Footer,
  BtnNewDatas,
  LabelNewDatas
} from './style';

export default function MyDatas({ navigation }) {

  const km = 38;
  const minute = 40;
  const vm = km / (minute / 60);
  const max = vm + 7;

  return (
    <Background>
      <StandardHeader
        navigation={navigation}
        title="Meus dados"
      />
      <Body>
        <ContainerTop>
          <Icon name="bar-chart" size={100} color="#333" />
        </ContainerTop>
        <ContainerBottom>
          <LabelH2>Você percorreu</LabelH2>
          <LabelH1>{km} Km</LabelH1>
          <LabelH2>Em</LabelH2>
          <LabelH3>{minute} minutos</LabelH3>
          <LabelH2>Velocidade média</LabelH2>
          <LabelH3>{vm.toFixed(0)} Km/h</LabelH3>
          <LabelH2>Velocidade máxima</LabelH2>
          <LabelH3>{max.toFixed(0)} Km/h</LabelH3>
        </ContainerBottom>
      </Body>
      <Footer>
        <BtnNewDatas onPress={() => alert('Reiniciar dados...')}>
          <LabelNewDatas>Novo pedal</LabelNewDatas>
        </BtnNewDatas>
      </Footer>
    </Background>
  );
}