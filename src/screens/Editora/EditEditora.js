// importando as bibliotecas
import React, { useEffect, useState } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { firebase } from '../../firebase/config'

export default function EditEditora({ navigation, ...props }) {
  const [entity, setEntity] = useState({
    authorId: '',
    text: '',
    createAt: {
      nanoseconds: '',
      seconds: ''
    }
  })
  const [Nome, setNome] = useState('')
  const [Nota, setNota] = useState('') 
  const [Descricao, setDescricao] = useState('')
  const [Caracteristica, setCaracteristica] = useState('')
  const [Complemento, setComplemento] = useState('')

  const userId = firebase.auth().currentUser.uid;
  const entityRef = firebase.firestore().collection('Editora')

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
      .collection('Editora')
      .doc(props.route.params.itemId)
    // atualizando o documento
    const timeStamp = firebase.firestore.FieldValue.serverTimestamp()
    entityRef
      .set({
          authorId:userId,
          createAt: entity.createAt,
          updateAt: timeStamp,
          Nome: Nome,
          Nota: Nota,
          Descricao: Descricao,
          Caracteristica: Caracteristica,
          Complemento: Complemento
       
      })
      .then(() => {
        navigation.navigate('Editora')
      })
      .catch(error => {
        console.log(error)
      })
  }
 

  // Onde iremos poder voltar para a 'Home'
  const onVoltarButtonPress = () => {
    navigation.navigate('Editora')
  }

  return (
    <View style={styles.container}>

      

<TextInput
          style={styles.inputEdit}
          placeholder="Nome"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setNome(text)}
          value={Nome}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputEdit}
          placeholder="Nota"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setNota(text)}
          value={Nota}
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