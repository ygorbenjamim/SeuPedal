import React from 'react';
import StandardHeader from '../../components/StandardHeaader';
import TrainingResult from '../../components/TrainingResult';
import {
  Background,
  Scroll,
  Body
} from './style';

export default function Training({ navigation }) {

  const listTraining = [
    {
      id: 1,
      title: '5 Km - Bessa/Intermares',
      type: 'Percurso plano',
      difficulty: 'Treino leve',
      track: 'Asfalto'
    },
    {
      id: 2,
      title: '15 Km - Areia/Remígio',
      type: 'Percurso com subidas',
      difficulty: 'Treino moderado',
      track: 'Asfalto'
    },
    {
      id: 3,
      title: '35 Km - Cabedelo/Santa Rita',
      type: 'Percurso com desníveis',
      difficulty: 'Treino pesado',
      track: 'Asfalto'
    },
    {
      id: 4,
      title: '5 Km - Orla de Cabo Branco',
      type: 'Percurso plano',
      difficulty: 'Treino leve',
      track: 'Asfalto'
    },
    {
      id: 5,
      title: '25 Km - Areia/Esperança',
      type: 'Percurso com desníveis',
      difficulty: 'Treino moderado',
      track: 'Asfalto'
    },
    {
      id: 6,
      title: '35 Km - Circuito',
      type: 'Percurso enladeirado',
      difficulty: 'Treino pesado',
      track: 'Barro'
    },
  ];

  // Variável para renderizar o componente TrainingResult
  const show = listTraining.map(training => {
    return (
      <TrainingResult
        key={training.id}
        title={training.title}
        type={training.type}
        difficulty={training.difficulty}
        track={training.track}
      />
    );
  });

  return (
    <Background>
      <StandardHeader
        navigation={navigation}
        title="Treinos"
      />
      <Body>
        <Scroll>
          {show}
        </Scroll>
      </Body>
    </Background>
  );
}