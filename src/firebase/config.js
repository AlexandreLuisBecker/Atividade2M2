// Importando a biblioteca do Firebase
import firebase from 'firebase/compat/app'
// Importando a biblioteca para autenticação
import 'firebase/compat/auth'
// Importando a biblioteca para o banco de dados
import 'firebase/compat/firestore'


// criando o objeto que irá conter os parametros de conexão com a aplicação Firebase

const firebaseConfig = {
    apiKey : 'AIzaSyBpT2oVX0sQUO5iRduVKo-CabKOpNBSRfw',
    authDomain : 'firebase-react-native-app.firebaseapp.com',
    databaseURL : 'https://fir-react-native-app-6c94e.firebaseio.com',
    projectId : 'fir-react-native-app-6c94e',
    appId : '1:179547153398:android:f57eb37ae7534df5cc9dd7'
}

// iniciando o firebase

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

// exportando o modulo

export {firebase}