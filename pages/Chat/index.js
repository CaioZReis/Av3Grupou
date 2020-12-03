import React, { useState, useContext, useEffect } from 'react';
import { Text,TouchableHighligth } from 'react-native';

import { UsuarioContext } from '../../contexts/user';

import {
  Container,
  Texto,
  ContainerButtons,
  Button,
  ButtonText,
  Input,
  ContainerMessages,
  Message,
  MessageUser,
  MessageWrapper
} from './styles';

import firebase from 'firebase';
import 'firebase/firestore';

const Chat = () => {

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const { user, group } = useContext(UsuarioContext);


  const ListenUpdateMessages = (snap) => {

    const data = snap.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
    // console.log(data)
    setMessages(data.filter(msg => msg.group === group))
  }


  useEffect(() => {
    const listener = firebase.firestore()
      .collection('mensagens').onSnapshot(ListenUpdateMessages)

    return () => listener()
  }, [])



  const handleAddMessages = () => {
    if (newMessage == "") {
      console.warn('Preencha o campo')
      return
    }

    try {
      firebase.firestore().collection('mensagens').add({
        texto: newMessage,
        lida: false,
        usuario: user.email,
        group
      })
      setNewMessage("");
    } catch (err) {
      console.warn("erro de comunicação, tente mais tarde");
    }
  }

  return (
    <Container>
      <ContainerMessages>
        {messages.map(message => (
          message.usuario === user.email
          ? <MessageWrapper key={message.id}>
              <MessageUser>{message.usuario}</MessageUser>
              <Message>{message.texto}</Message>
            </MessageWrapper>
          : <MessageWrapper invert={true} key={message.id}>
              <MessageUser>{message.usuario}</MessageUser>
              <Message>{message.texto}</Message>
            </MessageWrapper>
        ))}
      </ContainerMessages>
      <Texto>{user.email}</Texto>
      <ContainerButtons>
        <Input
          placeholder="Digite sua mensagem"
          onChangeText={text => setNewMessage(text)}
          value={newMessage}
        />
        <Button invert={true}
          onPress={() => { handleAddMessages() }}
        >
          <ButtonText invert={true}>Enviar</ButtonText>
        </Button>
      </ContainerButtons>
    </Container>
  )
}

export default Chat