import { StyleSheet } from 'react-native'

export default StyleSheet.create({
   SafeArea:{ 
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor: '#000',
   
      height: 900

   },
   View:{
      backgroundColor:'#000'
   },
   Text:{ 
      color:'#fff',
      marginTop: 50,
      marginBottom: 50,
      textDecorationStyle:'dashed',
      fontSize: 20,
      fontWeight: '500'
      
   }, 
   buttonTitle:{

      color:'#000',
      fontSize: 16,
      fontWeight: '500'
   },
   ImageHome:{ 
      width:100,
      height:100,

   },
   button:{
      backgroundColor:'#1E90FF',
      height:50,
      width: 100,
      borderRadius: 5,
      alignItems:'center',
      justifyContent:'center'
   }
})