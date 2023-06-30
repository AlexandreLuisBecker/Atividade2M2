// realizando as importações
import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  HomeScreen, LoginScreen, RegistrationScreen, FirstScreen, LivroScreen, 
  EditoraScreen, AutorScreen, GeneroScreen, CreateGenero, EditGenero,
  CreateEditora, CreateAutor, EditAutor, EditEditora, EditLivro, CreateLivro,
  } from './src/screens'
import { decode, encode } from 'base-64'
import { firebase } from './src/firebase/config'


if (!global.btoa) {
  global.btoa = encode
}

if (!global.atob) {
  global.atob = decode
}

// criando um objeto para a pilha de navegação
const Stack = createStackNavigator()

// criando a aplicação
export default function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  /**
   * criando uma estrutura para recuperar os
   * os dados do usuário autenticado no banco
   * e gravar localmente para que, uma vez
   * feito o login, o usuário vá sempre para
   * a Home (a menos que limpe os dados do app)
   */

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users')
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        /**
         * recuperando do 'Firestore' os dados do
         * documento do usuário logado e enviando
         * estes dados para uma constante
         */
        usersRef
          .doc(user.uid)
          .get()
          .then(document => {
            const userData = document.data()
            setLoading(false)
            /**
             * enviando o conteúdo da constante 'userData'
             * (escopo local) para a constante do 'app'
             * chamada 'user'
             */
            setUser(userData)
          })
          .catch(error => {
            setLoading(false)
          })
      } else {
        setLoading(false)
      }
    })
  }, [])

  if (loading) {
    return <></>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{ headerStyle: { backgroundColor: '#DCDCDC' }}} >
      <Stack.Screen name="First" component={FirstScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            
          <Stack.Screen name="Livro">
            {props => <LivroScreen {...props} extraData={user} />}
          </Stack.Screen>
          <Stack.Screen name="CreateLivro" component={CreateLivro} />
          <Stack.Screen name="EditLivro">
              {props => <EditLivro {...props} />}
            </Stack.Screen>


          <Stack.Screen name="Autor">
            {props => <AutorScreen {...props} extraData={user} />}
          </Stack.Screen>
          <Stack.Screen name="CreateAutor" component={CreateAutor} />
          <Stack.Screen name="EditAutor">
              {props => <EditAutor {...props} />}
            </Stack.Screen>
          
          <Stack.Screen name="Editora">
            {props => <EditoraScreen {...props} extraData={user} />}
          </Stack.Screen>   
          <Stack.Screen name="CreateEditora" component={CreateEditora} />
          <Stack.Screen name="EditEditora">
              {props => <EditEditora {...props} />}
            </Stack.Screen>


          <Stack.Screen name="Genero">
            {props => <GeneroScreen {...props} extraData={user} />}
          </Stack.Screen>
          <Stack.Screen name="CreateGenero" component={CreateGenero} />
          <Stack.Screen name="EditGenero">
              {props => <EditGenero {...props} />}
            </Stack.Screen>
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}