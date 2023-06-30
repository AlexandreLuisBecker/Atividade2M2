// importando as bibliotecas
import React, { useEffect, useState } from 'react'
import {
  Alert,
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import styles from './styles'
import { firebase } from '../../firebase/config'
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default function LivroScreen({ navigation, ...props }) {
    const [entities, setEntities] = useState([])

    const entityRef = firebase.firestore().collection('Livro')
    const userId = props.extraData.id
    

    useEffect(() => {
      /**
       * buscando na coleção 'entities' os
       * documentos que estejam relacionados
       * ao usuário logado
       */
      entityRef.where('authorId', '==', userId).onSnapshot(
        querySnapshot => {
          const newEntities = []
          querySnapshot.forEach(doc => {
            const entity = doc.data()
            entity.id = doc.id
            // envio o documento para o array
            newEntities.push(entity)
          })
          setEntities(newEntities)
        },
        error => {
          console.log(error)
        }
      )
    }, [])
  
    const onAdicionarPress = () => {
        navigation.navigate('CreateLivro')
      }
  
    const onEditButtonPress = itemId => {
      // abrindo a tela para edição do item e
      // enviando o ID do item como parâmetro
      navigation.navigate('EditLivro', { itemId })
    }
  
    const onDelButtonPress = itemId => {
      Alert.alert(
        'Apagar Item',
        'Você tem certeza?',
        [
          {
            text: 'Sim',
            /**
             * se o usuário clicar em 'Sim' irá executar
             * a rotina para exclusão do documento
             */
            onPress: () => {
              // buscando pelo documento que possui o ID informado
              const entityRef = firebase
                .firestore()
                .collection('Livro')
                .doc(itemId)
              // iniciando o processo para a exclusão do documento
              entityRef
                .delete()
                .then(res => {
                  console.log(`O item ${itemId} foi removido`)
                })
                .catch(error => {
                  console.log(error)
                })
            }
          },
          {
            text: 'Não',
            onPress: () => console.log('Nenhum item removido!'),
            style: 'cancel'
          }
        ],
        {
          cancelable: true
        }
      )
    }
    
    

const renderEntity = ({ item, index}) => {
    return (
     
    
      <View style={styles.entityContainer}>
        <Text style={styles.entityText}>
          {index}. {}
          <TouchableOpacity
            style={styles.buttonBB}
            onPress={() => onEditButtonPress(item.id)}
          >
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBa}
            onPress={() => onDelButtonPress(item.id)}
          >
            <Text style={styles.buttonText}>Del</Text>
          </TouchableOpacity> 
        </Text>
      </View>
    )
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

    <View style={styles.container}>
       <Text  style={styles.textCadastroCD}>
      Listagem
    </Text>
    <Text style={styles.textOp} >
   Livros
    </Text>

      <View style={styles.formContainer}>
     
        <TouchableOpacity style={styles.buttonAd} onPress={onAdicionarPress}>
          <Text style={styles.buttonText}>Adicionar!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainerS}>
        <FlatList
          data={entities}
          renderItem={renderEntity}
          keyExtractor={item => item.id}
          removeClippedSubviews={true}
        />
      </View>
    </View>
    </LinearGradient>
      </KeyboardAwareScrollView>
  )
}