import React from 'react'
import { SafeAreaView,
View,
Text,
Image,
StyleSheet,
TouchableOpacity,
} from 'react-native'


import styles from './styles'


export default function FirstScreen ({navigation}) {

    const onBtnLogin = () => {
        // se for pressionado o botao
        // da tela de 'FirstScreen' será aberta a tela
        // para Login
        navigation.navigate('Login')
      }
    

    return(
    <SafeAreaView style= {styles.SafeArea} >
        <View style={styles.View}>

        <Image  style= {styles.ImageHome}
            source={require("../../../assets/vsc.png")}
        />

    <Text style={styles.Text}>Bem Vindo!</Text>
    <TouchableOpacity style={styles.button} onPress={() => onBtnLogin()}>
          <Text style={styles.buttonTitle}>Abrir</Text>
        </TouchableOpacity>

        </View>
        </SafeAreaView>
    )
}
