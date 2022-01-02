import styled from 'styled-components/native';

export const BtnRoute = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
  padding: 20px;
  background-color: #ddd;
  border-bottom-width: 1px;
  border-color: #008a00;
`;

export const Detail = styled.View`
  margin-right: 20px;
  width: 5px;
  height: 70%;
  background-color: #fff;
`;

export const ImageGroup = styled.Image`
  width: 113px;
  height: 73px;
`;

export const ContainerText = styled.View`
  margin-left: 15px;
`;

export const Title = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #333;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #686868;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
`;

export const ImgBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const HeaderModal = styled.View`
  flex: 1;
  height: 250px;
`;

export const BtnBack = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  left: 25px;
`;

export const BodyModal = styled.View`
  flex: 1;
  height: 300px;
  padding: 20px;
`;

export const TopBody = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 15px;
`;

export const ContainerMoreInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const MoreInfo = styled.Text`
  font-size: 15px;
  color: #333;
  margin-left: 10px;
  margin-right: 10px;
`;

export const TitleName = styled.Text`
  font-size: 23px;
  font-weight: bold;
  color: #686868;
  margin-bottom: 20px;
`;

export const ShortBio = styled.Text`
  font-size: 17px;
  text-align: justify;
  color: #686868;
  margin-bottom: 20px;
`;

export const FooterModal = styled.View`
  flex: 1;
`;

export const TopFooter = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #eee;
`;

export const BottomFooter = styled.View`

`;

export const ContainerImage = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BtnImage = styled.TouchableOpacity`
  margin-bottom: 2px;
`;

export const ShowImage = styled.Image`
  width: 130px;
  height: 130px;
`;