/**
 * Projeto Seu Pedal
 * https://github.com/ygorbenjamim/Seu-pedal.git
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// Importação do componente de autenticação
import { AuthContext } from './src/components/Autentication';

// Importação do menu lateral customizado
import DrawerContent from './src/components/DrawerContent';

// Importação de telas
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Individual from './src/screens/Individual';
import Group from './src/screens/Group';
import NewTrack from './src/screens/NewTrack';
import FindGroups from './src/screens/FindGroups';
import Training from './src/screens/Training';
import Trail from './src/screens/Trail';
import MyRoute from './src/screens/MyRoute';
import MyDatas from './src/screens/MyDatas';
import MarkPedal from './src/screens/MarkPedal';
import Events from './src/screens/Events';
import EventsList from './src/screens/EventsList';

// Criação de variáveis de navegação
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {

  // Variáveis para autenticação de Login
  const [userToken, setUserToken] = useState(null);
  const authContext = useMemo(() => ({
    signIn: () => {
      setUserToken('Deus é fiel');
    },
    signOut: () => {
      setUserToken(null);
    }
  }), []);

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        {userToken != null ? (
          <>
            <Drawer.Navigator
              drawerContent={props => <DrawerContent {...props} />}
              initialRouteName="Home"
            >
              <Drawer.Screen
                name="Home"
                component={Home}
              />
              <Drawer.Screen
                name="Individual"
                component={Individual}
              />
              <Drawer.Screen
                name="Group"
                component={Group}
              />
              <Drawer.Screen
                name="NewTrack"
                component={NewTrack}
              />
              <Drawer.Screen
                name="FindGroups"
                component={FindGroups}
              />
              <Drawer.Screen
                name="Training"
                component={Training}
              />
              <Drawer.Screen
                name="Trail"
                component={Trail}
              />
              <Drawer.Screen
                name="MyRoute"
                component={MyRoute}
              />
              <Drawer.Screen
                name="MyDatas"
                component={MyDatas}
              />
              <Drawer.Screen
                name="MarkPedal"
                component={MarkPedal}
              />
              <Drawer.Screen
                name="Events"
                component={Events}
              />
              <Drawer.Screen
                name="EventsList"
                component={EventsList}
              />
            </Drawer.Navigator>
          </>
        ) : (
          <>
            <Stack.Navigator>
              <Stack.Screen
                options={{
                  headerShown: false
                }}
                name="Login"
                component={Login}
              />
            </Stack.Navigator>
          </>
        )}
      </AuthContext.Provider>
    </NavigationContainer>
  );
}