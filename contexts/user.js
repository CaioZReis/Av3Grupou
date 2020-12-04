import React, { createContext, useState, useEffect } from 'react';

import firebase from 'firebase';
import 'firebase/auth';

const UsuarioContext = createContext({});

const UsuarioProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [group, setGroup] = useState(null);
  const [route, setRoute] = useState(null);
  const [novaSenha, setNovaSenha] = useState(null);
  const [confirmSenha,setConfirmSenha] = useState(null);
 

  const changeNovaSenha = (novaSenha) => {
    setNovaSenha(novaSenha)
  }
  const changeConfirmSenha = (confirmSenha) => {
    setConfirmSenha(confirmSenha)
  }

  const ListenAuth = (userState) => {
    setUser(userState)
  }
  const changeGroup = (groupState) => {
    setGroup(groupState)
  }
  const changeRoute = (route) => {
    setRoute(route)
  }

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged(ListenAuth);
    return listener;
  }, [])


  const signIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(resp => {
         console.warn(resp)
      })
      .catch(err => {
        console.warn(err)
      })
  }

  const signUp = (email, password) => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(resp => {
        console.warn(resp)
      })
      .catch(err => {
        console.warn(err)
      })
  }

  const signOut = () => {
    firebase.auth().signOut()
      .then(resp => {
        console.warn('Usuario Deslogado com sucesso!')
      })
      .catch(err => {
        console.warn(err)
      })
  }

  const esqueciSenha = (email) => {
    firebase.auth().sendPasswordResetEmail(
      email )
      .then(res => {
        console.warn('Favor olhar o email '+ email +' para fazer a troca de senha ');
      })
      .catch(erro => {
       console.warn('Erro ao recuperar senha ',erro)
      });
    }
    const trocarSenha = (novaSenha) => {
      var user1 = firebase.auth().currentUser;
      novaSenha=btoa(novaSenha)
      console.log(user1)
      user1.updatePassword(novaSenha).then(function() {
    // Update successful.
        console.warn('Senha Trocada' + user1)
      }).catch(function(error) {
        console.warn('Erro Inesperado')
      });
    }
  return (
    <UsuarioContext.Provider value={{ user, group, route,novaSenha, confirmSenha, changeNovaSenha, changeConfirmSenha, signIn, signOut, signUp, changeGroup, changeRoute,esqueciSenha,trocarSenha}}>
      {children}
    </UsuarioContext.Provider>
  )
}


export { UsuarioContext, UsuarioProvider }