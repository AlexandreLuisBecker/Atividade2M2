// importando as bibliotecas
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'


import { LinearGradient } from 'expo-linear-gradient';


export default function HomeScreen({ navigation}) {
 

  const onEditoraPress = () => {
    navigation.navigate('Editora')
  }
  
  const onAutorPress = () => {
    navigation.navigate('Autor')
  }
  
  const onLivroPress = () => {
    navigation.navigate('Livro')
  }
    const onGeneroPress = () => {
    navigation.navigate('Genero')
  }
  
  const onVoltarPress = () => {
    navigation.navigate('First')
  }
 return(
  <KeyboardAwareScrollView
  style={{
    display: 'flex',
    width: '100%',
    backgroundColor: '#fff'
  }}
  keyboardShouldPersistTaps="always"

>
  <View style={styles.View}>
  <LinearGradient colors={['#0000CD', '#87CEFA', '#fff']}>

  <Image
          style={styles.logo}
          source={require('../../../assets/icon3.png')}
        />
    <Text  style={styles.textCadastro}>
      Cadastro
    </Text>
    <Text style={styles.textOp} >
    Selecione uma opção para fazer o cadastro dos itens!
    </Text>

        <TouchableOpacity style={styles.button} onPress={() => onEditoraPress()}>
          <Text style={styles.buttonTitle}>Editoras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => onAutorPress()}>
          <Text style={styles.buttonTitle}>Autores</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => onLivroPress()}>
          <Text style={styles.buttonTitle}>Livros</Text>
        </TouchableOpacity>

           <TouchableOpacity style={styles.button} onPress={() => onGeneroPress()}>
          <Text style={styles.buttonTitle}>Generos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonVoltar} onPress={() => onVoltarPress()}>
          <Text style={styles.buttonTitle}>Sair</Text>
        </TouchableOpacity>

  </LinearGradient>
  </View>
  </KeyboardAwareScrollView>

 )
  
}