import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  BtnHelp,
  Menu,
  BodyMenu,
  BtnBack,
  ContainerBtn,
  BtnOptions,
  LabelOptions
} from './style';

export default function Help() {

  const [helpMenu, setHelpMenu] = useState(false);

  return (
    <>
      <BtnHelp onPress={() => setHelpMenu(true)}>
        <Icon
          name="exclamation"
          size={36}
          color="#686868"
        />
      </BtnHelp>

      <Menu
        visible={helpMenu}
        transparent={true}
        animationType="fade"
      >
        <BodyMenu>
          <BtnBack onPress={() => setHelpMenu(false)}>
            <Icon
              name="arrow-left"
              size={32}
              color="#fff"
            />
          </BtnBack>
          <ContainerBtn>
            <BtnOptions>
              <LabelOptions>Sinalizar</LabelOptions>
            </BtnOptions>
            <BtnOptions>
              <LabelOptions>Imprevistos</LabelOptions>
            </BtnOptions>
            <BtnOptions>
              <LabelOptions>Quebrou</LabelOptions>
            </BtnOptions>
          </ContainerBtn>
        </BodyMenu>
      </Menu>
    </>
  );
}