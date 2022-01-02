import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
`;

export const Body = styled.View`
  flex: 1;
`;

export const ContainerTop = styled.View`
  flex: 0.3;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
`;

export const ContainerBottom = styled.View`
  flex: 0.7;
  padding-left: 25px;
  justify-content: center;
`;

export const LabelH1 = styled.Text`
  font-size: 27px;
  color: #000;
`;

export const LabelH2 = styled.Text`
  font-size: 18px;
  color: #333;
`;

export const LabelH3 = styled.Text`
  font-size: 18px;
  color: #686868;
  padding-bottom: 20px;
  margin-bottom: 20px;
  width: 90%;
  border-bottom-width: 1px;
  border-color: #ddd;
`;

export const Scroll = styled.ScrollView``;

export const Footer = styled.View`
  flex: 0.2;
  align-items: center;
  justify-content: center;
`;

export const BtnNewDatas = styled.TouchableOpacity`
  padding: 10px;
  width: 70%;
  border-radius: 10px;
  background-color: #008a00;
  align-items: center;
  justify-content: center;
`;

export const LabelNewDatas = styled.Text`
  font-size: 17px;
  color: #fff;
`;