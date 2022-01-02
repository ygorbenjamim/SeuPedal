import React, { useState } from 'react';
import { Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageURL from '../../assets/group.png';
import ImageDemo from '../../assets/image.jpg';
import {
  BtnRoute,
  Detail,
  ImageGroup,
  ContainerText,
  Title,
  Label,
  Scroll,
  ImgBackground,
  HeaderModal,
  BtnBack,
  TopBody,
  ShortBio,
  ContainerMoreInfo,
  MoreInfo,
  BodyModal,
  TitleName,
  FooterModal,
  TopFooter,
  BottomFooter,
  ContainerImage,
  BtnImage,
  ShowImage
} from './style';

export default function GroupResult({
  name,
  localization,
  members,
  meetings,
  shortBio
}) {

  const [control, setControl] = useState(false);

  return (
    <>
      <BtnRoute onPress={() => setControl(true)}>
        <Detail></Detail>
        <ImageGroup source={ImageURL} />
        <ContainerText>
          <Title>{name}</Title>
          <Label>{localization}</Label>
          <Label>{members} Membros</Label>
          <Label>{meetings} Encontros</Label>
        </ContainerText>
      </BtnRoute>

      <Modal
        visible={control}
        animationType="fade"
      >
        <Scroll>
          <HeaderModal>
            <ImgBackground source={ImageURL}>
              <BtnBack onPress={() => setControl(false)}>
                <Icon
                  name="arrow-left"
                  size={32}
                  color="#008a00"
                />
              </BtnBack>
            </ImgBackground>
          </HeaderModal>
          <BodyModal>
            <TopBody>
              <ContainerMoreInfo>
                <Icon
                  name="group"
                  size={20}
                  color="#333"
                />
                <MoreInfo>{members} Membros</MoreInfo>
                <Icon
                  name="map-marker"
                  size={20}
                  color="#333"
                />
                <MoreInfo>{localization}</MoreInfo>
              </ContainerMoreInfo>
            </TopBody>
            <TitleName>{name}</TitleName>
            <ShortBio>{shortBio}</ShortBio>
          </BodyModal>
          <FooterModal>
            <TopFooter>
              <Icon
                name="image"
                size={40}
                color="#686868"
              />
              <Label>Imagens</Label>
            </TopFooter>
            <BottomFooter>
              <ContainerImage>
                <BtnImage>
                  <ShowImage source={ImageDemo} />
                </BtnImage>
                <BtnImage>
                  <ShowImage source={ImageDemo} />
                </BtnImage>
                <BtnImage>
                  <ShowImage source={ImageDemo} />
                </BtnImage>
              </ContainerImage>
              <ContainerImage>
                <BtnImage>
                  <ShowImage source={ImageDemo} />
                </BtnImage>
                <BtnImage>
                  <ShowImage source={ImageDemo} />
                </BtnImage>
                <BtnImage>
                  <ShowImage source={ImageDemo} />
                </BtnImage>
              </ContainerImage>
            </BottomFooter>
          </FooterModal>
        </Scroll>
      </Modal>
    </>
  );
}