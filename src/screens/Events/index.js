import React from 'react';
import StandardHeader from '../../components/StandardHeaader';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Background,
  Body,
  ContainerBtn,
  BtnOptions,
  LabelOptions,
} from './style';


export default function Events({ navigation }){
  return(
    <Background>
      <StandardHeader
        navigation={navigation}
        title="Eventos"
      />
      <Body>
        <ContainerBtn>
          <BtnOptions onPress={() => navigation.navigate('EventsList')}>
            <Icon
              name="list"
              size={53}
              color="#008a00"
            />
            <LabelOptions>Listar eventos</LabelOptions>
          </BtnOptions>
          <BtnOptions onPress={() => navigation.navigate("Home")}>
            <Icon
              name="edit"
              size={53}
              color="#008a00"
            />
            <LabelOptions>Cadastrar eventos</LabelOptions>
          </BtnOptions>
        </ContainerBtn>
      </Body>
    </Background>
  );
}