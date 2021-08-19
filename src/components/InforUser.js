import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export function InfoUser(props){
    
    return (
        <View style={styles.container}>
            <Text style={styles.campo}>{props.label} : </Text>
            <Text style={styles.valor}>{props.value}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:20,
        paddingBottom:20, 
        paddingRight:20,
        paddingLeft:20,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',        
        borderWidth: 1,
        borderColor: "#0E4DA4",
        borderRadius: 5,
        width:'100%',
        marginTop:10
    },
    campo:{
        fontSize:20, 
    }, 
    valor:{
        fontSize:18,
    }
})