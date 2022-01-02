import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import StandardHeader from '../../components/StandardHeaader';
import {
  Background,
  Body,
  ContainerBtn,
  BtnOptions,
  LabelOptions
} from './style';

export default function Individual({ navigation }) {
  return (
    <Background>
      <StandardHeader
        navigation={navigation}
        title="Individual"
      />
      <Body>
        <ContainerBtn>
          <BtnOptions onPress={() => navigation.navigate('MyRoute')}>
            <Icon
              name="code-fork"
              size={53}
              color="#008a00"
            />
            <LabelOptions>Meus trajetos</LabelOptions>
          </BtnOptions>
          <BtnOptions onPress={() => navigation.navigate('MyDatas')}>
            <Icon
              name="pie-chart"
              size={53}
              color="#008a00"
            />
            <LabelOptions>Meus dados</LabelOptions>
          </BtnOptions>
        </ContainerBtn>
        <ContainerBtn>
          <BtnOptions onPress={() => navigation.navigate('Training')}>
            <Icon
              name="bicycle"
              size={53}
              color="#008a00"
            />
            <LabelOptions>Treinos</LabelOptions>
          </BtnOptions>
          <BtnOptions onPress={() => navigation.navigate('Trail')}>
            <Icon
              name="map-signs"
              size={53}
              color="#008a00"
            />
            <LabelOptions>Trilhas</LabelOptions>
          </BtnOptions>
        </ContainerBtn>
      </Body>
    </Background>
  );
}