import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
`;

export const Body = styled.View`
  flex: 1;
  background-color: #eee;
  align-items: center;
  justify-content: center;
`;

export const ContainerBtn = styled.View`
  flex-direction: row;
  width: 80%;
`;

export const BtnOptions = styled.TouchableOpacity`
  flex: 1;
  padding: 15px;
  margin: 10px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;

export const LabelOptions = styled.Text`
  font-size: 17px;
  color: #686868;
  text-align: center;
`;