import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex: 1;
`;

export const ImgBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const ContainerHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

export const BtnMenu = styled.TouchableOpacity`
  padding: 20px;
`;

export const Mark = styled.Text`
  justify-content: center;
  padding: 20px;
  font-size: 15px;
  color: #686868;
`;

export const ContainerImg = styled.View`
  width: 130px;
  height: 130px;
  border-radius: 65px;
  margin-top: 10px;
  border-width: 3px;
  border-color: #008a00;
  align-items: center;
`;

export const ImageProfile = styled.Image`
  width: 124px;
  height: 124px;
  border-radius: 64px;
`;

export const BtnEditImage = styled.TouchableOpacity`
  position: absolute;
  bottom: 5px;
`;

export const UserName = styled.Text`
  margin-top: 20px;
  font-size: 23px;
  color: #686868;
`;

export const FormHome = styled.Image`
  width: 100%;
  height: 85px;
  position: absolute;
  bottom: 0px;
`;

export const Body = styled.View`
  flex: 0.5;
  background-color: #eee;
  align-items: center;
  justify-content: center;
`;

export const ContainerBtn = styled.View`
  align-items: center;
  width: 100%;
`;

export const BtnMode = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin: 8px;
  padding: 10px;
  width: 60%;
  border-width: 3px;
  border-color: #008a00;
  border-radius: 3px;
`;

export const LabelMode = styled.Text`
  font-size: 17px;
  color: #008a00;
`;

export const Footer = styled.View`
  flex: 0.5;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

export const BtnPlay = styled.TouchableOpacity``;

export const LabelPlay = styled.Text`
  margin-top: 10px;
  font-size: 17px;
  color: #686868;
`;