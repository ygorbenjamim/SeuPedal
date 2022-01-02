import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Drawer } from 'react-native-paper';
import { AuthContext } from '../Autentication';
import {
  Background,
  Container,
  styles
} from './style';

export default function DrawerContent({ ...props }) {

  // Variáveis de controle
  const { signOut } = React.useContext(AuthContext);

  function logOut() {
    props.navigation.closeDrawer(true);
    setTimeout(() => { signOut() }, 500);
  }

  return (
    <Background>
      <DrawerContentScrollView {...props}>
        <Container>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Início"
              labelStyle={{
                color: '#333'
              }}
              icon={({ size }) => (
                <Icon
                  name="home"
                  color="#686868"
                  size={size}
                />
              )}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              label="Eventos"
              labelStyle={{
                color: '#333'
              }}
              icon={({ size }) => (
                <Icon
                  name="calendar"
                  color="#686868"
                  size={size}
                />
              )}
              onPress={() => {
                props.navigation.navigate('Events');
              }}
            />
            <DrawerItem
              label="Manutenção"
              labelStyle={{
                color: '#333'
              }}
              icon={({ size }) => (
                <Icon
                  name="wrench"
                  color="#686868"
                  size={size}
                />
              )}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              label="Ajuda"
              labelStyle={{
                color: '#333'
              }}
              icon={({ size }) => (
                <Icon
                  name="question-circle"
                  color="#686868"
                  size={size}
                />
              )}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
          </Drawer.Section>
        </Container>
      </DrawerContentScrollView>

      {/* Botão para logout */}
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Sair"
          labelStyle={{
            color: '#333'
          }}
          icon={({ size }) => (
            <Icon
              name="sign-out"
              color="#686868"
              size={size}
            />
          )}
          onPress={logOut}
        />
      </Drawer.Section>
    </Background>
  );
}
