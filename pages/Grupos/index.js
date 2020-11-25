import React, { useState, useContext, useEffect } from 'react';
import { Text } from 'react-native';
import { UsuarioContext } from '../../contexts/user';
import {
  Container,
  ContainerGrupos,
  Grupos
} from './styles';
import firebase from 'firebase';
import 'firebase/firestore';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TelaGrupos = () => {
    const { user, group, changeGroup, changeRoute } = useContext(UsuarioContext);
    const [groups, setGroups] = useState([]);

    useEffect(() => {
      const listener = firebase
        .firestore()
        .collection('grupos')
        .onSnapshot((snap) => {
          const data = snap.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
            }))
          setGroups(data)
        })
      return () => listener()
    }, [])

    const _changeGroup = (group) => {
      changeGroup(group)
      changeRoute('chat')
    }

    return (
      <Container>
        <Text> Escolha um Grupo Para </Text>
        <Text>{group || ''}</Text>
        <ContainerGrupos>
          {groups.map(grupo => (
            <TouchableOpacity onPress={() => _changeGroup(grupo.texto)}>
              <Text>{grupo.texto}</Text>
            </TouchableOpacity>  
          ))}
        </ContainerGrupos>
      </Container>
    )
}

export default TelaGrupos
