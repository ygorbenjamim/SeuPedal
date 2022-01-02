import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  BtnBack,
  Title
} from './style';

export default function StandardHeader({
  title,
  navigation
}) {
  return (
    <Container>
      <BtnBack onPress={() => navigation.goBack()}>
        <Icon
          name="caret-left"
          size={53}
          color="#fff"
        />
      </BtnBack>
      <Title>{title}</Title>
    </Container>
  );
}