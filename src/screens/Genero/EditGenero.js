// importando as bibliotecas
import React, { useEffect, useState } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { firebase } from '../../firebase/config'

export default function EditGenero({ navigation, ...props }) {
  const [entity, setEntity] = useState({
    authorId: '',
    text: '',
    createAt: {
      nanoseconds: '',
      seconds: ''
    }
  })
  const [Genero, setGenero] = useState('')
  const [SubGenero, setSubGenero] = useState('') 
  const [Descricao, setDescricao] = useState('')
  const [Caracteristica, setCaracteristica] = useState('')
  const [Complemento, setComplemento] = useState('')

  const userId = firebase.auth().currentUser.uid;
  const entityRef = firebase.firestore().collection('Genero')

console.log
  useEffect(() => {
    entityRef
      .doc(props.route.params.itemId)
      .get()
      .then(firestoreDocument => {
        if (!firestoreDocument.exists) {
          alert('Item não encontrado!')
          return
        }
        const item = firestoreDocument.data()
        setItemText(genero.text)
        setEntity(genero)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])



  // Onde iremos realizar a atualização do documento
  const onAlterarButtonPress = () => {
    const entityRef = firebase
      .firestore()
      .collection('Genero')
      .doc(props.route.params.itemId)
    // atualizando o documento
    const timeStamp = firebase.firestore.FieldValue.serverTimestamp()
    entityRef
      .set({
          authorId:userId,
          createAt: entity.createAt,
          updateAt: timeStamp,
          Genero: Genero,
          SubGenero: SubGenero,
          Descricao: Descricao,
          Caracteristica: Caracteristica,
          Complemento: Complemento
       
      })
      .then(() => {
        navigation.navigate('Genero')
      })
      .catch(error => {
        console.log(error)
      })
  }
 

  // Onde iremos poder voltar para a 'Home'
  const onVoltarButtonPress = () => {
    navigation.navigate('Genero')
  }

  return (
    <View style={styles.container}>

      

<TextInput
          style={styles.inputEdit}
          placeholder="Genero"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setGenero(text)}
          value={Genero}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputEdit}
          placeholder="SubGenero"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setSubGenero(text)}
          value={SubGenero}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
  
        <TextInput
          style={styles.inputEdit}
          placeholder="Descrição"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setDescricao(text)}
          value={Descricao}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

            <TextInput
          style={styles.inputEdit}
          placeholder="Caracteristica"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setCaracteristica(text)}
          value={Caracteristica}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.inputEdit}
          placeholder="Complemento"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setComplemento(text)}
          value={Complemento}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />




      <View style={styles.viewButtons}>
        <TouchableOpacity
          style={styles.buttonEdit}
          onPress={() => onVoltarButtonPress()}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonEdit}
          onPress={() => onAlterarButtonPress()}
        >
          <Text style={styles.buttonText}>Alterar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}