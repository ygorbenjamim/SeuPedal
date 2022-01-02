import React from 'react';
import StandardHeader from '../../components/StandardHeaader';
import GroupResult from '../../components/GroupResult';
import {
  Background,
  Body,
  Scroll
} from './style';

export default function FindGroups({ navigation }) {

  const listGroup = [
    {
      id: 1,
      name: "VEB",
      localization: "Areia-PB",
      members: 38,
      meetings: 163,
      shortBio: "Lorem Impsu, LoremImpsu Lorem Impsu. Lorem Impsu Lorem Impsu Lorem Impsu, Lorem Impsu Lorem Impsu."
    },
    {
      id: 2,
      name: "TCHEMPS",
      localization: "Cabedelo-PB",
      members: 31,
      meetings: 326,
      shortBio: "Lorem Impsu, LoremImpsu Lorem Impsu. Lorem Impsu Lorem Impsu Lorem Impsu, Lorem Impsu Lorem Impsu."
    },
    {
      id: 3,
      name: "JANCLISMO",
      localization: "João Pessoa-PB",
      members: 93,
      meetings: 1623,
      shortBio: "Lorem Impsu, LoremImpsu Lorem Impsu. Lorem Impsu Lorem Impsu Lorem Impsu, Lorem Impsu Lorem Impsu."
    },
    {
      id: 4,
      name: "CINTOUR",
      localization: "Bayeux-PB",
      members: 21,
      meetings: 63,
      shortBio: "Lorem Impsu, LoremImpsu Lorem Impsu. Lorem Impsu Lorem Impsu Lorem Impsu, Lorem Impsu Lorem Impsu."
    }
  ];

  const show = listGroup.map(group => {
    return (
      <GroupResult
        key={group.id}
        name={group.name}
        localization={group.localization}
        members={group.members}
        meetings={group.meetings}
        shortBio={group.shortBio}
      />
    );
  });

  return (
    <Background>
      <StandardHeader
        navigation={navigation}
        title="Encontrar grupos"
      />
      <Body>
        <Scroll>
          {show}
        </Scroll>
      </Body>
    </Background>
  );
}