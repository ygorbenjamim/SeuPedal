import React from 'react';
import StandardHeader from '../../components/StandardHeaader';
import MyRouteResult from '../../components/MyRouteResult';
import {
  Background,
  Body,
  Scroll,
  Msg
} from './style';

export default function MyRoute({ navigation }) {

  const listMyRoutes = [];

  // Variável para renderizar o componente MyRoutesResult
  const show = listMyRoutes.map(route => {
    return (
      <MyRouteResult
        key={route.id}
        title={route.title}
        description={route.description}
      />
    );
  });

  return (
    <Background>
      <StandardHeader
        navigation={navigation}
        title="Meus trajetos"
      />
      <Body>
        <Scroll>
          {listMyRoutes.length < 1 ? <Msg>Ainda não possui trajetos salvos</Msg> : show}
        </Scroll>
      </Body>
    </Background>
  );
}