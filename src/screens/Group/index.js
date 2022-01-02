import React from 'react';
import StandardHeader from '../../components/StandardHeaader';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Background,
  Body,
  ContainerBtn,
  BtnOptions,
  LabelOptions
} from './style';

export default function Group({ navigation }) {
  return (
    <Background>
      <StandardHeader
        navigation={navigation}
        title="Grupo"
      />
      <Body>
        <ContainerBtn>
          <BtnOptions onPress={() => navigation.navigate('FindGroups')}>
            <Icon
              name="search"
              size={53}
              color="#008a00"
            />
            <LabelOptions>Encontrar grupos</LabelOptions>
          </BtnOptions>
          <BtnOptions onPress={() => navigation.navigate("MarkPedal")}>
            <Icon
              name="calendar"
              size={53}
              color="#008a00"
            />
            <LabelOptions>Marcar pedal</LabelOptions>
          </BtnOptions>
        </ContainerBtn>
      </Body>
    </Background>
  );
}