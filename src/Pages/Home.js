import React, {useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Input} from '../components/Input'
import SimplesContext from '../contexts/SimplesContext';

export function Home({navigation}) {

    const {nome, setNome, email, setEmail, cpf, setCpf} = useContext(SimplesContext);


    function formPage(){
        if (nome && email && cpf ) {
            Keyboard.dismiss();
            navigation.navigate('DadosProfissionais');
        } 
    }

    return (
        <View style={styles.container}>
            <StatusBar
            animated={true}
            backgroundColor="#0E4DA4"/>
            <Text style={styles.title}>Cadastre-se</Text>

            <Input  placeholder="Nome" value={nome} onChangeText={setNome}/>

            <Input  placeholder="E-mail" value={email} onChangeText={setEmail}/>

            <Input  placeholder="CPF" value={cpf} onChangeText={setCpf}/>

            <TouchableOpacity style={styles.btn} onPress={ () => formPage()}>
                <Text style={styles.btn_text}>Proximo</Text> 
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:50,
        paddingBottom:20, 
        paddingRight:10,
        paddingLeft:20,
        justifyContent:'flex-start',
        alignItems:'center',
    },

    title:{
        fontSize: 30,
        color:"#0E4DA4", 
        marginTop:70
    }, 
    btn:{
        backgroundColor:'#0E4DA4',
        marginTop:40,
        width: '90%',
        height: 56,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    }, 
    btn_text:{
        color:'white'
    }
  });

