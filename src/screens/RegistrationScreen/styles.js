import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        display:'flex',
        alignItems:'center'
    },
    logo:{
        display:'flex',
        height:120,
        width: 120,
        alignSelf: 'center',
        margin: 30
    },
    input: {
        height:50,
        borderRadius:5,
        overflow:'hidden',
        backgroundColor:'#fff',
        marginTop: 10,
        marginRight: 30,
        marginBottom: 20,
        marginLeft: 30,
        paddingLeft: 16
    },
    button:{
        backgroundColor:'#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height:50,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonTitle:{
        color:'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    footerView:{
        display:'flex',
        alignItems:'center',
        marginTop:20
    },
    footerText:{
        fontSize:16,
        color:'#2e2e2d'
    },
    footerLink:{
        color: '#788ecc',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom:30
    },
    textCadastro:{
        color:"#fff",
        fontWeight:'600',
        fontSize: 20,
        marginBottom:20,

    }
})