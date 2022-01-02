import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BtnBack = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  left: 25px;
`;

export const Btn = styled.TouchableOpacity`
  width: 80%;
  align-items: center;
  padding: 10px;
  background-color: #ddd;
  margin: 10px;
`;

export const Label = styled.Text`
  font-size: 17px;
  color: #686868;
  margin: 3px;
`;

export const Footer = styled.View`
  flex: 0.3;
`;