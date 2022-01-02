import React from 'react';
import StandardHeader from '../../components/StandardHeaader';
import TrailResult from '../../components/TrailResult';
import {
  Background,
  Scroll,
  Body
} from './style';

export default function Trail({ navigation }) {

  const listTrail = [
    {
      id: 1,
      title: 'Trilha da mata',
      localization: "Cabedelo-PB",
      difficulty: "Moderado"
    },
    {
      id: 2,
      title: 'Açude do Cafundó',
      localization: "João Pessoa-PB",
      difficulty: "Moderado"
    },
    {
      id: 3,
      title: 'Cach. do Roncador',
      localization: "Borborema-PB",
      difficulty: "Pesado"
    },
    {
      id: 4,
      title: 'Cach. do Ouricuri',
      localization: "Pilões-PB",
      difficulty: "Pesado"
    },
    {
      id: 5,
      title: 'Trilha Vaca Brava',
      localization: "Areia-PB",
      difficulty: "Moderado"
    },
    {
      id: 6,
      title: 'Mata do Pau Ferro',
      localization: "Areia-PB",
      difficulty: "Pesado"
    },
  ];

  // Variável para renderizar o componente TrainingResult
  const show = listTrail.map(trail => {
    return (
      <TrailResult
        key={trail.id}
        title={trail.title}
        localization={trail.localization}
        difficulty={trail.difficulty}
      />
    );
  });

  return (
    <Background>
      <StandardHeader
        navigation={navigation}
        title="Trilhas"
      />
      <Body>
        <Scroll>
          {show}
        </Scroll>
      </Body>
    </Background>
  );
}