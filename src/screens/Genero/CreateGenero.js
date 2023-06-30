// importando as bibliotecas
import React, { useState, useEffect } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'
import { firebase } from '../../firebase/config'

import { LinearGradient } from 'expo-linear-gradient';


export default function CreateGenero({navigation, ...props}) {

  const onVoltarPress = () => {
    navigation.navigate('Genero')
  }
  const [Genero, setGenero] = useState('')
  const [SubGenero, setSubGenero] = useState('') 
  const [Descricao, setDescricao] = useState('')
  const [Caracteristica, setCaracteristica] = useState('')
  const [Complemento, setComplemento] = useState('')

  const entityRef = firebase.firestore().collection('Genero')
  

  const userId = firebase.auth().currentUser.uid;

      const onAddButtonPress = () => {
        firebase
        
        const timeStamp = firebase.firestore.FieldValue.serverTimestamp()

          // recuperando o ID do usuário no Firebase
            const data = {
              authorId:userId,
              createAt: timeStamp,
              updateAt: timeStamp,
              Genero,
              SubGenero,
              Descricao,
              Caracteristica,
              Complemento
            }
            // vinculando a constante 'usersRef' à
            // coleção 'users' do Firestore
            const usersRef = firebase.firestore().collection('Genero')
          
            // gravando os dados do usuário criado na
            // coleção 'Genero' dentro do Firestore
            usersRef
              .doc()
              .set(data)
              // testando a gravação do documento
              .then(() => {
                // se o documento foi gravado com sucesso
                // redireciona o usuário para a página 'Home'
                // e envia os dados do usuário para a nova
                // página
                navigation.navigate('Genero', { Genero: data })
              })
              .catch(error => {
                alert(error)
              })
         
          }
          
      

  return (



 
     <KeyboardAwareScrollView
    style={{
      display: 'flex',
      width: '100%',
      backgroundColor: '#fff'
    }}
    keyboardShouldPersistTaps="always"

  >
       <LinearGradient colors={['#0000CD', '#87CEFA', '#fff']}>

        <Image
          style={styles.logo}
          source={require('../../../assets/icon2.png')}
        />
        <View style={styles.footerView}>
          <Text style={styles.textCadastro}>Criação Genero</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Genero"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setGenero(text)}
          value={Genero}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="SubGenero"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setSubGenero(text)}
          value={SubGenero}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
  
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setDescricao(text)}
          value={Descricao}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

            <TextInput
          style={styles.input}
          placeholder="Caracteristica"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setCaracteristica(text)}
          value={Caracteristica}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Complemento"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setComplemento(text)}
          value={Complemento}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
       
        <TouchableOpacity
          style={styles.button}
          onPress={() => onAddButtonPress()}
        >
          <Text style={styles.buttonTitle}>Criar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onVoltarPress()}
          >
          <Text style={styles.buttonTitle}>Voltar</Text>
        </TouchableOpacity>

        </LinearGradient>
      </KeyboardAwareScrollView>
   
  )
}