import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import addressImageBackground from '../../assets/background-profile.png';
import addressImageProfile from '../../assets/profileOne.jpg';
import addressImageForm from '../../assets/form.png';
import Help from '../../components/Help';
import {
  Background,
  Header,
  ImgBackground,
  ContainerHeader,
  BtnMenu,
  Mark,
  ContainerImg,
  ImageProfile,
  BtnEditImage,
  UserName,
  FormHome,
  Body,
  ContainerBtn,
  BtnMode,
  LabelMode,
  Footer,
  BtnPlay,
  LabelPlay
} from './style';

export default function Home({ navigation }) {
  return (
    <Background>
      <Header>
        <ImgBackground source={addressImageBackground}>
          <ContainerHeader>
            <BtnMenu onPress={() => navigation.openDrawer()}>
              <Icon
                name="bars"
                size={32}
                color="#008a00"
              />
            </BtnMenu>
            <Mark>Seu Pedal</Mark>
          </ContainerHeader>
          <ContainerImg>
            <ImageProfile source={addressImageProfile} />
            <BtnEditImage>
              <Icon
                name="camera"
                size={24}
                color="#e3e3e3"
              />
            </BtnEditImage>
          </ContainerImg>
          <UserName>User Name</UserName>
          <FormHome source={addressImageForm} />
        </ImgBackground>
      </Header>
      <Body>
        <ContainerBtn>
          <BtnMode onPress={() => navigation.navigate("Individual")}>
            <LabelMode>Individual</LabelMode>
          </BtnMode>
          <BtnMode onPress={() => navigation.navigate("Group")}>
            <LabelMode>Grupo</LabelMode>
          </BtnMode>
        </ContainerBtn>
      </Body>
      <Footer>
        <BtnPlay onPress={() => navigation.navigate("NewTrack")}>
          <Icon
            name="play-circle-o"
            size={64}
            color="#008a00"
          />
        </BtnPlay>
        <LabelPlay>Iniciar novo trajeto</LabelPlay>
      </Footer>

      <Help />
    </Background>
  );
}