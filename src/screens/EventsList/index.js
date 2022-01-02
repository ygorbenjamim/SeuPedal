import React from 'react';
import StandardHeader from '../../components/StandardHeaader';
import EventResult from '../../components/EventResult';
import {
  Background,
  Body,
  Scroll
} from './style';

export default function EventsList({ navigation }){

  const listEvent = [
    {
      id: 1,
      title: "Circuito de Mangabeira"
    },
    {
      id: 2,
      title: "Maratona Cabo Branco"
    }
  ]

  const show = listEvent.map(event => {
    return(
      <EventResult
        key={event.id}
        title={event.title}
      />
    );
  });

  return(
    <Background>
      <StandardHeader
        navigation={navigation}
        title="Eventos"
      />
      <Body>
        <Scroll>
          {show}
        </Scroll>
      </Body>
    </Background>
  );
}