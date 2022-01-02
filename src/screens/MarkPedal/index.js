import React from 'react';
import StandardHeader from '../../components/StandardHeaader';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Background,
  Body,
  Scroll,
  Container,
  Title,
  ContainerRow,
  Input,
  BtnSelect,
  BtnMark,
  LabelMark
} from './style';

export default function MarkPedal({ navigation }){
  return(
    <Background>
      <StandardHeader
        navigation={navigation}
        title="Marcar pedal"
      />
      <Body>
        <Scroll>
          <Container>
            <Title>Destino:</Title>
            <Input
              placeholder="Local"
            />
            <Title>Horário de saída:</Title>
            <Input
              placeholder="Hora"
              keyboardType="numeric"
            />
            <Title>Data:</Title>
            <Input
              placeholder="Data"
            />
            <Title>Restrição:</Title>
            <ContainerRow>
              <Input
                placeholder="Livre"
              />
              <BtnSelect>
                <Icon name="ellipsis-v" size={22} color="#686868"/>
              </BtnSelect>
            </ContainerRow>
            <Title>Comentário:</Title>
            <Input
              placeholder="Observações"
            />
            <BtnMark>
              <LabelMark>Marcar!</LabelMark>
            </BtnMark>
          </Container>
        </Scroll>
      </Body>
    </Background>
  );
}