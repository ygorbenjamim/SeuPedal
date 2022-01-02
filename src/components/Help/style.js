import styled from 'styled-components/native';

export const BtnHelp = styled.TouchableOpacity`
  position: absolute;
  bottom: 25px;
  right: 25px;
  padding: 14px;
  border-radius: 6px;
  background-color: #e3e3e3;
`;

export const Menu = styled.Modal``;

export const BodyMenu = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
`;

export const BtnBack = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  left: 25px;
`;

export const ContainerBtn = styled.View`
  background-color: #fff;
  padding-bottom: 25px;
  border-radius: 8px;
  width: 75%;
  align-items: center;
  justify-content: center;
`;

export const BtnOptions = styled.TouchableOpacity`
  padding: 30px;
  border-bottom-width: 3px;
  border-color: green;
  width: 87%;
  align-items: center;
`;

export const LabelOptions = styled.Text`
  font-size: 20px;
  color: #686868;
`;