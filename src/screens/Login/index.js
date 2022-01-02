import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../../components/Autentication';
import addressImage from '../../assets/background-login.jpg';
import {
  Background,
  ImgBackground,
  Header,
  Body,
  Input,
  BtnLink,
  LabelLink,
  BtnLogin,
  BtnRegister,
  LabelRegister,
  LabelLogin,
  Footer,
  LabelWith,
  ContainerWith,
  BtnWith,
} from './style';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    { children}
  </TouchableWithoutFeedback>
);

export default function Login({ navigation }) {

  // Variáveis de login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = React.useContext(AuthContext);

  function sendFormLogin() {
    setTimeout(() => { signIn() }, 500);
  }

  return (
    <DismissKeyboard>
      <Background>
        <ImgBackground source={addressImage}>
          <Header>

          </Header>
          <Body>
            <Input
              value={email}
              onChangeText={email => setEmail(email)}
              placeholder={"Email"}
              autocorrect={false}
            />
            <Input
              value={password}
              onChangeText={password => setPassword(password)}
              placeholder="Senha"
              autocorrect={false}
              secureTextEntry={true}
            />
            <BtnLink>
              <LabelLink>Esqueceu a senha?</LabelLink>
            </BtnLink>
            <BtnLogin onPress={sendFormLogin}>
              <LabelLogin>Entrar</LabelLogin>
            </BtnLogin>
            <BtnRegister>
              <LabelRegister>Cadastre-se</LabelRegister>
            </BtnRegister>
          </Body>
          <Footer>
            <LabelWith>Entrar com</LabelWith>
            <ContainerWith>
              <BtnWith>
                <Icon
                  name="facebook"
                  size={32}
                  color="#333"
                />
              </BtnWith>
              <BtnWith>
                <Icon
                  name="google"
                  size={32}
                  color="#333"
                />
              </BtnWith>
            </ContainerWith>
          </Footer>
        </ImgBackground>
      </Background>
    </DismissKeyboard>
  );
}