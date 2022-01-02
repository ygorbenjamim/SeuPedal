import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
`;

export const Scroll = styled.ScrollView`
  width: 90%;
`;

export const Container = styled.View`
  margin-top: 35px;
  padding: 10px;
  width: 100%;
  background-color: #eee;
  border-radius: 15px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: #686868;
  width: 90%;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 90%;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-color: #686868;
  font-size: 19px;
  color: #333;
`;

export const BtnSelect = styled.TouchableOpacity`
  
`;

export const BtnMark = styled.TouchableOpacity`
  margin-top: 25px;
  padding: 10px;
`;

export const LabelMark = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: #008a00;
`;