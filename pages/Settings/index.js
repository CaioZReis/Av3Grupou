import React, { useState, useContext } from 'react';
import { Text } from 'react-native';

import { UsuarioContext } from '../../contexts/user';

import {
  Container,
  Texto,
  ContainerButtons,
  Button,
  ButtonText,
  InputTexto,
  Input
} from './styles';



const Settings = () => {

  
  const { signOut, changeNovaSenha, changeConfirmSenha } = useContext(UsuarioContext)
  const { trocarSenha } = useContext(UsuarioContext)
  const { novaSenha, setNovaSenha } = useState(null)
  const { confirmSenha, setConfirmSenha } = useState(null)

  function trocarSenha1(novaSenha, confirmSenha) {
    if(confirmSenha==novaSenha){
      trocarSenha(novaSenha)
    } else {
      console.warn('Senhas Não Coincidem')
    }
  }

  return (
    <Container>
    <InputTexto>Nova Senha</InputTexto>
      <Input
        placeholder="Digite Nova Senha"
        secureTextEntry={true}
        onChangeText={text => changeNovaSenha(text)}
        value={novaSenha}
      />
      <InputTexto>Confirme Nova Senha</InputTexto>
      <Input
        placeholder="Confirme a Senha"
        secureTextEntry={true}
        onChangeText={text => changeConfirmSenha(text)}
        value={confirmSenha}
      />
    <ContainerButtons>
      <Button invert={true} onPress={()=> {trocarSenha1(novaSenha, confirmSenha)}}>
        <ButtonText invert={true}>
          Trocar Senha
        </ButtonText>
      </Button>
    </ContainerButtons>
    <ContainerButtons>
      <Button invert={true}
        onPress={() => { signOut() }}
      >
        <ButtonText invert={true}>Sair</ButtonText>
      </Button>
    </ContainerButtons>

  </Container>
  )
}

export default Settings